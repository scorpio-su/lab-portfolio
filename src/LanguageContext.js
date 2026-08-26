import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { LANG_KEY } from "./i18n/content";

export function getStoredLang() {
  try {
    const stored = window.localStorage.getItem(LANG_KEY);
    if (stored === "zh" || stored === "en") {
      return stored;
    }
  } catch (err) {
    /* ignore unavailable storage */
  }
  return "zh";
}

const LanguageContext = createContext({
  lang: "zh",
  toggleLang: function toggleLang() {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "zh-Hant";
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((current) => {
      const next = current === "zh" ? "en" : "zh";
      try {
        window.localStorage.setItem(LANG_KEY, next);
      } catch (err) {
        /* ignore unavailable storage */
      }
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
