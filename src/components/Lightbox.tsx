import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

interface LightboxProps {
  images: string[];
  index: number;
  alt: (i: number) => string;
  onClose: () => void;
  onChange: (i: number) => void;
}

export const Lightbox = ({ images, index, alt, onClose, onChange }: LightboxProps) => {
  const { t } = useLang();
  const [touchX, setTouchX] = useState<number | null>(null);

  const go = useCallback(
    (dir: number) => onChange((index + dir + images.length) % images.length),
    [index, images.length, onChange]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [go, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.common.openGallery}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
      onClick={onClose}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        setTouchX(null);
      }}
    >
      <button
        onClick={onClose}
        aria-label={t.common.close}
        className="absolute top-5 right-5 p-3 rounded-full border border-foreground/25 text-foreground hover:bg-foreground/10 transition-colors"
      >
        <X className="h-5 w-5" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label={t.common.prev}
            className="absolute left-3 md:left-8 p-3 rounded-full border border-foreground/25 text-foreground hover:bg-foreground/10 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label={t.common.next}
            className="absolute right-3 md:right-8 p-3 rounded-full border border-foreground/25 text-foreground hover:bg-foreground/10 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index]}
          alt={alt(index)}
          className="mx-auto max-h-[82vh] w-auto max-w-full object-contain"
        />
        <figcaption className="mt-4 text-center text-xs tracking-[0.25em] uppercase text-foreground/60">
          {index + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  );
};
