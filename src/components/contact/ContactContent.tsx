import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactContent() {
  return (
    <div className="grid w-full gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div className="flex flex-col gap-8">
        <ContactInfo />
      </div>

      <ContactForm />
    </div>
  );
}
