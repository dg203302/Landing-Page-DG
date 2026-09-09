import { Reveal } from "@/components/Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
}

export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => (
  <div className="editorial-heading mb-16 md:mb-24 border-t border-foreground/20 pt-6">
    <Reveal className="grid gap-8 md:grid-cols-12 md:items-start">
      <div className="md:col-span-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand">
          {eyebrow}
        </span>
      </div>
      <div className="md:col-span-9">
        <h2 className="font-display text-5xl sm:text-6xl md:text-8xl font-light leading-[0.92] uppercase">
          {title}
        </h2>
        {description && (
          <div className="mt-7 max-w-2xl text-sm md:text-base text-foreground/60 leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </Reveal>
  </div>
);
