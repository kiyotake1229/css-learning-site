// Exercise types
export type Category = 'flexbox' | 'grid' | 'responsive' | 'animation' | 'basics';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface ValidationRule {
  property: string;
  selector?: string;
  expectedValue?: string;
  check?: 'exists' | 'equals' | 'contains';
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  htmlTemplate: string;
  initialCss: string;
  solutionCss: string;
  validationRules: ValidationRule[];
  hints: string[];
}

// Quiz types
export interface MultipleChoiceQuestion {
  id: string;
  type: 'multiple_choice';
  category: Category;
  question: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FillInBlankQuestion {
  id: string;
  type: 'fill_in_blank';
  category: Category;
  question: string;
  codeTemplate: string;
  blanks: {
    id: string;
    correctAnswer: string;
    alternatives?: string[];
  }[];
  explanation: string;
}

export type QuizQuestion = MultipleChoiceQuestion | FillInBlankQuestion;

// Tutorial types
export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  codeExample?: {
    html?: string;
    css: string;
  };
  task?: {
    instruction: string;
    initialCss: string;
    validationRules: ValidationRule[];
  };
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  steps: TutorialStep[];
}

// Progress types
export interface UserProgress {
  completedExercises: string[];
  completedQuizzes: string[];
  completedTutorials: string[];
  exerciseScores: Record<string, number>;
  quizScores: Record<string, number>;
}
