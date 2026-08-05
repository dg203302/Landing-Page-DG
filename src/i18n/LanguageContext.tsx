import { createContext, useContext, useEffect, useMemo, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { content, type Lang } from "@/i18n/content";

type Ctx = {
  lang: Lang;
  t: (typeof content)["en"];
  other: Lang;
  otherPath: string;
  switchLang: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const lang: Lang = location.pathname.startsWith("/es") ? "es" : "en";
  const t = content[lang] as (typeof content)["en"];
  const other: Lang = lang === "en" ? "es" : "en";
  const otherPath = other === "es" ? "/es" : "/";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        "href",
        lang === "es"
          ? "https://diegogarcia-dev.com.ar/es"
          : "https://diegogarcia-dev.com.ar/"
      );
    }
  }, [lang, t]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      t,
      other,
      otherPath,
      switchLang: () => navigate(otherPath),
    }),
    [lang, t, other, otherPath, navigate]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
