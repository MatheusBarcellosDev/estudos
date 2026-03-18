"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RefreshCw, Trophy, Zap } from "lucide-react";
import { QuizResult } from "@/types";

interface ResultsProps {
  results: QuizResult[];
  onRestart: () => void;
  onNext?: () => void;
  hasNext?: boolean;
}

export default function Results({ results, onRestart, onNext, hasNext }: ResultsProps) {
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

      {/* Action Buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={onRestart} 
          variant="outline" 
          size="lg" 
          className="w-full sm:w-auto px-10 h-14 rounded-2xl font-bold border-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
        >
          Voltar ao Início
        </Button>

        {hasNext && onNext && (
          <Button 
            onClick={onNext} 
            size="lg" 
            className="w-full sm:w-auto px-10 h-14 rounded-2xl font-bold shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all"
          >
            Estudar Próximo Mapa
          </Button>
        )}
      </div>

      <div className="w-full space-y-6">
        <h3 className="text-2xl font-bold px-2">Gabarito Comentado</h3>
        <div className="grid gap-6">
          {results.map((result, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="bg-card text-card-foreground p-6 rounded-3xl border shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className={`mt-1 p-2 rounded-xl flex-shrink-0 ${
                  result.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {result.isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                </div>
                
                <div className="space-y-3">
                  {result.question.context && (
                    <div className="p-3 bg-muted/30 rounded-xl border border-border text-sm italic text-muted-foreground leading-relaxed">
                      {result.question.context}
                    </div>
                  )}
                  <p className="text-lg font-medium leading-relaxed">
                    {result.question.afirmacao}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className={`px-3 py-1 rounded-full font-bold border-2 ${
                      result.question.resposta === 'CERTO' 
                        ? 'border-green-500/30 bg-green-500/10 text-green-700' 
                        : 'border-red-500/30 bg-red-500/10 text-red-700'
                    }`}>
                      Gabarito: {result.question.resposta}
                    </span>
                    
                    <span className={`px-3 py-1 rounded-full font-bold border-2 ${
                      result.userAnswer === result.question.resposta 
                        ? 'border-green-500/30 bg-green-500/10 text-green-700' 
                        : 'border-red-500/30 bg-red-500/10 text-red-700'
                    }`}>
                      Sua Resposta: <span className="font-bold">{result.userAnswer || "PULOU"}</span>
                    </span>
                  </div>
                  
                  <div className="p-4 bg-muted/40 rounded-2xl border-l-4 border-primary/40">
                    <p className="text-sm font-semibold text-primary mb-1 inline-flex items-center">
                      <Zap className="w-4 h-4 mr-1" /> Explicação:
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {result.question.explicacao}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
