import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CodeEditor, LivePreview } from '../../components/editor';
import { StepNavigation } from '../../components/tutorial';
import { Button } from '../../components/common';
import { getTutorialById } from '../../data/tutorials';
import { useProgress } from '../../hooks';
import styles from './TutorialPage.module.css';

export function TutorialPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { completeTutorial, isTutorialCompleted } = useProgress();

  const tutorial = id ? getTutorialById(id) : undefined;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [css, setCss] = useState('');

  const currentStep = tutorial?.steps[currentStepIndex];

  useEffect(() => {
    if (currentStep?.codeExample) {
      setCss(currentStep.task?.initialCss || currentStep.codeExample.css);
    }
  }, [currentStep]);

  if (!tutorial) {
    return (
      <div className={styles.notFound}>
        <h2>チュートリアルが見つかりません</h2>
        <Link to="/tutorials">チュートリアル一覧に戻る</Link>
      </div>
    );
  }

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentStepIndex < tutorial.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleComplete = () => {
    completeTutorial(tutorial.id);
    navigate('/tutorials');
  };

  const completed = isTutorialCompleted(tutorial.id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Button variant="ghost" size="sm" onClick={() => navigate('/tutorials')}>
            ← 戻る
          </Button>
          <div>
            <h1 className={styles.title}>{tutorial.title}</h1>
            <p className={styles.stepInfo}>
              ステップ {currentStepIndex + 1} / {tutorial.steps.length}: {currentStep?.title}
            </p>
          </div>
        </div>
        {completed && <span className={styles.completedBadge}>完了</span>}
      </header>

      <div className={styles.content}>
        <div className={styles.lesson}>
          <div className={styles.lessonContent}>
            {currentStep?.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>
                {paragraph.split(/(`[^`]+`)/).map((part, j) => {
                  if (part.startsWith('`') && part.endsWith('`')) {
                    return <code key={j} className={styles.inlineCode}>{part.slice(1, -1)}</code>;
                  }
                  if (part.includes('**')) {
                    return part.split(/(\*\*[^*]+\*\*)/).map((segment, k) => {
                      if (segment.startsWith('**') && segment.endsWith('**')) {
                        return <strong key={k}>{segment.slice(2, -2)}</strong>;
                      }
                      return segment;
                    });
                  }
                  return part;
                })}
              </p>
            ))}
          </div>

          {currentStep?.codeExample && (
            <div className={styles.codeSection}>
              <h3 className={styles.sectionTitle}>試してみよう</h3>
              <CodeEditor
                value={css}
                onChange={setCss}
                language="css"
                height="200px"
              />
            </div>
          )}

          {currentStep?.task && (
            <div className={styles.task}>
              <strong>課題:</strong> {currentStep.task.instruction}
            </div>
          )}
        </div>

        <div className={styles.preview}>
          {currentStep?.codeExample && (
            <LivePreview
              html={currentStep.codeExample.html || ''}
              css={css}
              title="プレビュー"
              height="100%"
            />
          )}
        </div>
      </div>

      <StepNavigation
        currentStep={currentStepIndex}
        totalSteps={tutorial.steps.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onComplete={handleComplete}
      />
    </div>
  );
}
