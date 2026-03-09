import { useState } from 'react'
import styles from '../styles/Quiz.module.css'

export default function Quiz({ questions }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [finished, setFinished] = useState(false)

  const q = questions[current]

  function handleSelect(idx) {
    if (selected !== null) return
    setSelected(idx)
  }

  function handleNext() {
    const newAnswers = [...answers, selected === q.answer]
    setAnswers(newAnswers)
    if (current + 1 >= questions.length) {
      setFinished(true)
    } else {
      setCurrent(current + 1)
      setSelected(null)
    }
  }

  function handleReset() {
    setCurrent(0)
    setSelected(null)
    setAnswers([])
    setFinished(false)
  }

  if (finished) {
    const score = answers.filter(Boolean).length
    const total = questions.length
    const pct = Math.round((score / total) * 100)
    return (
      <div className={styles.result}>
        <div className={styles.scoreCircle}>
          <span className={styles.scoreNum}>{score}</span>
          <span className={styles.scoreDenom}>/ {total}</span>
        </div>
        <p className={styles.scoreMsg}>
          {pct === 100
            ? '満点！完璧です！'
            : pct >= 70
            ? 'よくできました！'
            : 'もう一度チャレンジしてみましょう。'}
        </p>
        <div className={styles.answerList}>
          {questions.map((qu, i) => (
            <div
              key={i}
              className={`${styles.answerItem} ${answers[i] ? styles.correct : styles.wrong}`}
            >
              <div className={styles.answerRow}>
                <span className={styles.answerMark}>{answers[i] ? '○' : '✕'}</span>
                <span className={styles.answerQ}>{qu.question}</span>
              </div>
              {!answers[i] && (
                <span className={styles.correctAns}>正解: {qu.options[qu.answer]}</span>
              )}
              {answers[i] ? (
                qu.advice && (
                  <span className={`${styles.resultHint} ${styles.resultAdvice}`}>
                    <span className={`${styles.hintLabel} ${styles.hintLabelAdvice}`}>さらに深める</span> {qu.advice}
                  </span>
                )
              ) : (
                qu.hint && (
                  <span className={styles.resultHint}>
                    <span className={styles.hintLabel}>解説</span> {qu.hint}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
        <button className={styles.resetBtn} onClick={handleReset}>
          もう一度挑戦
        </button>
      </div>
    )
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.progress}>
        <span className={styles.progressText}>
          問題 {current + 1} / {questions.length}
        </span>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${((current) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <p className={styles.question}>{q.question}</p>

      <div className={styles.options}>
        {q.options.map((opt, idx) => {
          let cls = styles.option
          if (selected !== null) {
            if (idx === q.answer) cls += ` ${styles.optionCorrect}`
            else if (idx === selected) cls += ` ${styles.optionWrong}`
          }
          return (
            <button
              key={idx}
              className={cls}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(65 + idx)}
              </span>
              {opt}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div className={`${styles.feedback} ${selected === q.answer ? styles.feedbackCorrect : styles.feedbackWrong}`}>
          <div className={styles.feedbackVerdict}>
            {selected === q.answer
              ? '正解！'
              : `不正解。正解は「${q.options[q.answer]}」です。`}
          </div>
          {selected === q.answer ? (
            q.advice && (
              <div className={`${styles.hint} ${styles.hintAdvice}`}>
                <span className={`${styles.hintLabel} ${styles.hintLabelAdvice}`}>さらに深める</span> {q.advice}
              </div>
            )
          ) : (
            q.hint && (
              <div className={styles.hint}>
                <span className={styles.hintLabel}>解説</span> {q.hint}
              </div>
            )
          )}
        </div>
      )}

      {selected !== null && (
        <button className={styles.nextBtn} onClick={handleNext}>
          {current + 1 >= questions.length ? '結果を見る' : '次の問題'}
        </button>
      )}
    </div>
  )
}
