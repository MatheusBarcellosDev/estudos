export interface Material {
  name: string;
  type: 'pdf' | 'image';
  url: string;
}

export type AppState = 'DASHBOARD' | 'REVIEW' | 'QUIZ' | 'RESULTS';

export interface Question {
  afirmacao: string;
  resposta: 'CERTO' | 'ERRADO';
  explicacao: string;
  context?: string; // CEBRASPE style preamble/context
}

export interface QuizResult {
  question: Question;
  userAnswer: "CERTO" | "ERRADO" | "NÃO SEI" | null;
  isCorrect: boolean;
}
