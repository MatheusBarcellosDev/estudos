"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Loader2, 
  Maximize2, 
  RotateCw, 
  X, 
  ArrowRight, 
  ChevronRight,
  ZoomIn
} from "lucide-react";

interface PdfReviewProps {
  pdfUrl: string;
  type: 'pdf' | 'image';
  onComplete: (screenshot: string) => void;
  currentCount?: number;
  totalCount?: number;
}

export default function PdfReview({ 
  pdfUrl, 
  type, 
  onComplete, 
  currentCount, 
  totalCount 
}: PdfReviewProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Capture material as image once component mounts (Only needed for PDF as fallback)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (type !== 'pdf') return;

    const captureMaterial = async () => {
      if (isCapturing || screenshot) return;
      setIsCapturing(true);

      try {
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

        const base64Image = canvas.toDataURL('image/jpeg', 0.8);
        setScreenshot(base64Image);
        setIsCapturing(false);
      } catch (error) {
        console.error("Error capturing material screenshot:", error);
        setIsCapturing(false);
      }
    };

    captureMaterial();
  }, [pdfUrl, type]);

  const toggleRotation = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-5xl mx-auto h-[90vh] flex flex-col bg-card border shadow-2xl rounded-[2.5rem] overflow-hidden relative"
    >
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Header */}
      <div className="p-4 sm:p-6 border-b bg-muted/20 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Revisão {currentCount && totalCount && `· ${currentCount} de ${totalCount}`}
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-100">
            Estudo do Mapa Mental
          </h2>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button 
            variant="ghost" 
            onClick={() => onComplete("")} 
            className="flex-1 sm:flex-none rounded-2xl h-12 font-semibold"
          >
            Pular
          </Button>
          <Button
            onClick={() => onComplete(screenshot || "")}
            disabled={(type === 'pdf' && !screenshot) || isCapturing}
            className="flex-[2] sm:flex-none px-6 h-12 rounded-2xl shadow-lg hover:shadow-primary/25 font-bold gap-2"
          >
            {isCapturing ? <Loader2 className="animate-spin w-5 h-5" /> : "Gerar Questões"}
            {!isCapturing && <ArrowRight className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Viewer Area */}
      <div className="flex-grow relative bg-neutral-50 dark:bg-neutral-950 overflow-hidden group">
        {type === 'image' ? (
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="relative max-w-full max-h-full">
              <img 
                src={pdfUrl} 
                alt="Mind Map" 
                className="max-w-full max-h-full object-contain shadow-xl rounded-xl transition-transform duration-300"
              />
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 rounded-full shadow-lg opacity-80 hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
              >
                <Maximize2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        ) : (
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
            className="w-full h-full border-0"
            title="PDF Viewer"
          />
        )}
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col p-4 sm:p-8"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-white font-bold text-lg">Visualização Detalhada</div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={toggleRotation}
                  className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <RotateCw className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setIsFullscreen(false)}
                  className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex-grow flex items-center justify-center overflow-auto p-4">
              <motion.img 
                src={pdfUrl}
                animate={{ rotate: rotation }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`max-w-full max-h-full object-contain ${
                  rotation % 180 !== 0 ? 'scale-125 md:scale-150' : ''
                }`}
              />
            </div>
            
            <div className="text-center text-white/60 text-sm mt-4">
              Dica: Use os dedos para pinçar e dar zoom (no mobile) ou o botão de girar para mapas horizontais.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
