import { Navigation } from "@/components/Navigation";
import { BackgroundBubbles } from "@/components/BackgroundBubbles";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundBubbles />
      <div className="relative z-10">
        <Navigation />
        <ScrollProgress />
        <main>
          <Hero />
          <Experience />
          <Education />
          <Services />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
