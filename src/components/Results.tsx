"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RefreshCw, Trophy } from "lucide-react";
import { QuizResult } from "@/types";

interface ResultsProps {
  results: QuizResult[];
  onRestart: () => void;
}

export default function Results({ results, onRestart }: ResultsProps) {
  const correctCount = results.filter((r) => r.isCorrect).length;
  const totalCount = results.length;
  const percentage = Math.round((correctCount / totalCount) * 100);

  // Consider CEBRASPE scoring (1 wrong cancels 1 right). But the prompt didn't strictly require the complex scoring, just a simple study tool. We will just show X/5.
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="w-full flex flex-col items-center justify-start flex-grow py-8 max-w-3xl mx-auto space-y-8"
    >
      {/* Score Header */}
      <div className="w-full bg-card p-8 rounded-3xl shadow-lg border flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20">
            {percentage >= 70 ? (
              <Trophy className="w-12 h-12 text-primary" />
            ) : (
              <CheckCircle2 className="w-12 h-12 text-primary" />
            )}
          </div>
          <div>
            <h2 className="text-3xl font-bold">Avaliação Concluída</h2>
            <p className="text-lg text-muted-foreground mt-1">
              Você acertou <strong className="text-foreground">{correctCount}</strong> de {totalCount} questões.
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-5xl font-black text-primary">{percentage}%</div>
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">de aproveitamento</div>
        </div>
      </div>

      {/* Answers Breakdown */}
      <div className="w-full space-y-4">
        <h3 className="text-2xl font-bold px-2 py-2">Gabarito Comentado</h3>
        {results.map((result, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-2xl border ${
              result.userAnswer === "NÃO SEI" 
                ? 'bg-blue-50/50 dark:bg-blue-950/10 border-blue-200 dark:border-blue-900/50'
                : result.isCorrect 
                  ? 'bg-green-50/50 dark:bg-green-950/10 border-green-200 dark:border-green-900/50' 
                  : 'bg-red-50/50 dark:bg-red-950/10 border-red-200 dark:border-red-900/50'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="pt-1">
                {result.userAnswer === "NÃO SEI" ? (
                  <RefreshCw className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                ) : result.isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-500" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-500" />
                )}
              </div>
              <div className="space-y-3 flex-grow">
                {result.question.context && (
                  <p className="text-xs text-muted-foreground italic border-l-2 pl-3 py-1 bg-muted/30">
                    {result.question.context}
                  </p>
                )}
                <p className="text-lg font-medium leading-relaxed">
                  {result.question.text}
                </p>
                <div className="flex flex-wrap gap-3 text-sm font-medium">
                  <span className="px-2 py-1 rounded-md bg-neutral-200/50 dark:bg-neutral-800/50 border">
                    Gabarito: <span className={result.question.answer === "CERTO" ? 'text-green-600 dark:text-green-400 font-bold' : 'text-red-600 dark:text-red-400 font-bold'}>{result.question.answer}</span>
                  </span>
                  <span className={`px-2 py-1 rounded-md border ${
                    result.userAnswer === "NÃO SEI" ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'bg-neutral-200/50 dark:bg-neutral-800/50'
                  }`}>
                    Sua Resposta: <span className="font-bold">{result.userAnswer}</span>
                  </span>
                </div>
                <div className="p-4 bg-background rounded-xl text-sm leading-relaxed border mt-2 shadow-sm">
                  <strong className="text-primary mr-2">📚 Explicação Detalhada:</strong> 
                  {result.question.explanation}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action */}
      <div className="w-full pt-6 pb-12">
        <Button onClick={onRestart} size="lg" className="w-full h-16 text-xl rounded-2xl shadow-lg">
          <RefreshCw className="mr-2 w-6 h-6" />
          Nova Rodada de Estudo
        </Button>
      </div>

    </motion.div>
  );
}
