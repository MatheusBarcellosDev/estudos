"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ConcursoId = "TJSC" | "ANSA";

interface ConcursoContextValue {
  concurso: ConcursoId;
  setConcurso: (id: ConcursoId) => void;
}

const ConcursoContext = createContext<ConcursoContextValue>({
  concurso: "TJSC",
  setConcurso: () => {},
});

export function ConcursoProvider({ children }: { children: ReactNode }) {
  const [concurso, setConcursoState] = useState<ConcursoId>("TJSC");

  useEffect(() => {
    const saved = localStorage.getItem("concurso_ativo") as ConcursoId | null;
    if (saved === "ANSA" || saved === "TJSC") setConcursoState(saved);
  }, []);

  const setConcurso = (id: ConcursoId) => {
    setConcursoState(id);
    localStorage.setItem("concurso_ativo", id);
  };

  return (
    <ConcursoContext.Provider value={{ concurso, setConcurso }}>
      {children}
    </ConcursoContext.Provider>
  );
}

export function useConcurso() {
  return useContext(ConcursoContext);
}
