import { Link } from 'react-router-dom'
import styles from '../styles/TopicCard.module.css'

const LEVEL_LABEL = {
  beginner: '初級',
  intermediate: '中級',
  advanced: '上級',
}

export default function TopicCard({ topic, completed }) {
  return (
    <Link to={`/topics/${topic.id}`} className={`${styles.card} ${topic.lang === 'scss' ? styles.scssCard : ''}`}>
      <div className={styles.header}>
        <span className={`${styles.level} ${styles[topic.level]}`}>
          {LEVEL_LABEL[topic.level]}
        </span>
        {topic.lang === 'scss' && (
          <span className={styles.scssTag}>SCSS</span>
        )}
        {completed && <span className={styles.badge}>完了</span>}
      </div>
      <h3 className={styles.title}>{topic.title}</h3>
      <p className={styles.description}>{topic.description}</p>
      <div className={styles.footer}>
        <span className={styles.quizCount}>{topic.quiz.length}問のクイズ</span>
        <span className={styles.arrow}>→</span>
      </div>
    </Link>
  )
}
