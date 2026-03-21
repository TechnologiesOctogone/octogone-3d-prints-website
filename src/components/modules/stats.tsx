import { Card, CardContent } from "@/components/ui/card";
import { STATS } from "@/data/stats";
import type { Stat } from "@/types/landing";

function StatCard({ icon, value, label }: Stat) {
  return (
    <Card>
      <CardContent className="flex flex-row items-center gap-4 p-4 sm:flex-col sm:justify-center sm:p-6 lg:p-8">
        <div className="shrink-0 rounded-full bg-primary/10 p-2 sm:mb-4 sm:p-4">
          {icon}
        </div>
        <div className="flex flex-col items-start sm:items-center">
          <span className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {value}
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground sm:mt-1 sm:text-sm">
            {label}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="bg-secondary/50 py-8 sm:py-16 lg:py-24">
      <div className="container mx-auto grid grid-cols-1 gap-3 px-4 sm:grid-cols-3 sm:gap-6 lg:gap-10 lg:px-6">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
