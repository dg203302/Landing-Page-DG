import { Navigation } from "@/components/Navigation";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <BackgroundVideo />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Experience />
        <Education />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
