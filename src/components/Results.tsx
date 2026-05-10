"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RefreshCw, Trophy, Zap } from "lucide-react";
import { QuizResult, FGVQuestion, CebraspecQuestion } from "@/types";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="w-full flex flex-col items-center justify-start flex-grow py-8 max-w-3xl mx-auto space-y-8"
    >
      {/* Score Header */}
      <div className="w-full bg-card p-6 sm:p-8 rounded-3xl shadow-lg border flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20 flex-shrink-0">
            {percentage >= 70
              ? <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              : <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />}
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Avaliação Concluída</h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-1">
              Você acertou <strong className="text-foreground">{correctCount}</strong> de {totalCount} questões.
            </p>
          </div>
        </div>
        <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l pt-4 sm:pt-0 sm:pl-8 border-border w-full sm:w-auto">
          <div className="text-5xl sm:text-6xl font-black text-primary">{percentage}%</div>
          <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">aproveitamento</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onRestart} variant="outline" size="lg"
          className="w-full sm:w-auto px-10 h-14 rounded-2xl font-bold border-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all">
          Voltar ao Início
        </Button>
        {hasNext && onNext && (
          <Button onClick={onNext} size="lg"
            className="w-full sm:w-auto px-10 h-14 rounded-2xl font-bold shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all">
            Próximo Card →
          </Button>
        )}
      </div>

      {/* Gabarito Comentado */}
      <div className="w-full space-y-6">
        <h3 className="text-2xl font-bold px-2">Gabarito Comentado</h3>
        <div className="grid gap-6">
          {results.map((result, idx) => {
            const isFGV = result.question.mode === 'fgv';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="bg-card text-card-foreground p-6 rounded-3xl border shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className={`mt-1 p-2 rounded-xl flex-shrink-0 ${result.isCorrect ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                    {result.isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                  </div>

                  <div className="space-y-3 flex-1">
                    {/* FGV mode */}
                    {isFGV && (() => {
                      const fgv = result.question as FGVQuestion;
                      return (
                        <>
                          {fgv.context && (
                            <div className="p-3 bg-muted/30 rounded-xl border text-sm italic text-muted-foreground leading-relaxed">
                              {fgv.context}
                            </div>
                          )}
                          <p className="text-base font-medium leading-relaxed">{fgv.enunciado}</p>

                          {/* Alternatives summary */}
                          <div className="space-y-1.5">
                            {(['A', 'B', 'C', 'D', 'E'] as const).map(letter => {
                              const isCorrect = letter === fgv.resposta_correta;
                              const isSelected = result.userAnswer === letter;
                              return (
                                <div key={letter} className={`flex items-start gap-2 text-sm px-3 py-2 rounded-xl border ${
                                  isCorrect ? 'bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700 text-green-800 dark:text-green-300'
                                  : isSelected ? 'bg-red-50 dark:bg-red-950/30 border-red-300 dark:border-red-700 text-red-800 dark:text-red-300'
                                  : 'border-transparent text-muted-foreground'
                                }`}>
                                  <span className="font-black shrink-0">{letter})</span>
                                  <span className="leading-relaxed">{fgv.alternativas[letter]}</span>
                                  {isCorrect && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5 ml-auto" />}
                                  {isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5 ml-auto" />}
                                </div>
                              );
                            })}
                          </div>

                          <div className="p-4 bg-muted/40 rounded-2xl border-l-4 border-primary/40">
                            <p className="text-sm font-semibold text-primary mb-1 inline-flex items-center">
                              <Zap className="w-4 h-4 mr-1" /> Explicação (Alternativa {fgv.resposta_correta}):
                            </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{fgv.comentario}</p>
                          </div>
                        </>
                      );
                    })()}

                    {/* CEBRASPE legacy mode */}
                    {!isFGV && (() => {
                      const ceb = result.question as CebraspecQuestion;
                      return (
                        <>
                          {ceb.context && (
                            <div className="p-3 bg-muted/30 rounded-xl border text-sm italic text-muted-foreground leading-relaxed">
                              {ceb.context}
                            </div>
                          )}
                          <p className="text-lg font-medium leading-relaxed">{ceb.afirmacao}</p>
                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <span className={`px-3 py-1 rounded-full font-bold border-2 ${
                              ceb.resposta === 'CERTO'
                                ? 'border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400'
                                : 'border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400'
                            }`}>
                              Gabarito: {ceb.resposta}
                            </span>
                            <span className={`px-3 py-1 rounded-full font-bold border-2 ${
                              result.userAnswer === ceb.resposta
                                ? 'border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400'
                                : 'border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400'
                            }`}>
                              Sua Resposta: <span className="font-bold">{result.userAnswer || "PULOU"}</span>
                            </span>
                          </div>
                          <div className="p-4 bg-muted/40 rounded-2xl border-l-4 border-primary/40">
                            <p className="text-sm font-semibold text-primary mb-1 inline-flex items-center">
                              <Zap className="w-4 h-4 mr-1" /> Explicação:
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{ceb.explicacao}</p>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="w-full pt-6 pb-12">
        <Button onClick={onRestart} size="lg" className="w-full h-16 text-xl rounded-2xl shadow-lg">
          <RefreshCw className="mr-2 w-6 h-6" />
          Nova Rodada de Estudo
        </Button>
      </div>
    </motion.div>
  );
}
