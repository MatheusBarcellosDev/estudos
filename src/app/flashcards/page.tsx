"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlashcardCard from "@/components/FlashcardCard";
import Quiz from "@/components/Quiz";
import Results from "@/components/Results";
import { flashcards } from "@/data/flashcards";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Layers,
  BrainCircuit,
  RotateCcw,
  Trophy,
  Clock,
  Sparkles,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { Question, QuizResult } from "@/types";
import { useFlashcardProgress } from "@/lib/useFlashcardProgress";
import { DifficultyRating, getNextReviewLabel } from "@/lib/srs";

type PageState = "REVIEW" | "QUIZ" | "RESULTS";

/** Convert a card's back body to clean plain text for the API */
function cardBackToText(body: string): string {
  return body.replace(/\*\*/g, "").replace(/\*/g, "").trim();
}



export default function FlashcardsPage() {
  const { sessionDeck, getProgress, rateCard, stats, resetProgress, refreshSession } =
    useFlashcardProgress(flashcards);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false); // card was flipped

  // Quiz state
  const [pageState, setPageState] = useState<PageState>("REVIEW");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

  // Derived
  const card = sessionDeck[currentIdx] ?? sessionDeck[0];

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleFlip = () => setIsFlipped(true);

  const handleNext = () => {
    setPageState("REVIEW");
    setQuestions([]);
    setResults([]);
    setIsFlipped(false);

    if (currentIdx < sessionDeck.length - 1) {
      setDirection(1);
      setCurrentIdx((i) => i + 1);
    } else {
      // session complete — restart from top (deck will be re-ordered by SRS)
      setCurrentIdx(0);
      refreshSession();
    }
  };

  const handleReshuffle = () => {
    setCurrentIdx(0);
    setDirection(1);
    setPageState("REVIEW");
    setQuestions([]);
    setResults([]);
    setIsFlipped(false);
    refreshSession();
  };

  // ── Question Generation ────────────────────────────────────────────────────

  const handleGenerateQuestions = async () => {
    if (!card) return;
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

    // Auto-rate based on quiz score
    if (card && finalResults.length > 0) {
      const correctAnswers = finalResults.filter((r) => r.isCorrect).length;
      const percentage = correctAnswers / finalResults.length;

      let autoRating: DifficultyRating = "errei";
      if (percentage === 1) autoRating = "facil";           // 100% (5/5)
      else if (percentage >= 0.8) autoRating = "medio";      // 80% (4/5)
      else if (percentage >= 0.4) autoRating = "dificil";    // 40-60% (2-3/5)
      else autoRating = "errei";                            // 0-20% (0-1/5)

      rateCard(card.id, autoRating);
    }
  };

  const isLastCard = currentIdx >= sessionDeck.length - 1;

  // ── UI ────────────────────────────────────────────────────────────────────

  return (
    <main className="min-h-screen bg-[#FDFDFD] dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-50 font-sans">
      <div className="container mx-auto px-4 py-6 max-w-3xl flex flex-col min-h-screen">

        {/* Top Nav */}
        <div className="flex items-center justify-between mb-5">
          <Link href="/">
            <Button variant="ghost" className="gap-2 rounded-2xl px-3">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg">Flashcards SRS</span>
          </div>
          <Button
            variant="ghost"
            onClick={resetProgress}
            className="gap-2 rounded-2xl px-3 text-muted-foreground"
            title="Resetar progresso"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>

        {/* ── SRS Stats Bar ── */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          <StatChip
            icon={<Clock className="w-3.5 h-3.5" />}
            value={stats.due}
            label="Vencer hoje"
            color="text-red-500"
            bg="bg-red-50 dark:bg-red-950/30"
          />
          <StatChip
            icon={<Sparkles className="w-3.5 h-3.5" />}
            value={stats.newToday}
            label="Novos"
            color="text-blue-500"
            bg="bg-blue-50 dark:bg-blue-950/30"
          />
          <StatChip
            icon={<BookOpen className="w-3.5 h-3.5" />}
            value={stats.learning}
            label="Aprendendo"
            color="text-amber-500"
            bg="bg-amber-50 dark:bg-amber-950/30"
          />
          <StatChip
            icon={<Trophy className="w-3.5 h-3.5" />}
            value={stats.mastered}
            label="Dominados"
            color="text-emerald-500"
            bg="bg-emerald-50 dark:bg-emerald-950/30"
          />
        </div>

        {/* ── Progress bar (REVIEW mode) ── */}
        {pageState === "REVIEW" && (
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-medium text-muted-foreground">
              {currentIdx + 1} / {sessionDeck.length}
            </span>
            <div className="flex-1 mx-3 h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                animate={{ width: `${((currentIdx + 1) / sessionDeck.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              />
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              {sessionDeck.length - currentIdx - 1} restantes
            </span>
          </div>
        )}

        {/* ── REVIEW STATE ── */}
        {pageState === "REVIEW" && card && (
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
                  <FlashcardCard card={card} onFlip={handleFlip} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 w-full space-y-3">
              {/* Generate Questions CTA */}
              <Button
                onClick={handleGenerateQuestions}
                size="lg"
                variant="outline"
                className="w-full h-12 text-sm font-bold rounded-[1.75rem] border-2 hover:bg-primary/5 hover:border-primary/50 gap-2 transition-all"
              >
                <BrainCircuit className="w-4 h-4 text-primary" />
                Gerar Questões sobre este Card
              </Button>

              {/* Next button — appear after flip */}
              <AnimatePresence>
                {isFlipped && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <Button
                      onClick={handleNext}
                      size="lg"
                      className="w-full h-14 text-base font-bold rounded-[1.75rem] shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all gap-2"
                    >
                      {isLastCard ? "Finalizar Sessão 🎉" : "Próximo Card →"}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hint if not yet flipped */}
              {!isFlipped && (
                <p className="text-center text-xs text-muted-foreground mt-1">
                  Toque no card para revelar o verso
                </p>
              )}
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

// ── Sub-component: StatChip ────────────────────────────────────────────────

function StatChip({
  icon,
  value,
  label,
  color,
  bg,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: string;
  bg: string;
}) {
  return (
    <div className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl ${bg} gap-0.5`}>
      <div className={`flex items-center gap-1 ${color}`}>
        {icon}
        <span className="text-base font-bold leading-none">{value}</span>
      </div>
      <span className="text-[10px] text-muted-foreground text-center leading-tight">{label}</span>
    </div>
  );
}
