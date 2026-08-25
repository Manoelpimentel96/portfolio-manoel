import AboutContent from "./AboutContent";
import AboutHighlights from "./AboutHighlights";

export default function AboutDetails() {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        justify-center
        lg:max-w-3xl
      "
    >
      <AboutContent />

      <div className="mt-10 sm:mt-12">
        <AboutHighlights />
      </div>
    </div>
  );
}
