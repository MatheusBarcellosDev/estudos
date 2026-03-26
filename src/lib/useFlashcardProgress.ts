"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { Flashcard } from "@/data/flashcards";
import {
  FlashcardProgress,
  DifficultyRating,
  createInitialProgress,
  computeNextReview,
  selectSessionCards,
  computeStats,
  SRSStats,
} from "@/lib/srs";

const STORAGE_KEY = "srs_progress_v1";

function loadProgress(): FlashcardProgress[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as FlashcardProgress[]) : [];
  } catch {
    return [];
  }
}

function saveProgress(progress: FlashcardProgress[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // storage quota exceeded — ignore
  }
}

// ── Hook ───────────────────────────────────────────────────────────────────────

export interface UseFlashcardProgressReturn {
  /** Ordered deck for the current session */
  sessionDeck: Flashcard[];
  /** All raw progress records */
  allProgress: FlashcardProgress[];
  /** Get progress for a specific card */
  getProgress: (id: number) => FlashcardProgress;
  /** Rate a card and persist to localStorage */
  rateCard: (id: number, rating: DifficultyRating) => void;
  /** Session-level stats */
  stats: SRSStats;
  /** Reset all progress (for testing/reset) */
  resetProgress: () => void;
  /** Refreshes the session deck to pull new cards */
  refreshSession: () => void;
}

export function useFlashcardProgress(
  flashcards: Flashcard[]
): UseFlashcardProgressReturn {
  const [allProgress, setAllProgress] = useState<FlashcardProgress[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [sessionDeck, setSessionDeck] = useState<Flashcard[]>(flashcards);

  // Load from localStorage on mount (client only)
  useEffect(() => {
    const loaded = loadProgress();
    setAllProgress(loaded);
    setHydrated(true);
    setSessionDeck(selectSessionCards(loaded, flashcards));
  }, [flashcards]);

  const progressMap = useMemo(
    () => new Map(allProgress.map((p) => [p.flashcardId, p])),
    [allProgress]
  );

  const getProgress = useCallback(
    (id: number): FlashcardProgress =>
      progressMap.get(id) ?? createInitialProgress(id),
    [progressMap]
  );

  const rateCard = useCallback(
    (id: number, rating: DifficultyRating) => {
      setAllProgress((prev) => {
        const existing = prev.find((p) => p.flashcardId === id);
        const current = existing ?? createInitialProgress(id);
        const updated = computeNextReview(current, rating);

        const next = existing
          ? prev.map((p) => (p.flashcardId === id ? updated : p))
          : [...prev, updated];

        saveProgress(next);
        return next;
      });
    },
    []
  );

  const resetProgress = useCallback(() => {
    setAllProgress([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
    setSessionDeck(selectSessionCards([], flashcards));
  }, [flashcards]);

  const refreshSession = useCallback(() => {
    setSessionDeck(selectSessionCards(allProgress, flashcards));
  }, [allProgress, flashcards]);

  const stats = useMemo(
    () => computeStats(allProgress, flashcards.length),
    [allProgress, flashcards.length]
  );

  return { sessionDeck, allProgress, getProgress, rateCard, stats, resetProgress, refreshSession };
}
