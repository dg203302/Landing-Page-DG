import { useEffect, useRef } from "react";

const BUBBLE_COUNT = 35;

// Yellow palette adapted from the provided red palette
const params = {
  bubbleFill: "rgba(255, 210, 70, ",
  bubbleStroke: "rgba(255, 230, 130, ",
  gradient: "linear-gradient(135deg, #4a3a02 0%, #170f00 100%)",
};

class Bubble {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  isBlurred: boolean;
  baseOpacity: number;
  pulseRate: number;
  angle: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 90 + 20;
    const speedMult = 0.4;
    this.vx = (Math.random() - 0.5) * speedMult;
    this.vy = (Math.random() - 0.5) * speedMult;
    this.isBlurred = Math.random() > 0.4;
    this.baseOpacity = Math.random() * 0.3 + 0.05;
    this.pulseRate = Math.random() * 0.01 + 0.005;
    this.angle = Math.random() * Math.PI * 2;
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;
    this.angle += this.pulseRate;

    if (this.x - this.radius > width) this.x = -this.radius;
    if (this.x + this.radius < 0) this.x = width + this.radius;
    if (this.y - this.radius > height) this.y = -this.radius;
    if (this.y + this.radius < 0) this.y = height + this.radius;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const currentOpacity = this.baseOpacity + Math.sin(this.angle) * 0.08;
    const safeOpacity = Math.max(0, currentOpacity);

    ctx.beginPath();
    if (this.isBlurred) {
      const gradient = ctx.createRadialGradient(
        this.x,
        this.y,
        this.radius * 0.3,
        this.x,
        this.y,
        this.radius
      );
      gradient.addColorStop(0, `${params.bubbleFill}${safeOpacity})`);
      gradient.addColorStop(1, `${params.bubbleFill}0)`);
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = `${params.bubbleFill}${safeOpacity})`;
      ctx.strokeStyle = `${params.bubbleStroke}${safeOpacity * 1.5})`;
      ctx.lineWidth = 1.5;
    }

    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    if (!this.isBlurred) ctx.stroke();
  }
}

export const BackgroundBubbles = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let bubbles: Bubble[] = [];
    let frameId = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const init = () => {
      bubbles = [];
      for (let i = 0; i < BUBBLE_COUNT; i++) {
        bubbles.push(new Bubble(width, height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "screen";
      for (const b of bubbles) {
        b.update(width, height);
        b.draw(ctx);
      }
      frameId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      style={{ background: params.gradient }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {/* Subtle vignette to keep text readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
};
