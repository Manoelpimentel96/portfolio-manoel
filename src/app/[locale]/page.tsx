import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function LocalePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About />

        <Projects />

        <Experience />
        
        <Contact />
      </main>
    </>
  );
}
