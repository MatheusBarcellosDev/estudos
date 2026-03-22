"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, BrainCircuit, Layers } from "lucide-react";
import Link from "next/link";
import { flashcards } from "@/data/flashcards";

interface DashboardProps {
  onStart: () => void;
  totalMaterials: number;
}

export default function Dashboard({ onStart, totalMaterials }: DashboardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col items-center justify-center text-center space-y-8 w-full max-w-lg mx-auto"
    >
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center p-5 bg-primary/10 rounded-3xl mb-6 shadow-inner">
          <BrainCircuit className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Concurso <span className="text-primary">Trainer</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Treinamento diário de alta performance. Leia mapas mentais exclusivos e resolva questões simuladas no estilo <span className="font-semibold text-neutral-800 dark:text-neutral-200">CEBRASPE (Certo/Errado)</span>.
        </p>
      </div>

      <div className="w-full pt-8 space-y-3">
        <Button 
          onClick={onStart} 
          size="lg" 
          className="w-full text-xl h-16 rounded-2xl shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 font-bold"
        >
          <BookOpen className="mr-3 w-6 h-6" />
          Iniciar Estudo
        </Button>
        <Link href="/flashcards" className="block">
          <Button 
            variant="outline"
            size="lg" 
            className="w-full text-base h-13 rounded-2xl border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 font-semibold gap-2"
          >
            <Layers className="w-5 h-5" />
            Flashcards
            <span className="ml-auto bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
              {flashcards.length}
            </span>
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full pt-8 border-t border-border mt-8">
        <div className="bg-card text-card-foreground p-4 rounded-2xl border shadow-sm">
          <p className="text-sm text-muted-foreground font-medium mb-1">Formato</p>
          <p className="text-lg font-semibold">Certo/Errado</p>
        </div>
        <div className="bg-card text-card-foreground p-4 rounded-2xl border shadow-sm">
          <p className="text-sm text-muted-foreground font-medium mb-1">Tempo de Leitura</p>
          <p className="text-lg font-semibold">2 Minutos</p>
        </div>
        <div className="bg-card text-card-foreground p-4 rounded-2xl border shadow-sm col-span-2">
          <p className="text-sm text-muted-foreground font-medium mb-1">Total de Mapas Disponíveis</p>
          <p className="text-xl font-bold text-primary">{totalMaterials}</p>
        </div>
      </div>
    </motion.div>
  );
}
