import { useState, useEffect } from 'react'
import { topics } from '../data/topics'
import TopicCard from '../components/TopicCard'
import ProgressBar from '../components/ProgressBar'
import styles from '../styles/Home.module.css'

const LEVELS = [
  { value: 'all', label: 'すべて' },
  { value: 'beginner', label: '初級' },
  { value: 'intermediate', label: '中級' },
  { value: 'advanced', label: '上級' },
  { value: 'scss', label: 'SCSS' },
]

function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem('css-completed') || '[]')
  } catch {
    return []
  }
}

export default function Home() {
  const [filter, setFilter] = useState('all')
  const [completed, setCompleted] = useState(getCompleted)

  useEffect(() => {
    const handler = () => setCompleted(getCompleted())
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])

  const filtered =
    filter === 'all'
      ? topics
      : filter === 'scss'
      ? topics.filter(t => t.lang === 'scss')
      : topics.filter(t => t.level === filter && t.lang !== 'scss')

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>CSS を学ぼう</h1>
        <p className={styles.heroSub}>
          初級から上級まで、インタラクティブなデモとクイズで楽しく学べます。
        </p>
        <ProgressBar completed={completed.length} total={topics.length} />
      </div>

      <div className={styles.content}>
        <div className={styles.filterBar}>
          {LEVELS.map(l => (
            <button
              key={l.value}
              data-filter={l.value}
              className={`${styles.filterBtn} ${filter === l.value ? styles.filterActive : ''}`}
              onClick={() => setFilter(l.value)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map(topic => (
            <TopicCard
              key={topic.id}
              topic={topic}
              completed={completed.includes(topic.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
