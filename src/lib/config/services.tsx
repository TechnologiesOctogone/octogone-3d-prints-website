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

export const SERVICES = {
  conception: [
    {
      title: "Idéation",
      icon: <Rocket className="w-5 h-5" />,
      desc: "De l'idée au concept concret.",
    },
    {
      title: "Modélisation technique",
      icon: <PenTool className="w-5 h-5" />,
      desc: "CAO précise pour fabrication.",
    },
    {
      title: "Sélection matériaux",
      icon: <Layers className="w-5 h-5" />,
      desc: "Optimisation selon l'usage.",
    },
  ],
  impression: [
    {
      title: "Impression à la demande",
      icon: <Box className="w-5 h-5" />,
      desc: "Vos fichiers STL en réalité.",
    },
    {
      title: "Séries & Catalogues",
      icon: <Layers className="w-5 h-5" />,
      desc: "Production de petites séries.",
    },
    {
      title: "Prototypage",
      icon: <Settings className="w-5 h-5" />,
      desc: "Validation rapide de design.",
    },
    {
      title: "Post-traitement",
      icon: <Palette className="w-5 h-5" />,
      desc: "Finition, ponçage et peinture.",
    },
  ],
  conseil: [
    {
      title: "Formations",
      icon: <Cpu className="w-5 h-5" />,
      desc: "Apprenez à maîtriser vos outils.",
    },
    {
      title: "Design for AM",
      icon: <Zap className="w-5 h-5" />,
      desc: "Optimisation spécifique 3D.",
    },
  ],
};
