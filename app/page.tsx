import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import AIWorkflows from "@/components/AIWorkflows";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="bg-[#F7F9FC] dark:bg-[#0D1B2E]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <AIWorkflows />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <BackToTop />
    </main>
  );
}
