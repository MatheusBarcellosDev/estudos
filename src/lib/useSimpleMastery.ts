"use client";

import { useState, useCallback, useEffect } from "react";
import { Flashcard } from "@/data/flashcards";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadMastered(key: string): Set<number> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(key);
    return raw ? new Set(JSON.parse(raw) as number[]) : new Set();
  } catch {
    return new Set();
  }
}

function saveMastered(ids: Set<number>, key: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify([...ids]));
  } catch {}
}

export interface UseSimpleMasteryReturn {
  deck: Flashcard[];
  masteredIds: Set<number>;
  masteredCount: number;
  markMastered: (id: number) => void;
  restoreAll: () => void;
  reshuffleDeck: () => void;
}

export function useSimpleMastery(
  allSubjectCards: Flashcard[],
  storageKey = "mastered_cards_v2"
): UseSimpleMasteryReturn {
  const [masteredIds, setMasteredIds] = useState<Set<number>>(new Set());
  const [deck, setDeck] = useState<Flashcard[]>([]);

  useEffect(() => {
    const loaded = loadMastered(storageKey);
    setMasteredIds(loaded);
    const subjectIds = new Set(allSubjectCards.map((c) => c.id));
    const remaining = allSubjectCards.filter((c) => !loaded.has(c.id));
    setDeck(shuffle(remaining.filter((c) => subjectIds.has(c.id))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  const masteredCount = allSubjectCards.filter((c) => masteredIds.has(c.id)).length;

  const markMastered = useCallback(
    (id: number) => {
      setMasteredIds((prev) => {
        const next = new Set(prev);
        next.add(id);
        saveMastered(next, storageKey);
        setDeck((d) => d.filter((c) => c.id !== id));
        return next;
      });
    },
    [storageKey]
  );

  const restoreAll = useCallback(() => {
    setMasteredIds((prev) => {
      const subjectIds = new Set(allSubjectCards.map((c) => c.id));
      const next = new Set([...prev].filter((id) => !subjectIds.has(id)));
      saveMastered(next, storageKey);
      setDeck(shuffle(allSubjectCards));
      return next;
    });
  }, [allSubjectCards, storageKey]);

  const reshuffleDeck = useCallback(() => {
    setMasteredIds((prev) => {
      const remaining = allSubjectCards.filter((c) => !prev.has(c.id));
      setDeck(shuffle(remaining));
      return prev;
    });
  }, [allSubjectCards]);

  return { deck, masteredIds, masteredCount, markMastered, restoreAll, reshuffleDeck };
}
