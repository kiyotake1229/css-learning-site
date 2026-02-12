import { useState } from 'react';
import { Button, Card, CardContent } from '../common';
import type { MultipleChoiceQuestion } from '../../types';
import styles from './MultipleChoice.module.css';

interface MultipleChoiceProps {
  question: MultipleChoiceQuestion;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

export function MultipleChoice({ question, onAnswer, onNext }: MultipleChoiceProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    setSubmitted(true);
    onAnswer(selectedIndex === question.correctIndex);
  };

  const handleNext = () => {
    setSelectedIndex(null);
    setSubmitted(false);
    onNext();
  };

  const isCorrect = selectedIndex === question.correctIndex;

  return (
    <div className={styles.container}>
      <h3 className={styles.question}>{question.question}</h3>

      {question.codeSnippet && (
        <pre className={styles.codeSnippet}>
          <code>{question.codeSnippet}</code>
        </pre>
      )}

      <div className={styles.options}>
        {question.options.map((option, index) => {
          let optionClass = styles.option;
          if (submitted) {
            if (index === question.correctIndex) {
              optionClass += ` ${styles.correct}`;
            } else if (index === selectedIndex) {
              optionClass += ` ${styles.incorrect}`;
            }
          } else if (index === selectedIndex) {
            optionClass += ` ${styles.selected}`;
          }

          return (
            <button
              key={index}
              className={optionClass}
              onClick={() => !submitted && setSelectedIndex(index)}
              disabled={submitted}
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className={styles.optionText}>{option}</span>
            </button>
          );
        })}
      </div>

      {submitted && (
        <Card className={`${styles.feedback} ${isCorrect ? styles.successCard : styles.errorCard}`}>
          <CardContent>
            <p className={styles.feedbackTitle}>
              {isCorrect ? '正解!' : '不正解'}
            </p>
            <p className={styles.explanation}>{question.explanation}</p>
          </CardContent>
        </Card>
      )}

      <div className={styles.actions}>
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={selectedIndex === null}>
            回答する
          </Button>
        ) : (
          <Button onClick={handleNext}>次の問題</Button>
        )}
      </div>
    </div>
  );
}
