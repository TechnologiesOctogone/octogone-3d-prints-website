import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PrinterStatusBadge } from "./printer-status-badge";

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
