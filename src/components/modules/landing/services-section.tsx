import { ServiceCategory } from "@/components/modules/landing/service-category";
import { SERVICES } from "@/data/services"; // Hoist data outside

export function ServicesSection() {
  return (
    <section
      id="services"
      className="container mx-auto px-4 py-16 md:py-24 lg:px-6"
    >
      {/* Header scaling */}
      <div className="mb-12 md:mb-16">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Expertise Technique
        </h2>
        <p className="text-base text-muted-foreground md:text-lg">
          Du design à la production, nous couvrons tout le spectre de la
          fabrication additive.
        </p>
      </div>

      {/* Responsive Grid: 1 col -> 2 cols -> 3 cols */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {Object.entries(SERVICES).map(([category, items]) => (
          <ServiceCategory key={category} title={category} items={items} />
        ))}
      </div>
    </section>
  );
}
