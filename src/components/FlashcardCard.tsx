"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flashcard } from "@/data/flashcards";
import { RotateCw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

interface FlashcardCardProps {
  card: Flashcard;
  /** Called the first time the card is flipped to the back */
  onFlip?: () => void;
}

export default function FlashcardCard({ card, onFlip }: FlashcardCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (!flipped && onFlip) onFlip();
    setFlipped((prev) => !prev);
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto cursor-pointer select-none"
      style={{ perspective: "1200px" }}
      onClick={handleClick}
    >
      <motion.div
        style={{ transformStyle: "preserve-3d", minHeight: "360px" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="relative w-full"
      >
        {/* ── FRONT ── */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 w-full rounded-[2.5rem] bg-gradient-to-br from-indigo-500 via-purple-600 to-violet-700 shadow-2xl p-8 sm:p-12 flex flex-col justify-center items-center text-white text-center"
        >
          <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Frente
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4">
            {card.front.title}
          </h2>
          {card.front.subtitle && (
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-md">
              {card.front.subtitle}
            </p>
          )}
          {card.front.body && (
            <p className="text-white/90 text-base mt-3">{card.front.body}</p>
          )}
          <div className="absolute bottom-6 right-6 opacity-60 text-sm flex items-center gap-1">
            <RotateCw className="w-4 h-4" /> toque para virar
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 w-full rounded-[2.5rem] bg-card border shadow-2xl p-8 sm:p-10 flex flex-col justify-start overflow-y-auto"
        >
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 self-start">
            Verso
          </div>
          <div className="text-sm sm:text-base text-foreground leading-relaxed flex-1 prose prose-sm dark:prose-invert max-w-none prose-strong:text-foreground prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-headings:text-foreground prose-headings:font-bold">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {card.back.body}
            </ReactMarkdown>
          </div>
          {card.tags && card.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="absolute bottom-6 right-6 opacity-40 text-sm flex items-center gap-1">
            <RotateCw className="w-4 h-4" /> toque para virar
          </div>
        </div>
      </motion.div>
    </div>
  );
}
