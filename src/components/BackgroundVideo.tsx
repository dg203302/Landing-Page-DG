import bgVideo from "@/assets/bg.mp4.asset.json";

export const BackgroundVideo = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <video
      src={bgVideo.url}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover brightness-125 contrast-125 saturate-150"
    />
    <div className="absolute inset-0 bg-background/5" />
  </div>
);
