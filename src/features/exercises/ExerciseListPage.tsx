import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Button, ProgressBar } from '../../components/common';
import { exercises } from '../../data/exercises';
import { useProgress } from '../../hooks';
import type { Category, Difficulty } from '../../types';
import styles from './ExerciseListPage.module.css';

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'flexbox', label: 'Flexbox' },
  { value: 'grid', label: 'Grid' },
  { value: 'responsive', label: 'レスポンシブ' },
  { value: 'animation', label: 'アニメーション' },
];

const difficulties: { value: Difficulty | 'all'; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'beginner', label: '初級' },
  { value: 'intermediate', label: '中級' },
  { value: 'advanced', label: '上級' },
];

export function ExerciseListPage() {
  const [categoryFilter, setCategoryFilter] = useState<Category | 'all'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | 'all'>('all');
  const { isExerciseCompleted } = useProgress();

  const filteredExercises = exercises.filter((exercise) => {
    const matchesCategory = categoryFilter === 'all' || exercise.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === 'all' || exercise.difficulty === difficultyFilter;
    return matchesCategory && matchesDifficulty;
  });

  const completedCount = filteredExercises.filter((e) => isExerciseCompleted(e.id)).length;
  const totalCount = filteredExercises.length;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>演習</h1>
          <p className={styles.subtitle}>お手本のデザインに合わせてCSSを練習しよう</p>
        </div>
        <div className={styles.progress}>
          <span className={styles.progressText}>
            {completedCount} / {totalCount} 完了
          </span>
          <ProgressBar value={completedCount} max={totalCount} size="md" />
        </div>
      </header>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>カテゴリ:</span>
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={categoryFilter === cat.value ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setCategoryFilter(cat.value)}
            >
              {cat.label}
            </Button>
          ))}
        </div>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>難易度:</span>
          {difficulties.map((diff) => (
            <Button
              key={diff.value}
              variant={difficultyFilter === diff.value ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setDifficultyFilter(diff.value)}
            >
              {diff.label}
            </Button>
          ))}
        </div>
      </div>

      <div className={styles.exerciseList}>
        {filteredExercises.map((exercise) => {
          const completed = isExerciseCompleted(exercise.id);
          return (
            <Link
              key={exercise.id}
              to={`/exercises/${exercise.id}`}
              className={styles.exerciseLink}
            >
              <Card hoverable className={`${styles.exerciseCard} ${completed ? styles.completed : ''}`}>
                <CardContent>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.exerciseTitle}>{exercise.title}</h3>
                    {completed && <span className={styles.checkmark}>✓</span>}
                  </div>
                  <p className={styles.exerciseDesc}>{exercise.description}</p>
                  <div className={styles.tags}>
                    <span className={`${styles.tag} ${styles[exercise.difficulty]}`}>
                      {exercise.difficulty}
                    </span>
                    <span className={`${styles.tag} ${styles.categoryTag}`}>
                      {exercise.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {filteredExercises.length === 0 && (
        <div className={styles.empty}>
          <p>選択したフィルターに一致する演習がありません。</p>
        </div>
      )}
    </div>
  );
}
