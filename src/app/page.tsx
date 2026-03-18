"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Dashboard from "@/components/Dashboard";
const PdfReview = dynamic(() => import("@/components/PdfReview"), { ssr: false });
import Quiz from "@/components/Quiz";
import Results from "@/components/Results";
import { Question, QuizResult } from "@/types";

export type AppState = "DASHBOARD" | "REVIEW" | "QUIZ" | "RESULTS";

// A mock question string so the build works. We will fetch these later.
const MOCK_QUESTIONS: Question[] = [
  { text: "A segunda lei da termodinâmica afirma que a entropia de um sistema isolado tende a diminuir.", answer: "ERRADO", explanation: "A entropia tende a aumentar." },
];

export default function Home() {
  const [appState, setAppState] = useState<AppState>("DASHBOARD");
  const [selectedMaterial, setSelectedMaterial] = useState<{ url: string, type: 'pdf' | 'image' } | null>(null);
  
  // Quiz State
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

  const handleStartStudy = async () => {
    try {
      const res = await fetch('/api/list-pdfs');
      const data = await res.json();
      
      if (data.materials && data.materials.length > 0) {
        const randomItem = data.materials[Math.floor(Math.random() * data.materials.length)];
        setSelectedMaterial({ url: randomItem.url, type: randomItem.type });
        setAppState("REVIEW");
      } else {
        alert("Nenhum mapa encontrado na pasta public/sample-images. Por favor, adicione imagens (PNG/JPG) para começar.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar a lista de materiais.");
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
      setQuestions([
        { 
          text: "Erro ao gerar questões. Por favor, tente novamente clicando em Iniciar Estudo.", 
          answer: "ERRADO", 
          explanation: "Houve uma falha na comunicação com a IA ou no processamento do PDF." 
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

  const handleRestart = () => {
    setAppState("DASHBOARD");
    setSelectedMaterial(null);
    setQuestions([]);
    setResults([]);
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-50 font-sans transition-colors duration-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
        {appState === "DASHBOARD" && <Dashboard onStart={handleStartStudy} />}
        
        {appState === "REVIEW" && selectedMaterial && (
          <PdfReview 
            pdfUrl={selectedMaterial.url}
            type={selectedMaterial.type}
            onComplete={handleReviewComplete} 
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
          />
        )}
      </div>
    </main>
  );
}
