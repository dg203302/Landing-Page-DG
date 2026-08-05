import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const ScrollProgress = () => {
  const { t } = useLang();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-[60] h-0.5 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-brand origin-left transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t.common.backToTop}
        className={`hidden md:flex fixed bottom-8 right-8 z-[60] w-12 h-12 items-center justify-center rounded-full glass shadow-card text-foreground/80 hover:text-brand transition-all duration-300 ${
          progress > 0.08 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
};
