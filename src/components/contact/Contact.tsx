import { Container } from "@/components/layout/Container";

import ContactContent from "./ContactContent";
import ContactHeader from "./ContactHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full border-b border-border bg-background py-20 md:py-24"
    >
      <Container>
        <div className="flex w-full flex-col gap-14">
          <ContactHeader />

          <ContactContent />
        </div>
      </Container>
    </section>
  );
}
