import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PrinterStatusBadge() {
  return (
    <Badge className="mb-6" variant="secondary">
      <span className="relative mr-1 size-2 rounded-full bg-emerald-400 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-emerald-400" />
      2 imprimantes en ligne
    </Badge>
  );
}

export function HeroContent() {
  return (
    <div className="flex flex-col items-start">
      <PrinterStatusBadge />

      <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-5xl lg:mb-6 lg:text-6xl">
        Ouvrez la porte des personnalisations infinies.
      </h1>

      <p className="mb-8 max-w-lg text-base text-muted-foreground md:text-lg lg:mb-12">
        Bienvenue chez Octogone 3D Prints™. Notre mission est de promouvoir la
        créativité et l'expertise technique à chaque étape de la chaîne de
        valeur. Qualité et contrôle sont la pierre angulaire de notre pratique.
      </p>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:gap-4">
        <Button
          render={<Link href="#contact" />}
          nativeButton={false}
          className="w-full sm:w-auto"
        >
          Imprimez
        </Button>
        <Button
          variant="secondary"
          render={<Link href="#services" />}
          nativeButton={false}
          className="w-full sm:w-auto"
        >
          Nos services
        </Button>
      </div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <Card className="relative mx-auto hidden w-full max-w-md py-0 lg:block">
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(grey 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <AspectRatio ratio={1 / 1}>
        <Image
          src={require("@/assets/hero/1.webp")}
          alt="3D Printing Preview"
          fill
          className="object-contain"
        />
      </AspectRatio>
    </Card>
  );
}

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
