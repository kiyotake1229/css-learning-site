import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { topics } from '../data/topics'
import LiveDemo from '../components/LiveDemo'
import Quiz from '../components/Quiz'
import Diagram from '../components/Diagram'
import Challenge from '../components/Challenge'
import styles from '../styles/TopicPage.module.css'

const LEVEL_LABEL = {
  beginner: '初級',
  intermediate: '中級',
  advanced: '上級',
}

function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem('css-completed') || '[]')
  } catch {
    return []
  }
}

function setCompleted(ids) {
  localStorage.setItem('css-completed', JSON.stringify(ids))
}

export default function TopicPage() {
  const { id } = useParams()
  const topic = topics.find(t => t.id === id)
  const [completed, setCompletedState] = useState(getCompleted)
  const [activeSection, setActiveSection] = useState('explanation')

  if (!topic) {
    return (
      <div className={styles.notFound}>
        <p>トピックが見つかりません。</p>
        <Link to="/">ホームへ戻る</Link>
      </div>
    )
  }

  const isCompleted = completed.includes(topic.id)

  function toggleComplete() {
    const next = isCompleted
      ? completed.filter(x => x !== topic.id)
      : [...completed, topic.id]
    setCompleted(next)
    setCompletedState(next)
  }

  const currentIndex = topics.findIndex(t => t.id === id)
  const prev = topics[currentIndex - 1]
  const next = topics[currentIndex + 1]

  // Markdown-like rendering for explanation text
  function renderExplanation(text) {
    const lines = text.split('\n')
    const elements = []
    let inCode = false
    let codeLines = []
    let key = 0

    for (const line of lines) {
      if (line.startsWith('```')) {
        if (inCode) {
          elements.push(
            <pre key={key++} className={styles.codeBlock}>
              <code>{codeLines.join('\n')}</code>
            </pre>
          )
          codeLines = []
          inCode = false
        } else {
          inCode = true
        }
        continue
      }
      if (inCode) {
        codeLines.push(line)
        continue
      }
      if (line.startsWith('## ')) {
        elements.push(<h2 key={key++} className={styles.h2}>{line.slice(3)}</h2>)
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={key++} className={styles.h3}>{line.slice(4)}</h3>)
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={key++} className={styles.li}
            dangerouslySetInnerHTML={{ __html: inlineFormat(line.slice(2)) }}
          />
        )
      } else if (line.trim() === '') {
        elements.push(<br key={key++} />)
      } else if (line.startsWith('1. ') || /^\d+\./.test(line)) {
        elements.push(
          <li key={key++} className={styles.oli}
            dangerouslySetInnerHTML={{ __html: inlineFormat(line.replace(/^\d+\.\s/, '')) }}
          />
        )
      } else {
        elements.push(
          <p key={key++} className={styles.p}
            dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
          />
        )
      }
    }
    return elements
  }

  function inlineFormat(text) {
    return text
      .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  }

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <Link to="/" className={styles.backLink}>← ホームへ</Link>
        <button
          className={`${styles.completeBtn} ${isCompleted ? styles.completeBtnDone : ''}`}
          onClick={toggleComplete}
        >
          {isCompleted ? '完了済み ✓' : '完了にする'}
        </button>
      </div>

      <div className={styles.header}>
        <span className={`${styles.level} ${styles[topic.level]}`}>
          {LEVEL_LABEL[topic.level]}
        </span>
        <h1 className={styles.title}>{topic.title}</h1>
        <p className={styles.description}>{topic.description}</p>
      </div>

      <div className={styles.tabs}>
        {['explanation', 'demo', 'quiz', ...(topic.challenge ? ['challenge'] : [])].map(sec => (
          <button
            key={sec}
            className={`${styles.tab} ${activeSection === sec ? styles.tabActive : ''}`}
            onClick={() => setActiveSection(sec)}
          >
            {{ explanation: '解説', demo: 'ライブデモ', quiz: 'クイズ', challenge: '課題' }[sec]}
          </button>
        ))}
      </div>

      <div className={styles.body}>
        {activeSection === 'explanation' && (
          <div className={styles.explanation}>
            {topic.diagram && <Diagram type={topic.diagram} />}
            {renderExplanation(topic.explanation)}
          </div>
        )}
        {activeSection === 'demo' && (
          <div className={styles.demoSection}>
            {topic.lang === 'scss' ? (
              <LiveDemo
                initialHtml={topic.demoCode.html}
                initialScss={topic.demoCode.scss}
              />
            ) : (
              <LiveDemo
                initialHtml={topic.demoCode.html}
                initialCss={topic.demoCode.css}
              />
            )}
          </div>
        )}
        {activeSection === 'quiz' && (
          <div className={styles.quizSection}>
            <Quiz questions={topic.quiz} />
          </div>
        )}
        {activeSection === 'challenge' && topic.challenge && (
          <div className={styles.challengeSection}>
            <Challenge challenge={topic.challenge} />
          </div>
        )}
      </div>

      <div className={styles.nav}>
        {prev ? (
          <Link to={`/topics/${prev.id}`} className={styles.navLink}>
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/topics/${next.id}`} className={`${styles.navLink} ${styles.navNext}`}>
            {next.title} →
          </Link>
        ) : <span />}
      </div>
    </div>
  )
}
