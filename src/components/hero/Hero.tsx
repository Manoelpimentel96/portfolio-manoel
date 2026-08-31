import { Container } from "@/components/layout/Container";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative overflow-hidden
        border-b border-border
        bg-background
      "
    >
      <Container>
        <HeroContent />
      </Container>
    </section>
  );
}