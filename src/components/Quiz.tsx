"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrainCircuit, CheckCircle2, XCircle, ArrowRight, Loader2, RefreshCw } from "lucide-react";
import { Question, FGVQuestion, CebraspecQuestion, QuizResult } from "@/types";

interface QuizProps {
  pdfUrl: string;
  questions: Question[];
  isLoading: boolean;
  onComplete: (results: QuizResult[]) => void;
}

const LETTER_COLORS: Record<string, string> = {
  A: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30",
  B: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30",
  C: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30",
  D: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
  E: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/30",
};

export default function Quiz({ pdfUrl, questions, isLoading, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);

  if (isLoading || questions.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="w-full flex justify-center items-center flex-grow py-4"
      >
        <div className="flex flex-col items-center justify-center p-12 bg-card rounded-3xl shadow-xl border text-center max-w-lg w-full">
          <Loader2 className="w-16 h-16 text-primary animate-spin mb-6" />
          <h2 className="text-2xl font-bold mb-3">Gerando Questões...</h2>
          <p className="text-muted-foreground leading-relaxed">
            A IA está criando 3 questões inéditas no estilo FGV sobre este card.
          </p>
        </div>
      </motion.div>
    );
  }

  const q = questions[currentIndex];
  const isFGV = !q || q.mode === 'fgv';

  const handleAnswer = (answer: string) => {
    if (showFeedback) return;
    setUserAnswer(answer);
    setShowFeedback(true);

    const correct = isFGV
      ? answer === (q as FGVQuestion).resposta_correta
      : answer !== "NÃO SEI" && answer === (q as CebraspecQuestion).resposta;

    setResults(prev => [...prev, { question: q, userAnswer: answer, isCorrect: correct }]);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setUserAnswer(null);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete(results);
    }
  };

  const isLastQuestion = currentIndex + 1 === questions.length;

  // ── FGV Render ─────────────────────────────────────────────────────────────
  if (isFGV) {
    const fgv = q as FGVQuestion;
    const letters = ['A', 'B', 'C', 'D', 'E'] as const;

    return (
      <div className="w-full flex justify-center items-center flex-grow py-4">
        <div className="w-full max-w-2xl bg-card border shadow-xl rounded-3xl overflow-hidden relative flex flex-col">

          {/* Header */}
          <div className="p-5 border-b flex justify-between items-center bg-muted/30">
            <div className="flex items-center gap-2 text-muted-foreground font-medium">
              <BrainCircuit className="w-5 h-5" />
              <span>Simulado FGV</span>
            </div>
            <div className="flex items-center gap-2">
              {fgv.dificuldade && (
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                  {fgv.dificuldade}
                </span>
              )}
              <div className="text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
                Questão {currentIndex + 1} de {questions.length}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                {/* Context */}
                {fgv.context && (
                  <div className="bg-muted/50 p-4 rounded-xl border text-sm text-muted-foreground leading-relaxed italic relative pt-7">
                    <span className="absolute top-2 left-4 text-[10px] font-bold uppercase tracking-widest text-primary/70">Texto de Apoio</span>
                    {fgv.context}
                  </div>
                )}

                {/* Enunciado */}
                <p className="text-base sm:text-lg font-semibold leading-relaxed text-foreground">
                  {fgv.enunciado}
                </p>

                {/* Alternativas */}
                <div className="space-y-2.5">
                  {letters.map((letter) => {
                    const text = fgv.alternativas[letter];
                    const isCorrect = letter === fgv.resposta_correta;
                    const isSelected = userAnswer === letter;

                    let btnClass = "w-full text-left px-4 py-3.5 rounded-2xl border-2 text-sm transition-all duration-200 flex items-start gap-3 ";

                    if (!showFeedback) {
                      btnClass += "hover:border-primary/50 hover:bg-primary/5 border-border bg-card cursor-pointer";
                    } else if (isCorrect) {
                      btnClass += "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400";
                    } else if (isSelected && !isCorrect) {
                      btnClass += "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400";
                    } else {
                      btnClass += "border-border/40 text-muted-foreground opacity-60";
                    }

                    return (
                      <button
                        key={letter}
                        onClick={() => handleAnswer(letter)}
                        disabled={showFeedback}
                        className={btnClass}
                      >
                        <span className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-black ${LETTER_COLORS[letter]}`}>
                          {letter}
                        </span>
                        <span className="flex-1 leading-relaxed">{text}</span>
                        {showFeedback && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />}
                        {showFeedback && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Feedback */}
            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className={`p-5 rounded-2xl border-2 space-y-3 ${
                    userAnswer === fgv.resposta_correta
                      ? "bg-green-50/50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                      : "bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-800"
                  }`}>
                    <div className="flex items-center gap-2">
                      {userAnswer === fgv.resposta_correta
                        ? <CheckCircle2 className="w-5 h-5 text-green-600" />
                        : <XCircle className="w-5 h-5 text-red-600" />
                      }
                      <p className="font-bold">
                        {userAnswer === fgv.resposta_correta ? "Correto! 🎉" : `Gabarito: Alternativa ${fgv.resposta_correta}`}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {fgv.comentario}
                    </p>
                    <Button onClick={handleNext} className="w-full h-11 rounded-xl font-bold gap-2 mt-2">
                      {isLastQuestion ? "Ver Resultados" : "Próxima Questão"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  // ── CEBRASPE Legacy Render ─────────────────────────────────────────────────
  const ceb = q as CebraspecQuestion;
  const isCorrect = userAnswer !== "NÃO SEI" && userAnswer === ceb.resposta;

  return (
    <div className="w-full flex justify-center items-center flex-grow py-4">
      <div className="w-full max-w-2xl bg-card border shadow-xl rounded-3xl overflow-hidden relative flex flex-col min-h-[600px]">

        {/* Header */}
        <div className="p-5 border-b flex justify-between items-center bg-muted/30">
          <div className="flex items-center gap-2 text-muted-foreground font-medium">
            <BrainCircuit className="w-5 h-5" />
            <span>Simulado CEBRASPE</span>
          </div>
          <div className="flex items-center gap-2">
            {ceb.dificuldade && (
              <span className="text-xs font-bold px-2 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                {ceb.dificuldade}
              </span>
            )}
            <div className="text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
              Questão {currentIndex + 1} de {questions.length}
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="flex-grow p-8 flex flex-col space-y-6">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              {ceb.context && (
                <div className="bg-muted/50 p-4 rounded-xl border text-sm text-muted-foreground leading-relaxed italic relative pt-6">
                  <span className="absolute top-2 left-4 text-[10px] font-bold uppercase tracking-widest text-primary/70">Contexto</span>
                  {ceb.context}
                </div>
              )}
              <div className="text-center py-4 border-y border-border/50">
                <p className="text-2xl sm:text-3xl font-bold leading-tight text-neutral-800 dark:text-neutral-100 italic">
                  "{ceb.afirmacao}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="grid grid-cols-2 gap-4 pt-4 mt-auto">
            {(["CERTO", "ERRADO"] as const).map((opt) => (
              <Button
                key={opt}
                onClick={() => handleAnswer(opt)}
                disabled={showFeedback}
                variant="outline"
                className={`h-20 text-2xl font-black rounded-3xl border-2 transition-all duration-300 ${
                  showFeedback && ceb.resposta === opt
                    ? opt === "CERTO" ? "bg-green-500 text-white border-green-500 scale-105" : "bg-red-500 text-white border-red-500 scale-105"
                    : showFeedback && userAnswer === opt && ceb.resposta !== opt
                    ? opt === "CERTO" ? "bg-red-500 text-white border-red-500" : "bg-green-500 text-white border-green-500"
                    : opt === "CERTO" ? "hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-600" : "hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-600"
                }`}
              >
                {opt}
              </Button>
            ))}
          </div>

          <Button onClick={() => handleAnswer("NÃO SEI")} disabled={showFeedback} variant="ghost" className="w-full h-12 text-muted-foreground rounded-xl font-medium">
            Pular / Não sei
          </Button>

          <AnimatePresence>
            {showFeedback && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                <div className={`p-6 rounded-2xl border-2 space-y-4 ${
                  userAnswer === "NÃO SEI" ? "bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
                  : isCorrect ? "bg-green-50/50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                  : "bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-800"
                }`}>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {userAnswer === "NÃO SEI" ? <RefreshCw className="w-5 h-5 text-blue-600" />
                        : isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-600" />
                        : <XCircle className="w-5 h-5 text-red-600" />}
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">
                        {userAnswer === "NÃO SEI" ? "Tudo bem, vamos aprender!" : isCorrect ? "Excelente! Você acertou." : "Não foi dessa vez..."}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ceb.explicacao}</p>
                    </div>
                  </div>
                  <Button onClick={handleNext} className="w-full h-12 rounded-xl font-bold gap-2">
                    {isLastQuestion ? "Ver Resultados" : "Próxima Questão"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
