import { Reveal } from "@/components/Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => (
  <div className="max-w-3xl mb-12 md:mb-16">
    <Reveal>
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
        {eyebrow}
      </span>
    </Reveal>
    <Reveal delay={80}>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
    </Reveal>
    {description && (
      <Reveal delay={160}>
        <p className="text-lg text-foreground/70 leading-relaxed">{description}</p>
      </Reveal>
    )}
  </div>
);
