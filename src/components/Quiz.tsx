"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrainCircuit, CheckCircle2, XCircle, ArrowRight, Loader2 } from "lucide-react";
import { Question, QuizResult } from "@/types";

interface QuizProps {
  pdfUrl: string;
  questions: Question[];
  isLoading: boolean;
  onComplete: (results: QuizResult[]) => void;
}

export default function Quiz({ pdfUrl, questions, isLoading, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
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
            A IA está analisando o mapa mental e criando 5 questões inéditas com pegadinhas no estilo CEBRASPE.
          </p>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer: "CERTO" | "ERRADO" | "NÃO SEI") => {
    const isCorrect = answer === "NÃO SEI" ? false : currentQuestion.answer === answer;
    
    const newResults: QuizResult[] = [
      ...results,
      {
        question: currentQuestion,
        userAnswer: answer,
        isCorrect
      }
    ];

    setResults(newResults);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete(newResults);
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-grow py-4">
      <div className="w-full max-w-2xl bg-card border shadow-xl rounded-3xl overflow-hidden relative flex flex-col min-h-[500px]">
        
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

        {/* Question Area */}
        <div className="flex-grow p-8 sm:p-12 flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {currentQuestion.context && (
                <div className="bg-muted/50 p-4 rounded-xl border border-border/50 text-sm sm:text-base text-muted-foreground leading-relaxed italic text-left relative">
                  <span className="absolute -top-3 left-4 bg-background px-2 text-[10px] font-bold uppercase tracking-widest text-primary/70">Contexto / Texto de Apoio</span>
                  {currentQuestion.context}
                </div>
              )}
              
              <div className="text-center py-4">
                <h3 className="text-2xl sm:text-3xl font-semibold leading-relaxed text-foreground">
                  <span className="text-4xl text-primary font-serif leading-none mr-2">"</span>
                  {currentQuestion.text}
                  <span className="text-4xl text-primary font-serif leading-none ml-2">"</span>
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="p-8 pt-0 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={() => handleAnswer("CERTO")}
              size="lg"
              variant="outline" 
              className="h-20 text-xl font-bold border-2 border-green-500/20 hover:bg-green-500 hover:text-white dark:hover:bg-green-600 transition-colors rounded-2xl"
            >
              <CheckCircle2 className="mr-2 w-6 h-6" />
              CERTO
            </Button>
            <Button 
              onClick={() => handleAnswer("ERRADO")}
              size="lg"
              variant="outline"
              className="h-20 text-xl font-bold border-2 border-red-500/20 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 transition-colors rounded-2xl"
            >
              <XCircle className="mr-2 w-6 h-6" />
              ERRADO
            </Button>
          </div>
          
          <Button
            onClick={() => handleAnswer("NÃO SEI")}
            variant="ghost"
            className="h-12 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl font-medium"
          >
            Pular / Não sei (ver explicação detalhada)
          </Button>
        </div>
        
      </div>
    </div>
  );
}
