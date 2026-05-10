export interface Material {
  name: string;
  type: 'pdf' | 'image';
  url: string;
}

export type AppState = 'DASHBOARD' | 'REVIEW' | 'QUIZ' | 'RESULTS';

// ── FGV Multiple-Choice Question (used in flashcard quiz) ──────────────────
export interface FGVQuestion {
  mode: 'fgv';
  dificuldade?: string;
  context?: string;
  enunciado: string;
  alternativas: { A: string; B: string; C: string; D: string; E: string };
  resposta_correta: 'A' | 'B' | 'C' | 'D' | 'E';
  /** Full explanation of why the correct answer is right */
  comentario: string;
}

// ── Legacy CEBRASPE True/False Question (used in PDF/map quiz) ───────────────
export interface CebraspecQuestion {
  mode: 'cebraspe';
  afirmacao: string;
  resposta: 'CERTO' | 'ERRADO';
  explicacao: string;
  context?: string;
  dificuldade?: string;
  tecnica?: string;
}

// Union type — both Quiz components accept this
export type Question = FGVQuestion | CebraspecQuestion;

export interface QuizResult {
  question: Question;
  userAnswer: string | null;   // 'A'|'B'|'C'|'D'|'E' for FGV, 'CERTO'|'ERRADO'|'NÃO SEI' for CEBRASPE
  isCorrect: boolean;
}
