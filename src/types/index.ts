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
  context?: string;      // CEBRASPE style preamble/context
  dificuldade?: string;  // FÁCIL | MÉDIO | DIFÍCIL (flashcard quiz only)
  tecnica?: string;      // Technique used (flashcard quiz, ERRADO items only)
}

export interface QuizResult {
  question: Question;
  userAnswer: "CERTO" | "ERRADO" | "NÃO SEI" | null;
  isCorrect: boolean;
}
