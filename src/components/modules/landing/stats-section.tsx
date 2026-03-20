import { Clock, Heart, Trophy } from "lucide-react";
import { StatCard } from "@/components/modules/landing/stat-card";

// Hoist logic outside the component to prevent recalculation on re-renders
const getProjectsCount = () => {
  const msPerWeek = 604800000;
  return `${Math.floor((Date.now() - new Date("2025-06-01").getTime()) / msPerWeek)}+`;
};

const STATS_DATA = [
  {
    icon: <Trophy className="h-6 w-6 text-primary" />,
    value: getProjectsCount(),
    label: "Projets réalisés",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    value: "5+",
    label: "Années d'expérience",
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    value: "100%",
    label: "Satisfaction",
  },
];

export function StatsSection() {
  return (
    <section id="stats" className="bg-secondary/50 py-16 md:py-24">
      {/* Mobile-first: 1 col, md: 3 cols */}
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-3 md:gap-10 lg:px-6">
        {STATS_DATA.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
