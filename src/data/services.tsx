import {
  Box,
  Cpu,
  Layers,
  Palette,
  PenTool,
  Rocket,
  Settings,
  Zap,
} from "lucide-react";
import type { Service } from "@/types/landing";

export const SERVICES: Record<string, Service[]> = {
  conception: [
    {
      title: "Idéation",
      icon: <Rocket />,
      desc: "De l'idée au concept concret.",
    },
    {
      title: "Modélisation technique",
      icon: <PenTool />,
      desc: "CAO précise pour fabrication.",
    },
    {
      title: "Sélection matériaux",
      icon: <Layers />,
      desc: "Optimisation selon l'usage.",
    },
  ],
  impression: [
    {
      title: "Impression à la demande",
      icon: <Box />,
      desc: "Vos fichiers STL en réalité.",
    },
    {
      title: "Séries & Catalogues",
      icon: <Layers />,
      desc: "Production de petites séries.",
    },
    {
      title: "Prototypage",
      icon: <Settings />,
      desc: "Validation rapide de design.",
    },
    {
      title: "Post-traitement",
      icon: <Palette />,
      desc: "Finition, ponçage et peinture.",
    },
  ],
  conseil: [
    {
      title: "Formations",
      icon: <Cpu />,
      desc: "Apprenez à maîtriser vos outils.",
    },
    {
      title: "Design for AM",
      icon: <Zap />,
      desc: "Optimisation spécifique 3D.",
    },
  ],
};
