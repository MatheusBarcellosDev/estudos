"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlashcardCard from "@/components/FlashcardCard";
import Quiz from "@/components/Quiz";
import Results from "@/components/Results";
import { flashcards, SUBJECT_LIST, getSubjectForCard } from "@/data/flashcards";
import { flashcardsTJSC, SUBJECT_LIST_TJSC, getSubjectForCardTJSC } from "@/data/flashcards-tjsc";
import { useConcurso } from "@/context/ConcursoContext";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, Layers, BrainCircuit, Trophy, BookOpen, RotateCw, Moon, Sun,
} from "lucide-react";
import Link from "next/link";
import { Question, QuizResult } from "@/types";
import { useSimpleMastery } from "@/lib/useSimpleMastery";
import { useTheme } from "@/components/ThemeProvider";

type PageState = "SELECT_SUBJECT" | "REVIEW" | "QUIZ" | "RESULTS";

function cardBackToText(body: string): string {
  return body.replace(/\*\*/g, "").replace(/\*/g, "").trim();
}

export default function FlashcardsPage() {
  const { concurso } = useConcurso();

  // Dados baseados no concurso ativo
  const allFlashcards = concurso === "TJSC" ? flashcardsTJSC : flashcards;
  const subjectList   = concurso === "TJSC" ? SUBJECT_LIST_TJSC : SUBJECT_LIST;
  const getSubject    = concurso === "TJSC" ? getSubjectForCardTJSC : getSubjectForCard;
  const storageKey    = concurso === "TJSC" ? "mastered_cards_tjsc_v1" : "mastered_cards_v2";
  const concursoLabel = concurso === "TJSC" ? "TJ-SC — Auxiliar" : "ANSA / Petrobras";

  const [pageState, setPageState] = useState<PageState>("SELECT_SUBJECT");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const filteredFlashcards = useMemo(() => {
    if (!selectedSubject) return allFlashcards;
    return allFlashcards.filter((c) => getSubject(c) === selectedSubject);
  }, [selectedSubject, allFlashcards, getSubject]);

  const { deck, masteredCount, markMastered, restoreAll, reshuffleDeck } =
    useSimpleMastery(filteredFlashcards, storageKey);

  const { theme, toggle: toggleTheme } = useTheme();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

  const prevSubject = useRef<string | null>(null);
  useEffect(() => {
    if (selectedSubject && selectedSubject !== prevSubject.current) {
      reshuffleDeck();
      setCurrentIdx(0);
      prevSubject.current = selectedSubject;
    }
  }, [selectedSubject, reshuffleDeck]);

  // Reset ao trocar concurso
  useEffect(() => {
    setPageState("SELECT_SUBJECT");
    setSelectedSubject(null);
    prevSubject.current = null;
  }, [concurso]);

  const subjectStats = useMemo(() => {
    let masteredSet: Set<number> = new Set();
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) masteredSet = new Set(JSON.parse(raw) as number[]);
    } catch {}

    return subjectList.map((subject) => {
      const subjectCards = allFlashcards.filter((c) => getSubject(c) === subject);
      if (subjectCards.length === 0) return null;
      const mastered = subjectCards.filter((c) => masteredSet.has(c.id)).length;
      const remaining = subjectCards.length - mastered;
      return { subject, total: subjectCards.length, mastered, remaining };
    }).filter(Boolean);
  }, [pageState, allFlashcards, subjectList, getSubject, storageKey]);

  const card = deck[currentIdx] ?? deck[0];
  const isLastCard = currentIdx >= deck.length - 1;

  const handleFlip = () => setIsFlipped(true);

  const handleNext = () => {
    setPageState("REVIEW");
    setQuestions([]);
    setResults([]);
    setIsFlipped(false);
    if (currentIdx < deck.length - 1) {
      setDirection(1);
      setCurrentIdx((i) => i + 1);
    } else {
      setCurrentIdx(0);
    }
  };

  const handleReshuffle = () => {
    setCurrentIdx(0);
    setDirection(1);
    setPageState("REVIEW");
    setQuestions([]);
    setResults([]);
    setIsFlipped(false);
    reshuffleDeck();
  };

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
      setQuestions([{ mode: 'cebraspe' as const, afirmacao: "Erro ao gerar questões.", resposta: "ERRADO" as const, explicacao: "Falha na comunicação com a IA." }]);
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  const handleQuizComplete = (finalResults: QuizResult[]) => {
    setResults(finalResults);
    setPageState("RESULTS");
    if (card && finalResults.length > 0) {
      const correct = finalResults.filter((r) => r.isCorrect).length;
      if (correct === finalResults.length) markMastered(card.id);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-50 font-sans">
      <div className="container mx-auto px-4 py-6 max-w-3xl flex flex-col min-h-screen">

        {/* Top Nav */}
        <div className="flex items-center justify-between mb-5">
          <Link href={pageState === "SELECT_SUBJECT" ? "/" : "#"} onClick={(e) => {
            if (pageState !== "SELECT_SUBJECT") {
              e.preventDefault();
              setPageState("SELECT_SUBJECT");
              setSelectedSubject(null);
              prevSubject.current = null;
            }
          }}>
            <Button variant="ghost" className="gap-2 rounded-2xl px-3">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg leading-tight">
                {pageState === "SELECT_SUBJECT" ? "Flashcards" : selectedSubject}
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-medium">{concursoLabel}</span>
          </div>
          <div className="flex items-center gap-1">
            {pageState !== "SELECT_SUBJECT" && masteredCount > 0 && (
              <Button variant="ghost" onClick={restoreAll} className="gap-1.5 rounded-2xl px-3 text-muted-foreground text-xs" title="Restaurar cards dominados">
                <RotateCw className="w-4 h-4" />({masteredCount})
              </Button>
            )}
            <Button variant="ghost" onClick={toggleTheme} className="rounded-2xl px-3 text-muted-foreground" title="Alternar tema">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* SELECT_SUBJECT */}
        {pageState === "SELECT_SUBJECT" && (
          <div className="flex-1 flex flex-col space-y-4">
            {allFlashcards.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center py-20">
                <Layers className="w-16 h-16 text-muted-foreground/40" />
                <h2 className="text-2xl font-bold">Sem flashcards ainda</h2>
                <p className="text-muted-foreground max-w-xs">
                  Os flashcards do <span className="font-semibold text-primary">{concursoLabel}</span> ainda não foram adicionados.
                  Adicione cards em <code className="bg-muted px-1 rounded text-xs">src/data/flashcards-tjsc.ts</code>.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-2">
                  <h2 className="text-xl font-bold">Escolha a Matéria</h2>
                  <p className="text-sm text-muted-foreground mt-1">Cards embaralhados a cada entrada. Gabarite um card para dominá-lo.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-12">
                  {subjectStats.map((item: any) => {
                    const percent = Math.round((item.mastered / item.total) * 100);
                    const isUrgent = item.subject === "🚨 Urgente";
                    return (
                      <button
                        key={item.subject}
                        onClick={() => { setSelectedSubject(item.subject); setCurrentIdx(0); setPageState("REVIEW"); }}
                        className={isUrgent
                          ? "col-span-1 sm:col-span-2 flex flex-col text-left rounded-3xl p-5 shadow-md transition-all group border-2 border-red-400/60 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent dark:from-red-900/30 dark:via-orange-900/10 hover:shadow-red-500/20 hover:shadow-lg hover:border-red-500/80"
                          : "flex flex-col text-left bg-white dark:bg-neutral-900 border rounded-3xl p-5 shadow-sm hover:shadow-md hover:border-primary/50 transition-all group"
                        }
                      >
                        <div className="flex justify-between items-start mb-4 w-full">
                          <h3 className={`font-bold text-lg pr-2 transition-colors ${isUrgent ? "text-red-600 dark:text-red-400" : "text-neutral-800 dark:text-neutral-100 group-hover:text-primary"}`}>
                            {item.subject}
                            {isUrgent && <span className="ml-2 text-xs font-semibold bg-red-500 text-white px-2 py-0.5 rounded-full animate-pulse">PRIORIDADE</span>}
                          </h3>
                          <div className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${isUrgent ? "bg-red-500/15 text-red-600 dark:text-red-400" : "bg-primary/10 text-primary"}`}>
                            {item.total} cards
                          </div>
                        </div>
                        <div className="w-full mt-auto">
                          <div className="flex justify-between text-xs font-medium text-muted-foreground mb-1.5">
                            <span>Dominados</span><span>{percent}%</span>
                          </div>
                          <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${isUrgent ? "bg-red-500" : "bg-emerald-500"}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${percent}%` }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <div className={`flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-md ${isUrgent ? "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10" : "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"}`}>
                            <BookOpen className="w-3.5 h-3.5" />{item.remaining} restantes
                          </div>
                          {item.mastered > 0 && (
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-md">
                              <Trophy className="w-3.5 h-3.5" />{item.mastered} dominados
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}

        {/* Counter bar */}
        {pageState === "REVIEW" && deck.length > 0 && (
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-medium text-muted-foreground">{currentIdx + 1} / {deck.length}</span>
            <div className="flex-1 mx-3 h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                animate={{ width: `${((currentIdx + 1) / deck.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              />
            </div>
            <span className="text-xs text-muted-foreground font-medium">{deck.length - currentIdx - 1} restantes</span>
          </div>
        )}

        {/* REVIEW — empty */}
        {pageState === "REVIEW" && deck.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
            <Trophy className="w-16 h-16 text-emerald-500" />
            <h2 className="text-2xl font-bold">Todos os cards dominados! 🎉</h2>
            <p className="text-muted-foreground">Você dominou todos os cards desta matéria.</p>
            <Button onClick={restoreAll} className="gap-2 rounded-2xl">
              <RotateCw className="w-4 h-4" />Restaurar todos os cards
            </Button>
          </div>
        )}

        {/* REVIEW — card */}
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
              <Button onClick={handleGenerateQuestions} size="lg" variant="outline"
                className="w-full h-12 text-sm font-bold rounded-[1.75rem] border-2 hover:bg-primary/5 hover:border-primary/50 gap-2 transition-all">
                <BrainCircuit className="w-4 h-4 text-primary" />Gerar Questões sobre este Card
              </Button>
              <AnimatePresence>
                {isFlipped && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                    <Button onClick={handleNext} size="lg"
                      className="w-full h-14 text-base font-bold rounded-[1.75rem] shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all gap-2">
                      {isLastCard ? "Voltar ao início 🔁" : "Próximo Card →"}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
              {!isFlipped && <p className="text-center text-xs text-muted-foreground mt-1">Toque no card para revelar o verso</p>}
            </div>
          </>
        )}

        {/* QUIZ */}
        {pageState === "QUIZ" && (
          <Quiz pdfUrl="" questions={questions} isLoading={isLoadingQuestions} onComplete={handleQuizComplete} />
        )}

        {/* RESULTS */}
        {pageState === "RESULTS" && (
          <Results results={results} onRestart={handleReshuffle} onNext={handleNext} hasNext={true} />
        )}
      </div>
    </main>
  );
}
