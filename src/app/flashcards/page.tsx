"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlashcardCard from "@/components/FlashcardCard";
import { flashcards } from "@/data/flashcards";
import { Button } from "@/components/ui/button";
import { Shuffle, ArrowLeft, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardsPage() {
  const [deck, setDeck] = useState(() => shuffle(flashcards));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const card = deck[currentIdx];

  const handleNext = () => {
    if (currentIdx < deck.length - 1) {
      setDirection(1);
      setCurrentIdx((i) => i + 1);
    } else {
      // Re-shuffle and restart
      setDeck(shuffle(flashcards));
      setCurrentIdx(0);
    }
  };

  const handleReshuffle = () => {
    setDeck(shuffle(flashcards));
    setCurrentIdx(0);
    setDirection(1);
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-50 font-sans">
      <div className="container mx-auto px-4 py-8 max-w-3xl flex flex-col min-h-screen">

        {/* Top Nav */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 rounded-2xl">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg">Flashcards</span>
          </div>
          <Button variant="ghost" onClick={handleReshuffle} className="gap-2 rounded-2xl">
            <Shuffle className="w-4 h-4" />
            Sortear
          </Button>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-sm font-medium text-muted-foreground">
            {currentIdx + 1} de {deck.length}
          </span>
          <div className="flex-1 mx-4 h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ width: `${((currentIdx + 1) / deck.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            />
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            {deck.length - currentIdx - 1} restantes
          </span>
        </div>

        {/* Card Container */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={card.id + "-" + currentIdx}
              custom={direction}
              initial={{ opacity: 0, x: 60 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 * direction }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full"
            >
              <FlashcardCard card={card} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Action */}
        <div className="mt-10 w-full">
          <Button
            onClick={handleNext}
            size="lg"
            className="w-full h-16 text-lg font-bold rounded-[1.75rem] shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all gap-2"
          >
            {currentIdx < deck.length - 1 ? (
              <>Próximo Flashcard <ChevronRight className="w-5 h-5" /></>
            ) : (
              <>Baralhar e Recomeçar <Shuffle className="w-5 h-5" /></>
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Toque no card para revelar o verso
          </p>
        </div>
      </div>
    </main>
  );
}
