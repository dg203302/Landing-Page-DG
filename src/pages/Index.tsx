import { Navigation } from "@/components/Navigation";
import { BackgroundBubbles } from "@/components/BackgroundBubbles";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { AdBanner } from "@/components/AdBanner";
import { IframeAdBanner } from "@/components/IframeAdBanner";

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
          <IframeAdBanner
            adKey="c7120d15f6948cb19a000f354d8c57d6"
            width={468}
            height={60}
          />
        </div>
        <Education />
        <Projects />
        <div className="container mx-auto px-4">
          <IframeAdBanner
            adKey="b8e8436c6e5b6a76e846706af1213d14"
            width={300}
            height={300}
          />
        </div>
        <Contact />
      </div>
    </main>
  );
};

export default Index;
