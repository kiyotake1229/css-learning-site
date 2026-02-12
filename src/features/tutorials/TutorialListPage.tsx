import { Link } from 'react-router-dom';
import { Card, CardContent, ProgressBar } from '../../components/common';
import { tutorials } from '../../data/tutorials';
import { useProgress } from '../../hooks';
import styles from './TutorialListPage.module.css';

export function TutorialListPage() {
  const { isTutorialCompleted } = useProgress();

  const completedCount = tutorials.filter((t) => isTutorialCompleted(t.id)).length;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>チュートリアル</h1>
          <p className={styles.subtitle}>CSSの概念をステップバイステップでマスターしよう</p>
        </div>
        <div className={styles.progress}>
          <span className={styles.progressText}>
            {completedCount} / {tutorials.length} 完了
          </span>
          <ProgressBar value={completedCount} max={tutorials.length} size="md" />
        </div>
      </header>

      <div className={styles.tutorialList}>
        {tutorials.map((tutorial) => {
          const completed = isTutorialCompleted(tutorial.id);
          return (
            <Link
              key={tutorial.id}
              to={`/tutorials/${tutorial.id}`}
              className={styles.tutorialLink}
            >
              <Card hoverable className={`${styles.tutorialCard} ${completed ? styles.completed : ''}`}>
                <CardContent>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.tutorialTitle}>{tutorial.title}</h3>
                    {completed && <span className={styles.checkmark}>✓</span>}
                  </div>
                  <p className={styles.tutorialDesc}>{tutorial.description}</p>
                  <div className={styles.meta}>
                    <span className={`${styles.tag} ${styles[tutorial.difficulty]}`}>
                      {tutorial.difficulty}
                    </span>
                    <span className={`${styles.tag} ${styles.categoryTag}`}>
                      {tutorial.category}
                    </span>
                    <span className={styles.stepCount}>
                      {tutorial.steps.length}ステップ
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
