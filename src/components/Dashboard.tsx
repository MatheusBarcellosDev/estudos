"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, BrainCircuit, Layers, Scale, FlaskConical, ChevronRight } from "lucide-react";
import Link from "next/link";
import { flashcards } from "@/data/flashcards";
import { flashcardsTJSC } from "@/data/flashcards-tjsc";
import { useConcurso, ConcursoId } from "@/context/ConcursoContext";

interface DashboardProps {
  onStart: () => void;
  totalMaterials: number;
}

const CONCURSOS: { id: ConcursoId; label: string; sub: string; icon: React.ReactNode; cards: number; color: string; active: boolean }[] = [
  {
    id: "TJSC",
    label: "TJ-SC",
    sub: "Auxiliar",
    icon: <Scale className="w-6 h-6" />,
    cards: flashcardsTJSC.length,
    color: "emerald",
    active: true,
  },
  {
    id: "ANSA",
    label: "ANSA / Petrobras",
    sub: "Em standby",
    icon: <FlaskConical className="w-6 h-6" />,
    cards: flashcards.length,
    color: "blue",
    active: false,
  },
];

export default function Dashboard({ onStart, totalMaterials }: DashboardProps) {
  const { concurso, setConcurso } = useConcurso();

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
          Treinamento de alta performance no estilo{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">CEBRASPE</span>.
        </p>
      </div>

      {/* Seletor de Concurso */}
      <div className="w-full space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-left">
          Concurso ativo
        </p>
        {CONCURSOS.map((c) => {
          const isSelected = concurso === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setConcurso(c.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                isSelected
                  ? c.color === "emerald"
                    ? "border-emerald-500 bg-emerald-500/10 shadow-md"
                    : "border-blue-500 bg-blue-500/10 shadow-md"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              <div
                className={`p-2 rounded-xl ${
                  isSelected
                    ? c.color === "emerald"
                      ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      : "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {c.icon}
              </div>
              <div className="flex-1">
                <p className="font-bold text-base leading-tight">{c.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    isSelected
                      ? c.color === "emerald"
                        ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                        : "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {c.cards} cards
                </span>
                {isSelected && (
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    ✓ ativo
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Ações */}
      <div className="w-full space-y-3">
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
            <span className="ml-auto bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              {concurso === "TJSC" ? flashcardsTJSC.length : flashcards.length}
              <ChevronRight className="w-3 h-3" />
            </span>
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full pt-8 border-t border-border">
        <div className="bg-card text-card-foreground p-4 rounded-2xl border shadow-sm">
          <p className="text-sm text-muted-foreground font-medium mb-1">Formato</p>
          <p className="text-lg font-semibold">Certo/Errado</p>
        </div>
        <div className="bg-card text-card-foreground p-4 rounded-2xl border shadow-sm">
          <p className="text-sm text-muted-foreground font-medium mb-1">Tempo de Leitura</p>
          <p className="text-lg font-semibold">2 Minutos</p>
        </div>
        <div className="bg-card text-card-foreground p-4 rounded-2xl border shadow-sm col-span-2">
          <p className="text-sm text-muted-foreground font-medium mb-1">Mapas Disponíveis</p>
          <p className="text-xl font-bold text-primary">{totalMaterials}</p>
        </div>
      </div>
    </motion.div>
  );
}
