import { useState, useEffect, useCallback } from 'react';
import type { UserProgress } from '../types';

const STORAGE_KEY = 'css-learning-progress';

const defaultProgress: UserProgress = {
  completedExercises: [],
  completedQuizzes: [],
  completedTutorials: [],
  exerciseScores: {},
  quizScores: {},
};

function loadProgress(): UserProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultProgress, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return defaultProgress;
}

function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const completeExercise = useCallback((exerciseId: string, score?: number) => {
    setProgress((prev) => ({
      ...prev,
      completedExercises: prev.completedExercises.includes(exerciseId)
        ? prev.completedExercises
        : [...prev.completedExercises, exerciseId],
      exerciseScores: score !== undefined
        ? { ...prev.exerciseScores, [exerciseId]: score }
        : prev.exerciseScores,
    }));
  }, []);

  const completeQuiz = useCallback((quizId: string, score: number) => {
    setProgress((prev) => ({
      ...prev,
      completedQuizzes: prev.completedQuizzes.includes(quizId)
        ? prev.completedQuizzes
        : [...prev.completedQuizzes, quizId],
      quizScores: { ...prev.quizScores, [quizId]: score },
    }));
  }, []);

  const completeTutorial = useCallback((tutorialId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedTutorials: prev.completedTutorials.includes(tutorialId)
        ? prev.completedTutorials
        : [...prev.completedTutorials, tutorialId],
    }));
  }, []);

  const isExerciseCompleted = useCallback(
    (exerciseId: string) => progress.completedExercises.includes(exerciseId),
    [progress.completedExercises]
  );

  const isQuizCompleted = useCallback(
    (quizId: string) => progress.completedQuizzes.includes(quizId),
    [progress.completedQuizzes]
  );

  const isTutorialCompleted = useCallback(
    (tutorialId: string) => progress.completedTutorials.includes(tutorialId),
    [progress.completedTutorials]
  );

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  return {
    progress,
    completeExercise,
    completeQuiz,
    completeTutorial,
    isExerciseCompleted,
    isQuizCompleted,
    isTutorialCompleted,
    resetProgress,
  };
}
