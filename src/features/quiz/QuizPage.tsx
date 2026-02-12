import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MultipleChoice, FillInBlank } from '../../components/quiz';
import { Button, Card, CardContent, ProgressBar } from '../../components/common';
import { quizQuestions } from '../../data/quizzes';
import { useProgress } from '../../hooks';
import type { Category } from '../../types';
import styles from './QuizPage.module.css';

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'すべてのトピック' },
  { value: 'flexbox', label: 'Flexbox' },
  { value: 'grid', label: 'Grid' },
  { value: 'responsive', label: 'レスポンシブ' },
  { value: 'animation', label: 'アニメーション' },
];

export function QuizPage() {
  const navigate = useNavigate();
  const { completeQuiz } = useProgress();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all' | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const filteredQuestions = selectedCategory && selectedCategory !== 'all'
    ? quizQuestions.filter((q) => q.category === selectedCategory)
    : quizQuestions;

  const currentQuestion = filteredQuestions[currentIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      const score = Math.round((correctCount / filteredQuestions.length) * 100);
      completeQuiz(`quiz-${selectedCategory}`, score);
    }
  };

  const handleStartQuiz = (category: Category | 'all') => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setCorrectCount(0);
    setIsFinished(false);
  };

  const handleRestart = () => {
    setSelectedCategory(null);
    setCurrentIndex(0);
    setCorrectCount(0);
    setIsFinished(false);
  };

  if (!selectedCategory) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>CSSクイズ</h1>
          <p className={styles.subtitle}>インタラクティブなクイズでCSSの知識をテストしよう</p>
        </header>

        <div className={styles.categorySelection}>
          <h2 className={styles.sectionTitle}>トピックを選択</h2>
          <div className={styles.categories}>
            {categories.map((cat) => (
              <Card
                key={cat.value}
                hoverable
                onClick={() => handleStartQuiz(cat.value)}
                className={styles.categoryCard}
              >
                <CardContent>
                  <h3 className={styles.categoryTitle}>{cat.label}</h3>
                  <p className={styles.questionCount}>
                    {cat.value === 'all'
                      ? `${quizQuestions.length}問`
                      : `${quizQuestions.filter((q) => q.category === cat.value).length}問`}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isFinished) {
    const score = Math.round((correctCount / filteredQuestions.length) * 100);
    return (
      <div className={styles.container}>
        <Card className={styles.resultsCard}>
          <CardContent>
            <h2 className={styles.resultsTitle}>クイズ完了!</h2>
            <div className={styles.score}>
              <span className={styles.scoreValue}>{score}%</span>
              <span className={styles.scoreLabel}>
                {filteredQuestions.length}問中{correctCount}問正解
              </span>
            </div>
            <ProgressBar value={score} max={100} size="lg" />
            <div className={styles.resultsActions}>
              <Button onClick={handleRestart}>別のクイズに挑戦</Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                ホームに戻る
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.quizHeader}>
        <Button variant="ghost" size="sm" onClick={handleRestart}>
          ← トピック選択に戻る
        </Button>
        <div className={styles.progress}>
          <span className={styles.progressText}>
            問題 {currentIndex + 1} / {filteredQuestions.length}
          </span>
          <ProgressBar
            value={currentIndex + 1}
            max={filteredQuestions.length}
            size="sm"
          />
        </div>
      </header>

      <div className={styles.questionContainer}>
        {currentQuestion.type === 'multiple_choice' ? (
          <MultipleChoice
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        ) : (
          <FillInBlank
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
}
