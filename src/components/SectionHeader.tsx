import { Reveal } from "@/components/Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
}

// Renders the last word of the title in serif italic gold accent
const renderTitle = (title: string) => {
  const parts = title.trim().split(" ");
  if (parts.length < 2) return <>{title}</>;
  const last = parts.pop();
  return (
    <>
      {parts.join(" ")} <span className="font-serifItalic italic text-brand">{last}</span>
    </>
  );
};

export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => (
  <div className="max-w-3xl mb-12 md:mb-16">
    <Reveal>
      <span className="inline-block text-[10px] font-medium uppercase tracking-[0.3em] text-brand/80 mb-5">
        — {eyebrow}
      </span>
    </Reveal>
    <Reveal delay={80}>
      <h2 className="font-display text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight mb-5">
        {renderTitle(title)}
      </h2>
    </Reveal>
    {description && (
      <Reveal delay={160}>
        <div className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl">
          {description}
        </div>
      </Reveal>
    )}
  </div>
);
