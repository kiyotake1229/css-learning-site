import styles from '../styles/ProgressBar.module.css'

export default function ProgressBar({ completed, total }) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100)
  return (
    <div className={styles.container}>
      <div className={styles.labels}>
        <span className={styles.label}>学習進捗</span>
        <span className={styles.count}>
          {completed} / {total} トピック完了
        </span>
      </div>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
      <div className={styles.pct}>{pct}%</div>
    </div>
  )
}
