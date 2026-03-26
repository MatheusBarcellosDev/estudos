/**
 * SRS Engine — Repetição Espaçada para Concurso em 30 dias
 * Intervalos curtos e agressivos: máx. 4 dias para garantir cobertura total.
 */

import { Flashcard } from "@/data/flashcards";

// ── Types ──────────────────────────────────────────────────────────────────────

export type DifficultyRating = "errei" | "dificil" | "medio" | "facil";

export interface FlashcardProgress {
  flashcardId: number;
  lastReviewedAt?: string; // ISO string
  nextReviewAt?: string;   // ISO string
  streak: number;          // consecutive 'medio' or 'facil' ratings
  totalReviews: number;
  totalCorrect: number;
  totalWrong: number;
  difficultyLevel: DifficultyRating;
  isNew: boolean;
}

// ── Interval Table (hours) ─────────────────────────────────────────────────────

const INTERVAL_HOURS: Record<DifficultyRating, number> = {
  errei: 4,    // revisão ainda hoje
  dificil: 24, // 1 dia
  medio: 48,   // 2 dias
  facil: 96,   // 4 dias (máx — garante ~7 revisões em 30 dias)
};

// ── Core Functions ─────────────────────────────────────────────────────────────

export function getIntervalHours(rating: DifficultyRating): number {
  return INTERVAL_HOURS[rating];
}

/** Returns the display label used in the UI buttons */
export function getRatingLabel(rating: DifficultyRating): string {
  const labels: Record<DifficultyRating, string> = {
    errei: "Errei",
    dificil: "Difícil",
    medio: "Médio",
    facil: "Fácil",
  };
  return labels[rating];
}

/** Returns a human-readable next-review description */
export function getNextReviewLabel(rating: DifficultyRating): string {
  const labels: Record<DifficultyRating, string> = {
    errei: "+4 horas",
    dificil: "+1 dia",
    medio: "+2 dias",
    facil: "+4 dias",
  };
  return labels[rating];
}

/**
 * Compute updated FlashcardProgress after a rating is given.
 */
export function computeNextReview(
  prev: FlashcardProgress,
  rating: DifficultyRating
): FlashcardProgress {
  const now = new Date();
  const hours = getIntervalHours(rating);
  const next = new Date(now.getTime() + hours * 60 * 60 * 1000);

  const isCorrect = rating === "medio" || rating === "facil";
  const newStreak = isCorrect ? prev.streak + 1 : 0;

  return {
    ...prev,
    lastReviewedAt: now.toISOString(),
    nextReviewAt: next.toISOString(),
    streak: newStreak,
    totalReviews: prev.totalReviews + 1,
    totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
    totalWrong: prev.totalWrong + (isCorrect ? 0 : 1),
    difficultyLevel: rating,
    isNew: false,
  };
}

/**
 * Creates a fresh progress record for a card that has never been reviewed.
 */
export function createInitialProgress(flashcardId: number): FlashcardProgress {
  return {
    flashcardId,
    streak: 0,
    totalReviews: 0,
    totalCorrect: 0,
    totalWrong: 0,
    difficultyLevel: "medio",
    isNew: true,
  };
}

// ── Session Selection ──────────────────────────────────────────────────────────

export interface SRSStats {
  due: number;       // cards vencidos (nextReviewAt <= now)
  newToday: number;  // cards novos ainda não vistos
  learning: number;  // cards em aprendizado (revisados, não dominados)
  mastered: number;  // cards avaliados como fácil ou com streak >= 2
  total: number;
}

/**
 * Selects and orders cards for the current session:
 * 1. Due cards (overdue) — highest priority
 * 2. New cards (up to maxNew)
 * 3. "Upcoming" cards (not yet due, fills the rest)
 */
export function selectSessionCards(
  allProgress: FlashcardProgress[],
  flashcards: Flashcard[],
  maxNew = 15
): Flashcard[] {
  const now = new Date();
  const progressMap = new Map(allProgress.map((p) => [p.flashcardId, p]));

  const dueCards: Flashcard[] = [];
  const newCards: Flashcard[] = [];
  const upcomingCards: Flashcard[] = [];

  for (const card of flashcards) {
    const progress = progressMap.get(card.id);

    if (!progress || progress.isNew) {
      newCards.push(card);
    } else if (
      progress.nextReviewAt &&
      new Date(progress.nextReviewAt) <= now
    ) {
      dueCards.push(card);
    } else {
      upcomingCards.push(card);
    }
  }

  // Sort upcoming by nextReviewAt (soonest first)
  upcomingCards.sort((a, b) => {
    const pa = progressMap.get(a.id)?.nextReviewAt ?? "";
    const pb = progressMap.get(b.id)?.nextReviewAt ?? "";
    return pa.localeCompare(pb);
  });

  // Sort due cards by most overdue first
  dueCards.sort((a, b) => {
    const pa = progressMap.get(a.id)?.nextReviewAt ?? "";
    const pb = progressMap.get(b.id)?.nextReviewAt ?? "";
    return pa.localeCompare(pb);
  });

  return [
    ...dueCards,
    ...newCards.slice(0, maxNew),
    ...upcomingCards,
  ];
}

/**
 * Compute stats from the current progress state.
 */
export function computeStats(
  allProgress: FlashcardProgress[],
  totalCards: number
): SRSStats {
  const now = new Date();
  let due = 0, learning = 0, mastered = 0;

  for (const p of allProgress) {
    if (p.isNew) continue;

    if (p.nextReviewAt && new Date(p.nextReviewAt) <= now) {
      due++;
    }

    if (p.difficultyLevel === "facil" || p.streak >= 2) {
      mastered++;
    } else {
      learning++;
    }
  }

  const reviewed = allProgress.filter((p) => !p.isNew).length;
  const newToday = totalCards - reviewed;

  return { due, newToday, learning, mastered, total: totalCards };
}
