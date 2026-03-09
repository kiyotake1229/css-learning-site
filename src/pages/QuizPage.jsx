import { useState } from 'react'
import { Link } from 'react-router-dom'
import { topics } from '../data/topics'
import Quiz from '../components/Quiz'
import styles from '../styles/QuizPage.module.css'

const ALL_OPTION = { id: 'all', title: 'すべてのトピック（ランダム20問）' }

export default function QuizPage() {
  const [selected, setSelected] = useState(null)

  function getQuestions(topicId) {
    if (topicId === 'all') {
      const all = topics.flatMap(t => t.quiz.map(q => ({ ...q, topicTitle: t.title })))
      // shuffle and take 20
      for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[all[i], all[j]] = [all[j], all[i]]
      }
      return all.slice(0, 20)
    }
    const topic = topics.find(t => t.id === topicId)
    return topic ? topic.quiz : []
  }

  if (selected) {
    const questions = getQuestions(selected.id)
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={() => setSelected(null)}>
            ← トピック選択に戻る
          </button>
          <h1 className={styles.title}>{selected.title} のクイズ</h1>
        </div>
        <div className={styles.quizWrap}>
          <Quiz questions={questions} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>クイズ</h1>
        <p className={styles.sub}>トピックを選んでクイズに挑戦しましょう</p>
      </div>

      <div className={styles.list}>
        <button
          className={`${styles.item} ${styles.itemAll}`}
          onClick={() => setSelected(ALL_OPTION)}
        >
          <span className={styles.itemTitle}>{ALL_OPTION.title}</span>
          <span className={styles.itemCount}>全トピックから20問</span>
        </button>

        {topics.map(topic => (
          <button
            key={topic.id}
            className={styles.item}
            onClick={() => setSelected(topic)}
          >
            <div className={styles.itemLeft}>
              <span className={`${styles.badge} ${styles[topic.level]}`}>
                {{ beginner: '初級', intermediate: '中級', advanced: '上級' }[topic.level]}
              </span>
              <span className={styles.itemTitle}>{topic.title}</span>
            </div>
            <span className={styles.itemCount}>{topic.quiz.length}問</span>
          </button>
        ))}
      </div>
    </div>
  )
}
