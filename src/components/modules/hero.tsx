import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IMAGES } from "@/data/hero";
import { Action } from "../layout/action";

function PrinterStatusBadge() {
  return (
    <Badge className="mb-6" variant="secondary">
      <span className="relative mr-1 size-2 rounded-full bg-emerald-400 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-emerald-400" />
      2 imprimantes en ligne
    </Badge>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col items-start">
      <PrinterStatusBadge />

      <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-5xl lg:mb-6 lg:text-6xl">
        Ouvrez la porte des personnalisations{" "}
        <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
          infinies
        </span>
        .
      </h1>

      <p className="mb-8 max-w-lg text-base text-muted-foreground md:text-lg lg:mb-12">
        Bienvenue chez Octogone 3D Prints™. Notre mission est de promouvoir la
        créativité et l'expertise technique à chaque étape de la chaîne de
        valeur. Qualité et contrôle sont la pierre angulaire de notre pratique.
      </p>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:gap-4">
        <Action className={buttonVariants()} />
      </div>
    </div>
  );
}

function HeroVisual() {
  const [image, setImage] = useState<string | null>(null);
  useEffect(
    () =>
      setImage(
        require(
          `@/assets/hero/${IMAGES[Math.floor(Math.random() * IMAGES.length)]}`,
        ),
      ),
    [],
  );

  return (
    <Card className="relative hidden lg:block aspect-square max-w-md mx-auto">
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(grey 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="flex items-center h-full">
        {image && (
          <Image
            src={image}
            alt="3D Printing Preview"
            width={512}
            height={512}
            className="z-1"
          />
        )}
      </div>
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
