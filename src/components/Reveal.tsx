import { ReactNode, forwardRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "h2";
}

export const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  ({ children, className, delay = 0, as: Tag = "div" }, _ref) => {
    const innerRef = useReveal<HTMLDivElement>();
    return (
      <Tag
        ref={innerRef as never}
        className={cn("reveal", className)}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </Tag>
    );
  }
);
Reveal.displayName = "Reveal";
