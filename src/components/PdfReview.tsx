"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Timer, ArrowRight, EyeOff, Loader2 } from "lucide-react";

interface PdfReviewProps {
  pdfUrl: string;
  type?: 'pdf' | 'image';
  onComplete: (screenshot: string) => void;
}

export default function PdfReview({ pdfUrl, type = 'pdf', onComplete }: PdfReviewProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Capture material as image once component mounts (Only needed for PDF as fallback)
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;
    if (type !== 'pdf') return; // For images, we read directly from disk on server

    const captureMaterial = async () => {
      if (isCapturing || screenshot) return;
      setIsCapturing(true);

      try {
        // Dynamic import for PDF
        const pdfjsLib = await import("pdfjs-dist");
        // @ts-ignore
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
          canvasContext: context,
          viewport: viewport,
          canvas: canvas as any
        }).promise;

        // Use JPEG with 0.8 quality to reduce payload size
        const base64Image = canvas.toDataURL('image/jpeg', 0.8);
        setScreenshot(base64Image);
        console.log("PDF Screen captured and compressed successfully (client-side fallback)");
        setIsCapturing(false);
      } catch (error) {
        console.error("Error capturing material screenshot:", error);
        setIsCapturing(false);
      }
    };

    captureMaterial();
  }, [pdfUrl, type]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-[92vh] flex justify-center items-center py-2"
    >
      <div className="w-full h-full flex flex-col bg-card border shadow-xl rounded-3xl overflow-hidden relative">

        {/* Hidden canvas for capture */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />

        {/* Header - Manual Start */}
        <div className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-10 flex justify-between items-center px-6">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold tracking-wide">
                Revisão do Mapa Mental
              </span>
            </h2>
            <p className="text-xs text-muted-foreground mt-1">Estude o mapa e clique no botão quando estiver pronto para as questões.</p>
          </div>
          
          <Button
            onClick={() => onComplete(screenshot || "")}
            disabled={(type === 'pdf' && !screenshot) || isCapturing}
            size="lg"
            className="px-8 text-lg h-12 rounded-xl shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all group font-bold"
          >
            {isCapturing ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                Gerar Questões
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </div>

        {/* Viewer Area */}
        <div className="flex-grow relative bg-neutral-100 dark:bg-neutral-900 overflow-hidden rounded-b-3xl">
          {type === 'image' ? (
            <div className="w-full h-full flex items-center justify-center p-4">
              <img 
                src={pdfUrl} 
                alt="Mind Map" 
                className="max-w-full max-h-full object-contain select-none shadow-lg rounded-lg"
              />
            </div>
          ) : (
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
              className="w-full h-full border-0 select-none"
              title="PDF Viewer"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
