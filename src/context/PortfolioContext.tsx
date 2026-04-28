"use client";

import React, { createContext, useContext, useState } from "react";

export type InterfaceMode = "unset" | "workstation" | "mobile";

interface PortfolioContextProps {
  interfaceMode: InterfaceMode;
  setInterfaceMode: (mode: InterfaceMode) => void;
  disassembled: boolean;
  setDisassembled: (val: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [interfaceMode, setInterfaceMode] = useState<InterfaceMode>("unset");
  const [disassembled, setDisassembled] = useState(false);

  return (
    <PortfolioContext.Provider value={{ interfaceMode, setInterfaceMode, disassembled, setDisassembled }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
