import bgVideo from "@/assets/bg.mp4.asset.json";

export const BackgroundVideo = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <video
      src={bgVideo.url}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-background/20" />
  </div>
);
