"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Dashboard from "@/components/Dashboard";
const PdfReview = dynamic(() => import("@/components/PdfReview"), { ssr: false });
import Quiz from "@/components/Quiz";
import Results from "@/components/Results";
import { Question, QuizResult, Material, AppState } from "@/types";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("DASHBOARD");
  
  // Session State
  const [allMaterials, setAllMaterials] = useState<Material[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  
  // Quiz State
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

  // Fetch all materials once at the start
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const res = await fetch('/api/list-pdfs');
        const data = await res.json();
        if (data.materials && data.materials.length > 0) {
          // Fisher-Yates Shuffle for true randomness
          const shuffled = [...data.materials];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          setAllMaterials(shuffled);
        }
      } catch (error) {
        console.error("Erro ao carregar materiais:", error);
      }
    };
    fetchMaterials();
  }, []);

  const handleStartStudy = () => {
    if (allMaterials.length > 0) {
      const material = allMaterials[currentIndex];
      setSelectedMaterial(material);
      setAppState("REVIEW");
    } else {
      alert("Nenhum mapa encontrado. Por favor, adicione imagens para começar.");
    }
  };

  const handleReviewComplete = async (screenshot: string) => {
    setAppState("QUIZ");
    setIsLoadingQuestions(true);
    
    // Extract filename from URL if it's a proxy URL (e.g. /api/image-proxy?file=test.png)
    let fileName = "";
    if (selectedMaterial?.url.includes("file=")) {
      fileName = decodeURIComponent(selectedMaterial.url.split("file=")[1]);
    } else if (selectedMaterial?.type === 'image') {
      fileName = selectedMaterial.url.split('/').pop() || "";
    }

    try {
      const res = await fetch('/api/generate-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          pdfUrl: selectedMaterial?.url, 
          screenshot: fileName ? undefined : screenshot,
          fileName: fileName || undefined
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate questions');
      }

      const data = await res.json();
      setQuestions(data.questions);
    } catch (error: any) {
      console.error(error);
      alert("Erro ao gerar questões: " + (error.message || "Erro desconhecido"));
      
      // Error fallback
      setQuestions([
        { 
          afirmacao: "Erro ao gerar questões. Por favor, tente novamente.", 
          resposta: "ERRADO", 
          explicacao: "Houve uma falha na comunicação com a IA." 
        }
      ]);
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  const handleQuizComplete = (finalResults: QuizResult[]) => {
    setResults(finalResults);
    setAppState("RESULTS");
  };

  const handleNextStudy = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < allMaterials.length) {
      setCurrentIndex(nextIndex);
      setSelectedMaterial(allMaterials[nextIndex]);
      setQuestions([]);
      setResults([]);
      setAppState("REVIEW");
    } else {
      // Complete session
      setAppState("DASHBOARD");
      setCurrentIndex(0);
      setSelectedMaterial(null);
      alert("Parabéns! Você completou todos os mapas disponíveis nesta sessão.");
    }
  };

  const handleRestart = () => {
    setAppState("DASHBOARD");
    setCurrentIndex(0);
    setSelectedMaterial(null);
    setQuestions([]);
    setResults([]);
  };

  const { theme, toggle: toggleTheme } = useTheme();

  return (
    <main className="min-h-screen bg-[#FDFDFD] dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-50 font-sans transition-colors duration-300">
      {/* Theme toggle — fixed top-right */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="ghost"
          onClick={toggleTheme}
          className="rounded-2xl px-3 text-muted-foreground backdrop-blur-sm bg-background/60 border border-border/50 shadow-sm"
          title="Alternar tema"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </div>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
        {appState === "DASHBOARD" && (
          <Dashboard 
            onStart={handleStartStudy} 
            totalMaterials={allMaterials.length}
          />
        )}
        
        {appState === "REVIEW" && selectedMaterial && (
          <PdfReview 
            pdfUrl={selectedMaterial.url}
            type={selectedMaterial.type}
            onComplete={handleReviewComplete}
            onSkip={handleNextStudy}
            currentCount={currentIndex + 1}
            totalCount={allMaterials.length}
          />
        )}
        
        {appState === "QUIZ" && selectedMaterial && (
          <Quiz 
            pdfUrl={selectedMaterial.url}
            questions={questions}
            isLoading={isLoadingQuestions}
            onComplete={handleQuizComplete} 
          />
        )}
        
        {appState === "RESULTS" && (
          <Results 
            results={results} 
            onRestart={handleRestart}
            onNext={handleNextStudy}
            hasNext={currentIndex + 1 < allMaterials.length}
          />
        )}
      </div>
    </main>
  );
}
