import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import Experience from "@/components/sections/experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/20 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Process />
        <About />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
