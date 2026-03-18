export interface Question {
  context?: string;
  text: string;
  answer: "CERTO" | "ERRADO";
  explanation: string;
}

export interface QuizResult {
  question: Question;
  userAnswer: "CERTO" | "ERRADO" | "NÃO SEI" | null;
  isCorrect: boolean;
}
