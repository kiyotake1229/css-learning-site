import { useState } from 'react'
import styles from '../styles/Challenge.module.css'

const BASE_STYLE = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: system-ui, -apple-system, sans-serif; padding: 20px; background: #fff; }
`

function makeSrcDoc(html, css) {
  return `<!DOCTYPE html><html><head><style>${BASE_STYLE}${css}</style></head><body>${html}</body></html>`
}

async function renderToImageData(html, css, w, h) {
  const styleContent = BASE_STYLE.replace(/\n/g, ' ') + css.replace(/\n/g, ' ')
  const bodyContent = html
  const xhtmlDoc = `<html xmlns="http://www.w3.org/1999/xhtml"><head><style><![CDATA[${styleContent}]]></style></head><body>${bodyContent}</body></html>`
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><foreignObject x="0" y="0" width="${w}" height="${h}">${xhtmlDoc}</foreignObject></svg>`
  const dataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgStr)

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      setTimeout(() => {
        const canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = h
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, w, h)
        ctx.drawImage(img, 0, 0)
        try {
          resolve(ctx.getImageData(0, 0, w, h))
        } catch (e) {
          reject(e)
        }
      }, 80)
    }
    img.onerror = () => reject(new Error('render failed'))
    img.src = dataUrl
  })
}

async function computeScore(targetHtml, targetCss, userHtml, userCss) {
  const W = 400, H = 300, THRESHOLD = 25
  const [tData, uData] = await Promise.all([
    renderToImageData(targetHtml, targetCss, W, H),
    renderToImageData(userHtml, userCss, W, H),
  ])
  let match = 0
  for (let i = 0; i < W * H * 4; i += 4) {
    const dr = Math.abs(tData.data[i]   - uData.data[i])
    const dg = Math.abs(tData.data[i+1] - uData.data[i+1])
    const db = Math.abs(tData.data[i+2] - uData.data[i+2])
    if (dr <= THRESHOLD && dg <= THRESHOLD && db <= THRESHOLD) match++
  }
  return Math.round((match / (W * H)) * 100)
}

function getScoreMsg(s) {
  if (s >= 90) return '完璧！お手本とほぼ同じです！'
  if (s >= 75) return 'よくできました！細部を調整してみましょう。'
  if (s >= 50) return 'もう少しです。ヒントを参考にしてみましょう。'
  return 'CSSを見直してみましょう。'
}

function getScoreColor(s) {
  if (s >= 90) return '#16a34a'
  if (s >= 75) return '#2563eb'
  if (s >= 50) return '#d97706'
  return '#dc2626'
}

export default function Challenge({ challenge }) {
  const [tab, setTab] = useState('css')
  const [html, setHtml] = useState(challenge.initialHtml)
  const [css, setCss] = useState(challenge.initialCss)
  const [score, setScore] = useState(null)
  const [scoring, setScoring] = useState(false)
  const [scoreError, setScoreError] = useState(false)
  const [showHints, setShowHints] = useState(false)

  function handleReset() {
    setHtml(challenge.initialHtml)
    setCss(challenge.initialCss)
    setScore(null)
    setScoreError(false)
  }

  async function handleScore() {
    setScoring(true)
    setScoreError(false)
    try {
      const s = await computeScore(challenge.targetHtml, challenge.targetCss, html, css)
      setScore(s)
    } catch {
      setScoreError(true)
    }
    setScoring(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{challenge.description}</h3>
          <p className={styles.taskDesc}>{challenge.taskDescription}</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.hintBtn} onClick={() => setShowHints(h => !h)}>
            {showHints ? 'ヒントを隠す' : '💡 ヒントを見る'}
          </button>
          <button className={styles.resetBtn} onClick={handleReset}>
            リセット
          </button>
        </div>
      </div>

      {showHints && (
        <div className={styles.hintBox}>
          <ul>
            {challenge.hints.map((hint, i) => (
              <li key={i}>{hint}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.main}>
        {/* お手本 */}
        <div className={styles.pane}>
          <div className={styles.paneLabel}>🎯 お手本</div>
          <iframe
            className={styles.iframe}
            srcDoc={makeSrcDoc(challenge.targetHtml, challenge.targetCss)}
            sandbox="allow-scripts"
            title="お手本"
          />
        </div>

        {/* エディタ */}
        <div className={`${styles.pane} ${styles.editorPane}`}>
          <div className={styles.editorHeader}>
            <span className={styles.editorLabel}>✏️ エディタ</span>
            <div className={styles.editorTabs}>
              {['html', 'css'].map(t => (
                <button
                  key={t}
                  className={`${styles.editorTab} ${tab === t ? styles.editorTabActive : ''}`}
                  onClick={() => setTab(t)}
                >
                  {t.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <textarea
            className={styles.textarea}
            value={tab === 'html' ? html : css}
            onChange={e => tab === 'html' ? setHtml(e.target.value) : setCss(e.target.value)}
            spellCheck={false}
          />
        </div>

        {/* プレビュー */}
        <div className={styles.pane}>
          <div className={styles.paneLabel}>👁 プレビュー</div>
          <iframe
            className={styles.iframe}
            srcDoc={makeSrcDoc(html, css)}
            sandbox="allow-scripts"
            title="プレビュー"
          />
        </div>
      </div>

      <div className={styles.scoreArea}>
        <button
          className={styles.scoreBtn}
          onClick={handleScore}
          disabled={scoring}
        >
          {scoring ? '採点中...' : '採点する'}
        </button>

        {score !== null && !scoreError && (
          <div className={styles.scoreResult}>
            <span className={styles.scoreNum} style={{ color: getScoreColor(score) }}>
              {score}%
            </span>
            <div className={styles.scoreBarWrap}>
              <div
                className={styles.scoreFill}
                style={{ width: `${score}%`, background: getScoreColor(score) }}
              />
            </div>
            <span className={styles.scoreMsg}>{getScoreMsg(score)}</span>
          </div>
        )}

        {scoreError && (
          <span className={styles.scoreErrorMsg}>
            採点に失敗しました。もう一度試してください。
          </span>
        )}
      </div>
    </div>
  )
}
