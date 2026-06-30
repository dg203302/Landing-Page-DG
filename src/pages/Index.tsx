import { Navigation } from "@/components/Navigation";
import { BackgroundBubbles } from "@/components/BackgroundBubbles";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { AdBanner } from "@/components/AdBanner";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <BackgroundBubbles />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <div className="container mx-auto px-4">
          <AdBanner />
        </div>
        <Experience />
        <div className="container mx-auto px-4">
          <AdBanner />
        </div>
        <Education />
        <Projects />
        <div className="container mx-auto px-4">
          <AdBanner />
        </div>
        <Contact />
      </div>
    </main>
  );
};

export default Index;
