import { Container } from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <Container>
        <HeroContent image={<HeroImage />} />
      </Container>
    </section>
  );
}