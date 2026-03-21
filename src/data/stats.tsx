import { Clock, Heart, Trophy } from "lucide-react";
import type { Stat } from "@/types/landing";

const getProjectsCount = () => {
  const msPerWeek = 604800000;
  return `${Math.floor((Date.now() - new Date("2025-06-01").getTime()) / msPerWeek)}+`;
};

export const STATS: Stat[] = [
  {
    icon: <Trophy />,
    value: getProjectsCount(),
    label: "Projets réalisés",
  },
  {
    icon: <Clock />,
    value: "5+",
    label: "Années d'expérience",
  },
  {
    icon: <Heart />,
    value: "100%",
    label: "Satisfaction",
  },
];
