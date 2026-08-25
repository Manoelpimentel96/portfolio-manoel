import About from "@/components/about/About";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function LocalePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        
        <About />
        
      </main>
    </>
  );
}
