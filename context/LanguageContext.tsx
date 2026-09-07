"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "EN" | "AR";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("EN");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "EN" ? "AR" : "EN"));
  };

  useEffect(() => {
    // تغيير اتجاه الموقع بالكامل ولغته في الـ HTML Tag
    document.documentElement.dir = lang === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = lang === "AR" ? "ar" : "en";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, isAr: lang === "AR" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}