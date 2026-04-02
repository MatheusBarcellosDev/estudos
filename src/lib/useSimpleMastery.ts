"use client";

import { useState, useCallback, useEffect } from "react";
import { Flashcard } from "@/data/flashcards";

const STORAGE_KEY = "mastered_cards_v2";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadMastered(): Set<number> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw) as number[]) : new Set();
  } catch {
    return new Set();
  }
}

function saveMastered(ids: Set<number>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
  } catch {}
}

export interface UseSimpleMasteryReturn {
  /** Shuffled deck of non-mastered cards for this subject */
  deck: Flashcard[];
  /** IDs of mastered cards in this subject */
  masteredIds: Set<number>;
  /** Total mastered count for this subject */
  masteredCount: number;
  /** Mark a card as mastered */
  markMastered: (id: number) => void;
  /** Restore all mastered cards for this subject back to the deck */
  restoreAll: () => void;
  /** Re-shuffle the current deck (call on subject entry) */
  reshuffleDeck: () => void;
}

export function useSimpleMastery(
  allSubjectCards: Flashcard[]
): UseSimpleMasteryReturn {
  const [masteredIds, setMasteredIds] = useState<Set<number>>(new Set());
  const [deck, setDeck] = useState<Flashcard[]>([]);

  // Load persisted mastery on mount
  useEffect(() => {
    const loaded = loadMastered();
    setMasteredIds(loaded);

    const subjectIds = new Set(allSubjectCards.map((c) => c.id));
    const remaining = allSubjectCards.filter((c) => !loaded.has(c.id));
    setDeck(shuffle(remaining.filter((c) => subjectIds.has(c.id))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const masteredCount = allSubjectCards.filter((c) => masteredIds.has(c.id)).length;

  const markMastered = useCallback(
    (id: number) => {
      setMasteredIds((prev) => {
        const next = new Set(prev);
        next.add(id);
        saveMastered(next);
        // Remove from deck immediately
        setDeck((d) => d.filter((c) => c.id !== id));
        return next;
      });
    },
    []
  );

  const restoreAll = useCallback(() => {
    setMasteredIds((prev) => {
      const subjectIds = new Set(allSubjectCards.map((c) => c.id));
      const next = new Set([...prev].filter((id) => !subjectIds.has(id)));
      saveMastered(next);
      setDeck(shuffle(allSubjectCards));
      return next;
    });
  }, [allSubjectCards]);

  const reshuffleDeck = useCallback(() => {
    setMasteredIds((prev) => {
      const remaining = allSubjectCards.filter((c) => !prev.has(c.id));
      setDeck(shuffle(remaining));
      return prev;
    });
  }, [allSubjectCards]);

  return { deck, masteredIds, masteredCount, markMastered, restoreAll, reshuffleDeck };
}
