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
  drift: number;
  scale: number;
}

const BUBBLE_COUNT = 18;

const palette = [
  "hsl(45 90% 60%",   // warm yellow
  "hsl(42 85% 55%",   // golden yellow
  "hsl(38 80% 58%",   // amber
  "hsl(48 70% 65%",   // soft yellow
  "hsl(36 75% 52%",   // deep gold
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const BackgroundBubbles = () => {
  const bubbles = useMemo<Bubble[]>(() => {
    return Array.from({ length: BUBBLE_COUNT }).map((_, i) => ({
      id: i,
      cx: random(5, 95),
      cy: random(10, 90),
      r: random(8, 28),
      opacity: random(0.12, 0.35),
      color: palette[Math.floor(Math.random() * palette.length)],
      duration: random(14, 26),
      delay: random(-20, 0),
      drift: random(-20, 20),
      scale: random(0.85, 1.15),
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background">
      {/* Dark base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(36_30%_18%_/_0.12),transparent_50%),radial-gradient(ellipse_at_50%_100%,hsl(36_25%_12%_/_0.10),transparent_50%),hsl(0_0%_3%)]" />

      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="bubble-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
          </filter>
          <radialGradient id="bubble-glow" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="hsl(45 95% 85%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(42 80% 55%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {bubbles.map((b) => (
          <g
            key={b.id}
            className="animate-bubble"
            style={{
              transformOrigin: `${b.cx}% ${b.cy}%`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          >
            <circle
              cx={`${b.cx}%`}
              cy={`${b.cy}%`}
              r={b.r}
              fill={`${b.color} / ${b.opacity})`}
              filter="url(#bubble-blur)"
              style={{
                transform: `translateX(${b.drift}%) scale(${b.scale})`,
              }}
            />
            <circle
              cx={`${b.cx}%`}
              cy={`${b.cy}%`}
              r={b.r * 0.55}
              fill="url(#bubble-glow)"
              opacity={0.6}
              style={{
                transform: `translateX(${b.drift}%) scale(${b.scale})`,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Soft vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(0_0%_3%_/_0.75)_100%)]" />
    </div>
  );
};
