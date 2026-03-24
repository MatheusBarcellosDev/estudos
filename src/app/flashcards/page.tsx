"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlashcardCard from "@/components/FlashcardCard";
import Quiz from "@/components/Quiz";
import Results from "@/components/Results";
import { flashcards, Flashcard } from "@/data/flashcards";
import { Button } from "@/components/ui/button";
import { Shuffle, ArrowLeft, ChevronRight, Layers, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { Question, QuizResult } from "@/types";

type PageState = "REVIEW" | "QUIZ" | "RESULTS";

function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Convert a card's back body to clean plain text for the API */
function cardBackToText(body: string): string {
  return body.replace(/\*\*/g, "").replace(/\*/g, "").trim();
}

export default function FlashcardsPage() {
  const [deck, setDeck] = useState<Flashcard[]>(() => shuffleArr(flashcards));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  // Quiz state
  const [pageState, setPageState] = useState<PageState>("REVIEW");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

  const card = deck[currentIdx];

  // ── Navigation ──────────────────────────────────────────────────────────────
  const handleNext = () => {
    setPageState("REVIEW");
    setQuestions([]);
    setResults([]);
    if (currentIdx < deck.length - 1) {
      setDirection(1);
      setCurrentIdx((i) => i + 1);
    } else {
      setDeck(shuffleArr(flashcards));
      setCurrentIdx(0);
    }
  };

  const handleReshuffle = () => {
    setDeck(shuffleArr(flashcards));
    setCurrentIdx(0);
    setDirection(1);
    setPageState("REVIEW");
    setQuestions([]);
    setResults([]);
  };

  // ── Question Generation ──────────────────────────────────────────────────────
  const handleGenerateQuestions = async () => {
    setPageState("QUIZ");
    setIsLoadingQuestions(true);

    const cardFront = `${card.front.title}${card.front.subtitle ? ` — ${card.front.subtitle}` : ""}`;
    const cardBack = cardBackToText(card.back.body);

    try {
      const res = await fetch("/api/generate-flashcard-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cardFront, cardBack }),
      });

      if (!res.ok) throw new Error("Falha ao gerar questões");
      const data = await res.json();
      setQuestions(data.questions);
    } catch (err: any) {
      console.error(err);
      setQuestions([
        {
          afirmacao: "Erro ao gerar questões. Por favor, tente novamente.",
          resposta: "ERRADO",
          explicacao: "Houve uma falha na comunicação com a IA.",
        },
      ]);
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  const handleQuizComplete = (finalResults: QuizResult[]) => {
    setResults(finalResults);
    setPageState("RESULTS");
  };

  // ── UI ────────────────────────────────────────────────────────────────────────
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
            <Layers className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg">Flashcards</span>
          </div>
          <Button variant="ghost" onClick={handleReshuffle} className="gap-2 rounded-2xl">
            <Shuffle className="w-4 h-4" />
            Sortear
          </Button>
        </div>

        {/* Progress bar (only in REVIEW mode) */}
        {pageState === "REVIEW" && (
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
        )}

        {/* ── REVIEW STATE ── */}
        {pageState === "REVIEW" && (
          <>
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

            <div className="mt-8 w-full space-y-3">
              {/* Generate Questions CTA */}
              <Button
                onClick={handleGenerateQuestions}
                size="lg"
                variant="outline"
                className="w-full h-14 text-base font-bold rounded-[1.75rem] border-2 hover:bg-primary/5 hover:border-primary/50 gap-2 transition-all"
              >
                <BrainCircuit className="w-5 h-5 text-primary" />
                Gerar Questões sobre este Card
              </Button>

              {/* Next card */}
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
              <p className="text-center text-xs text-muted-foreground mt-2">
                Toque no card para revelar o verso
              </p>
            </div>
          </>
        )}

        {/* ── QUIZ STATE ── */}
        {pageState === "QUIZ" && (
          <Quiz
            pdfUrl=""
            questions={questions}
            isLoading={isLoadingQuestions}
            onComplete={handleQuizComplete}
          />
        )}

        {/* ── RESULTS STATE ── */}
        {pageState === "RESULTS" && (
          <Results
            results={results}
            onRestart={handleReshuffle}
            onNext={handleNext}
            hasNext={true}
          />
        )}

      </div>
    </main>
  );
}
