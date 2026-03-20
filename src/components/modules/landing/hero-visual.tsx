import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

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
