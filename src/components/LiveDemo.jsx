import { useState, useEffect, useRef } from 'react'
import styles from '../styles/LiveDemo.module.css'


async function compileSass(scss) {
  try {
    const sass = await import('sass')
    const result = sass.compileString(scss)
    return { css: result.css, error: null }
  } catch (e) {
    return { css: null, error: e.sassMessage || e.message }
  }
}

export default function LiveDemo({ initialHtml, initialCss, initialScss }) {
  const isScssMode = !!initialScss

  const [html, setHtml] = useState(initialHtml)
  const [css, setCss] = useState(initialCss || '')
  const [scss, setScss] = useState(initialScss || '')
  const [compiledCss, setCompiledCss] = useState('')
  const [compileError, setCompileError] = useState(null)
  const [compiling, setCompiling] = useState(false)
  const [activeTab, setActiveTab] = useState(isScssMode ? 'scss' : 'html')
  const [splitMode, setSplitMode] = useState(false)
  const debounceRef = useRef(null)

  // Initial SCSS compile
  useEffect(() => {
    if (!isScssMode) return
    compileSass(initialScss).then(({ css: c, error }) => {
      if (!error) setCompiledCss(c)
    })
  }, []) // eslint-disable-line

  // Auto-compile on SCSS change (debounced)
  useEffect(() => {
    if (!isScssMode) return
    setCompiling(true)
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(async () => {
      const { css: c, error } = await compileSass(scss)
      setCompiling(false)
      if (error) {
        setCompileError(error)
      } else {
        setCompiledCss(c)
        setCompileError(null)
      }
    }, 450)
  }, [scss]) // eslint-disable-line

  const previewCss = isScssMode ? compiledCss : css

  const srcDoc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: sans-serif; padding: 12px; font-size: 14px; line-height: 1.5; }
  ${previewCss}
</style>
</head>
<body>${html}</body>
</html>`

  const tabs = isScssMode
    ? [{ key: 'html', label: 'HTML' }, { key: 'scss', label: 'SCSS' }]
    : [{ key: 'html', label: 'HTML' }, { key: 'css', label: 'CSS' }]

  function handleReset() {
    setHtml(initialHtml)
    if (isScssMode) {
      setScss(initialScss)
      setCompileError(null)
    } else {
      setCss(initialCss)
    }
  }

  const currentValue = activeTab === 'html' ? html : isScssMode ? scss : css
  function handleChange(val) {
    if (activeTab === 'html') setHtml(val)
    else if (isScssMode) setScss(val)
    else setCss(val)
  }

  const cssLabel = isScssMode ? 'SCSS' : 'CSS'

  return (
    <div className={`${styles.container} ${splitMode ? styles.containerSplit : ''}`}>
      <div className={styles.editor}>
        <div className={styles.tabs}>
          {!splitMode && tabs.map(t => (
            <button
              key={t.key}
              className={`${styles.tab} ${activeTab === t.key ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
          {isScssMode && compiling && (
            <span className={styles.compiling}>コンパイル中…</span>
          )}
          <button
            className={`${styles.splitBtn} ${splitMode ? styles.splitBtnActive : ''}`}
            onClick={() => setSplitMode(s => !s)}
            title={splitMode ? 'タブ表示に戻す' : 'スプリット表示（HTML+CSS同時編集）'}
          >
            {splitMode ? '⊟ タブ' : '⊞ 分割'}
          </button>
        </div>

        {splitMode ? (
          <div className={styles.editorSplit}>
            <div className={styles.splitPane}>
              <div className={styles.splitLabel}>HTML</div>
              <textarea
                className={styles.textarea}
                value={html}
                onChange={e => setHtml(e.target.value)}
                spellCheck={false}
              />
            </div>
            <div className={styles.splitPane}>
              <div className={styles.splitLabel}>{cssLabel}</div>
              <textarea
                className={styles.textarea}
                value={isScssMode ? scss : css}
                onChange={e => isScssMode ? setScss(e.target.value) : setCss(e.target.value)}
                spellCheck={false}
              />
            </div>
          </div>
        ) : (
          <div className={styles.editorArea}>
            <textarea
              className={styles.textarea}
              value={currentValue}
              onChange={e => handleChange(e.target.value)}
              spellCheck={false}
            />
          </div>
        )}

        {compileError && (
          <div className={styles.errorBox}>
            <strong>SCSSエラー:</strong> {compileError}
          </div>
        )}

        <button className={styles.resetBtn} onClick={handleReset}>
          リセット
        </button>
      </div>

      <div className={styles.preview}>
        <div className={styles.previewLabel}>
          プレビュー
          {isScssMode && !compileError && (
            <span className={styles.scssTag}>SCSS → CSS</span>
          )}
        </div>
        <iframe
          className={styles.iframe}
          srcDoc={srcDoc}
          title="Live Preview"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  )
}
