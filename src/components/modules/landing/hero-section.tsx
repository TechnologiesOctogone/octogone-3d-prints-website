import { HeroContent } from "./hero-content";
import { HeroVisual } from "./hero-visual";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-6 lg:py-32"
    >
      <HeroContent />
      <HeroVisual />
    </section>
  );
}
