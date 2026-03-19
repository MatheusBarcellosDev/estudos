"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrainCircuit, CheckCircle2, XCircle, ArrowRight, Loader2, RefreshCw } from "lucide-react";
import { Question, QuizResult } from "@/types";

interface QuizProps {
  pdfUrl: string;
  questions: Question[];
  isLoading: boolean;
  onComplete: (results: QuizResult[]) => void;
}

export default function Quiz({ pdfUrl, questions, isLoading, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<"CERTO" | "ERRADO" | "NÃO SEI" | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [isAnswering, setIsAnswering] = useState(false);

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
            A IA está analisando o mapa mental e criando 5 questões inéditas com pegadinhas no estilo CEBRASPE.
          </p>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer: "CERTO" | "ERRADO" | "NÃO SEI") => {
    if (showFeedback || isAnswering) return;
    
    setIsAnswering(true);
    setUserAnswer(answer);
    setShowFeedback(true);
    
    const isCorrect = answer === "NÃO SEI" ? false : currentQuestion.resposta === answer;
    
    const newResult: QuizResult = {
      question: currentQuestion,
      userAnswer: answer,
      isCorrect
    };

    setResults(prev => [...prev, newResult]);
    setIsAnswering(false);
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

  const isCorrect = userAnswer === currentQuestion.resposta;

  return (
    <div className="w-full flex justify-center items-center flex-grow py-4">
      <div className="w-full max-w-2xl bg-card border shadow-xl rounded-3xl overflow-hidden relative flex flex-col min-h-[600px]">
        
        {/* Header */}
        <div className="p-5 border-b flex justify-between items-center bg-muted/30">
          <div className="flex items-center gap-2 text-muted-foreground font-medium">
            <BrainCircuit className="w-5 h-5" />
            <span>Simulado CEBRASPE</span>
          </div>
          <div className="text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
            Questão {currentIndex + 1} de {questions.length}
          </div>
        </div>

        {/* Question Content */}
        <div className="flex-grow p-8 flex flex-col space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {currentQuestion.context && (
                <div className="bg-muted/50 p-4 rounded-xl border border-border/50 text-sm text-muted-foreground leading-relaxed italic text-left relative pt-6">
                  <span className="absolute top-2 left-4 text-[10px] font-bold uppercase tracking-widest text-primary/70">Contexto / Texto de Apoio</span>
                  {currentQuestion.context}
                </div>
              )}
              
              <div className="text-center py-4 border-y border-border/50">
                <p className="text-2xl sm:text-3xl font-bold leading-tight text-neutral-800 dark:text-neutral-100 italic">
                  "{currentQuestion.afirmacao}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Answer Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mt-auto">
            <Button
              onClick={() => handleAnswer("CERTO")}
              disabled={showFeedback || isAnswering}
              variant="outline"
              className={`h-24 sm:h-20 text-2xl font-black rounded-3xl border-2 transition-all duration-300 ${
                showFeedback && currentQuestion.resposta === "CERTO"
                  ? "bg-green-500 text-white border-green-500 scale-105 shadow-xl shadow-green-500/30"
                  : showFeedback && userAnswer === "CERTO" && currentQuestion.resposta !== "CERTO"
                  ? "bg-red-500 text-white border-red-500"
                  : "hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-600 border-green-500/20"
              }`}
            >
              CERTO
            </Button>
            <Button
              onClick={() => handleAnswer("ERRADO")}
              disabled={showFeedback || isAnswering}
              variant="outline"
              className={`h-24 sm:h-20 text-2xl font-black rounded-3xl border-2 transition-all duration-300 ${
                showFeedback && currentQuestion.resposta === "ERRADO"
                  ? "bg-red-500 text-white border-red-500 scale-105 shadow-xl shadow-red-500/30"
                  : showFeedback && userAnswer === "ERRADO" && currentQuestion.resposta !== "ERRADO"
                  ? "bg-green-500 text-white border-green-500"
                  : "hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-600 border-red-500/20"
              }`}
            >
              ERRADO
            </Button>
          </div>

          <Button
            onClick={() => handleAnswer("NÃO SEI")}
            disabled={showFeedback || isAnswering}
            variant="ghost"
            className="w-full h-12 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl font-medium transition-all"
          >
            Pular / Não sei
          </Button>

          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className={`p-6 rounded-2xl border-2 space-y-4 ${
                  userAnswer === "NÃO SEI"
                    ? "bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
                    : isCorrect
                    ? "bg-green-50/50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                    : "bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-800"
                }`}>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {userAnswer === "NÃO SEI" ? (
                        <RefreshCw className="w-5 h-5 text-blue-600" />
                      ) : isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">
                        {userAnswer === "NÃO SEI" ? "Tudo bem, vamos aprender!" : isCorrect ? "Excelente! Você acertou." : "Não foi dessa vez..."}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {currentQuestion.explicacao}
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleNext} 
                    className="w-full h-12 rounded-xl font-bold gap-2"
                  >
                    {currentIndex + 1 === questions.length ? "Ver Resultados" : "Próxima Questão"}
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
