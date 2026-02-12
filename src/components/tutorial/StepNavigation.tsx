import { Button } from '../common';
import styles from './StepNavigation.module.css';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onComplete?: () => void;
}

export function StepNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onComplete,
}: StepNavigationProps) {
  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;

  return (
    <div className={styles.container}>
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={isFirst}
      >
        前へ
      </Button>

      <div className={styles.dots}>
        {Array.from({ length: totalSteps }, (_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === currentStep ? styles.active : ''} ${i < currentStep ? styles.completed : ''}`}
          />
        ))}
      </div>

      {isLast ? (
        <Button onClick={onComplete}>チュートリアルを完了</Button>
      ) : (
        <Button onClick={onNext}>次へ</Button>
      )}
    </div>
  );
}
