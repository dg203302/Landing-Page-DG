import { useMemo } from "react";

interface Bubble {
  id: number;
  cx: number;
  cy: number;
  r: number;
  opacity: number;
  color: string;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  scale: number;
}

const BUBBLE_COUNT = 22;

const palette = [
  "hsl(45 95% 60%",   // warm yellow
  "hsl(48 90% 64%",   // bright yellow
  "hsl(42 88% 58%",   // golden yellow
  "hsl(38 85% 55%",   // amber
  "hsl(50 80% 68%",   // soft lemon
  "hsl(36 78% 52%",   // deep gold
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const BackgroundBubbles = () => {
  const bubbles = useMemo<Bubble[]>(() => {
    return Array.from({ length: BUBBLE_COUNT }).map((_, i) => ({
      id: i,
      cx: random(5, 95),
      cy: random(5, 95),
      r: random(12, 34),
      opacity: random(0.22, 0.38),
      color: palette[Math.floor(Math.random() * palette.length)],
      duration: random(18, 34),
      delay: random(-30, 0),
      driftX: random(-10, 10),
      driftY: random(-14, 14),
      scale: random(0.85, 1.2),
    }));
  }, []);

  const keyframes = useMemo(() => {
    return bubbles
      .map(
        (b) => `
@keyframes bubble-${b.id} {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(${b.driftX}%, ${b.driftY * 0.8}%) scale(${1 + (b.scale - 1) * 0.5}); }
  50% { transform: translate(${b.driftX * -0.6}%, ${b.driftY}%) scale(${b.scale}); }
  75% { transform: translate(${b.driftX * 0.4}%, ${b.driftY * -0.5}%) scale(${1 + (b.scale - 1) * 0.3}); }
}`
      )
      .join("\n");
  }, [bubbles]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background">
      <style>{keyframes}</style>

      {/* Warm ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,hsl(42_40%_22%_/_0.22),transparent_45%),radial-gradient(ellipse_at_70%_80%,hsl(36_35%_18%_/_0.18),transparent_45%),hsl(0_0%_3%)]" />

      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="bubble-blur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
          <radialGradient id="bubble-glow" cx="25%" cy="25%" r="75%">
            <stop offset="0%" stopColor="hsl(50 100% 88%)" stopOpacity="0.85" />
            <stop offset="50%" stopColor="hsl(45 90% 62%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(42 80% 55%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {bubbles.map((b) => (
          <g
            key={b.id}
            style={{
              transformOrigin: `${b.cx}% ${b.cy}%`,
              animation: `bubble-${b.id} ${b.duration}s ease-in-out infinite`,
              animationDelay: `${b.delay}s`,
              opacity: b.opacity,
            }}
          >
            <circle
              cx={`${b.cx}%`}
              cy={`${b.cy}%`}
              r={b.r}
              fill={`${b.color} / ${b.opacity})`}
              filter="url(#bubble-blur)"
            />
            <circle
              cx={`${b.cx}%`}
              cy={`${b.cy}%`}
              r={b.r * 0.5}
              fill="url(#bubble-glow)"
              opacity={0.75}
            />
            <circle
              cx={`${b.cx}%`}
              cy={`${b.cy}%`}
              r={b.r * 0.18}
              fill="hsl(50 100% 90% / 0.7)"
              style={{
                transform: `translate(-${b.r * 0.22}%, -${b.r * 0.22}%)`,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Central dark overlay to preserve text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0_0%_3%_/_0.62)_0%,transparent_65%)]" />

      {/* Soft edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,hsl(0_0%_3%_/_0.65)_100%)]" />
    </div>
  );
};
