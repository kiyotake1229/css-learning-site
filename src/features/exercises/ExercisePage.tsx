import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CodeEditor } from '../../components/editor';
import { SideBySideView } from '../../components/comparison';
import { Button, Card, CardContent } from '../../components/common';
import { getExerciseById, exercises } from '../../data/exercises';
import { validateCss } from '../../utils/styleComparator';
import { useProgress } from '../../hooks';
import styles from './ExercisePage.module.css';

export function ExercisePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { completeExercise, isExerciseCompleted } = useProgress();

  const exercise = id ? getExerciseById(id) : undefined;
  const [css, setCss] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [, setShowSolution] = useState(false);
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    score: number;
  } | null>(null);

  useEffect(() => {
    if (exercise) {
      setCss(exercise.initialCss);
      setShowHints(false);
      setCurrentHint(0);
      setShowSolution(false);
      setValidationResult(null);
    }
  }, [exercise]);

  if (!exercise) {
    return (
      <div className={styles.notFound}>
        <h2>演習が見つかりません</h2>
        <Link to="/exercises">演習一覧に戻る</Link>
      </div>
    );
  }

  const handleCheck = () => {
    const result = validateCss(css, exercise.validationRules);
    setValidationResult(result);

    if (result.isValid) {
      completeExercise(exercise.id, result.score);
    }
  };

  const handleShowSolution = () => {
    setShowSolution(true);
    setCss(exercise.solutionCss);
  };

  const handleReset = () => {
    setCss(exercise.initialCss);
    setShowSolution(false);
    setValidationResult(null);
  };

  const nextHint = () => {
    if (currentHint < exercise.hints.length - 1) {
      setCurrentHint(currentHint + 1);
    }
  };

  const completed = isExerciseCompleted(exercise.id);

  // 次の問題を取得
  const currentIndex = exercises.findIndex((e) => e.id === exercise.id);
  const nextExercise = currentIndex < exercises.length - 1 ? exercises[currentIndex + 1] : null;
  const prevExercise = currentIndex > 0 ? exercises[currentIndex - 1] : null;

  const handleNextExercise = () => {
    if (nextExercise) {
      navigate(`/exercises/${nextExercise.id}`);
    }
  };

  const handlePrevExercise = () => {
    if (prevExercise) {
      navigate(`/exercises/${prevExercise.id}`);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Button variant="ghost" size="sm" onClick={() => navigate('/exercises')}>
            ← 戻る
          </Button>
          <div>
            <h1 className={styles.title}>{exercise.title}</h1>
            <p className={styles.description}>{exercise.description}</p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <span className={`${styles.badge} ${styles[exercise.difficulty]}`}>
            {exercise.difficulty}
          </span>
          <span className={`${styles.badge} ${styles.category}`}>
            {exercise.category}
          </span>
          {completed && <span className={`${styles.badge} ${styles.completed}`}>完了</span>}
        </div>
      </header>

      <div className={styles.workspace}>
        <div className={styles.editorPanel}>
          <CodeEditor
            value={css}
            onChange={setCss}
            language="css"
            height="calc(100vh - 400px)"
          />

          <div className={styles.actions}>
            <Button onClick={handleCheck}>回答をチェック</Button>
            <Button variant="outline" onClick={() => setShowHints(!showHints)}>
              {showHints ? 'ヒントを隠す' : 'ヒントを表示'}
            </Button>
            <Button variant="ghost" onClick={handleReset}>リセット</Button>
            <Button variant="ghost" onClick={handleShowSolution}>解答を表示</Button>
          </div>

          {validationResult && (
            <Card className={`${styles.result} ${validationResult.isValid ? styles.success : styles.error}`}>
              <CardContent>
                {validationResult.isValid ? (
                  <div className={styles.successContent}>
                    <span><strong>正解!</strong> すべての検証ルールをパスしました。</span>
                    {nextExercise && (
                      <Button onClick={handleNextExercise}>
                        次の問題へ →
                      </Button>
                    )}
                  </div>
                ) : (
                  <>
                    <strong>もう少しです。</strong> スコア: {Math.round(validationResult.score)}%。
                    ヒントを確認するか、もう一度試してみてください。
                  </>
                )}
              </CardContent>
            </Card>
          )}

          <div className={styles.navigation}>
            <Button
              variant="outline"
              onClick={handlePrevExercise}
              disabled={!prevExercise}
            >
              ← 前の問題
            </Button>
            <span className={styles.exerciseCount}>
              {currentIndex + 1} / {exercises.length}
            </span>
            <Button
              variant="outline"
              onClick={handleNextExercise}
              disabled={!nextExercise}
            >
              次の問題 →
            </Button>
          </div>

          {showHints && exercise.hints.length > 0 && (
            <Card className={styles.hints}>
              <CardContent>
                <div className={styles.hintHeader}>
                  <strong>ヒント {currentHint + 1} / {exercise.hints.length}</strong>
                  {currentHint < exercise.hints.length - 1 && (
                    <Button variant="ghost" size="sm" onClick={nextHint}>
                      次のヒント
                    </Button>
                  )}
                </div>
                <p>{exercise.hints[currentHint]}</p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className={styles.previewPanel}>
          <SideBySideView
            html={exercise.htmlTemplate}
            userCss={css}
            targetCss={exercise.solutionCss}
            height="calc(100vh - 320px)"
          />
        </div>
      </div>
    </div>
  );
}
