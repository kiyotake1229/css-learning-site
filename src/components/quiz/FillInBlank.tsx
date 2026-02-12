import { useState } from 'react';
import { Button, Card, CardContent } from '../common';
import type { FillInBlankQuestion } from '../../types';
import styles from './FillInBlank.module.css';

interface FillInBlankProps {
  question: FillInBlankQuestion;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

export function FillInBlank({ question, onAnswer, onNext }: FillInBlankProps) {
  const [answers, setAnswers] = useState<Record<string, string>>(
    Object.fromEntries(question.blanks.map((b) => [b.id, '']))
  );
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  const handleChange = (blankId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [blankId]: value }));
  };

  const handleSubmit = () => {
    const newResults: Record<string, boolean> = {};
    let allCorrect = true;

    for (const blank of question.blanks) {
      const userAnswer = answers[blank.id].trim().toLowerCase();
      const isCorrect =
        userAnswer === blank.correctAnswer.toLowerCase() ||
        blank.alternatives?.some((alt) => alt.toLowerCase() === userAnswer) ||
        false;
      newResults[blank.id] = isCorrect;
      if (!isCorrect) allCorrect = false;
    }

    setResults(newResults);
    setSubmitted(true);
    onAnswer(allCorrect);
  };

  const handleNext = () => {
    setAnswers(Object.fromEntries(question.blanks.map((b) => [b.id, ''])));
    setSubmitted(false);
    setResults({});
    onNext();
  };

  const renderCodeWithBlanks = () => {
    let code = question.codeTemplate;
    let blankIndex = 0;

    const parts = code.split(/(\{\{blank\d+\}\})/g);

    return parts.map((part, index) => {
      const match = part.match(/\{\{(blank\d+)\}\}/);
      if (match) {
        const blankId = match[1];
        const blank = question.blanks.find((b) => b.id === blankId);
        if (!blank) return part;

        blankIndex++;
        const inputClass = submitted
          ? results[blankId]
            ? styles.correctInput
            : styles.incorrectInput
          : '';

        return (
          <span key={index} className={styles.blankWrapper}>
            <input
              type="text"
              value={answers[blankId]}
              onChange={(e) => handleChange(blankId, e.target.value)}
              className={`${styles.blankInput} ${inputClass}`}
              placeholder={`blank ${blankIndex}`}
              disabled={submitted}
            />
            {submitted && !results[blankId] && (
              <span className={styles.correctAnswer}>
                {blank.correctAnswer}
              </span>
            )}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const allCorrect = Object.values(results).every((r) => r);

  return (
    <div className={styles.container}>
      <h3 className={styles.question}>{question.question}</h3>

      <pre className={styles.codeBlock}>
        <code>{renderCodeWithBlanks()}</code>
      </pre>

      {submitted && (
        <Card className={`${styles.feedback} ${allCorrect ? styles.successCard : styles.errorCard}`}>
          <CardContent>
            <p className={styles.feedbackTitle}>
              {allCorrect ? '正解!' : 'もう少しです'}
            </p>
            <p className={styles.explanation}>{question.explanation}</p>
          </CardContent>
        </Card>
      )}

      <div className={styles.actions}>
        {!submitted ? (
          <Button
            onClick={handleSubmit}
            disabled={Object.values(answers).some((a) => !a.trim())}
          >
            回答する
          </Button>
        ) : (
          <Button onClick={handleNext}>次の問題</Button>
        )}
      </div>
    </div>
  );
}
