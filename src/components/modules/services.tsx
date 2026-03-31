import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { SERVICES } from "@/data/services";
import type { Service } from "@/types/landing";

function ServiceItem({ icon, title, desc }: Service) {
  return (
    <Item variant="outline">
      <ItemMedia>{icon}</ItemMedia>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{desc}</ItemDescription>
      </ItemContent>
    </Item>
  );
}

function ServiceCategory({
  title,
  items,
}: {
  title: string;
  items: Service[];
}) {
  return (
    <div className="flex flex-col">
      <h3 className="mb-4 text-lg font-bold tracking-widest uppercase">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {items.map((service) => (
          <ServiceItem key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="container mx-auto px-4 py-16 md:py-24 lg:px-6"
    >
      <div className="mb-12 md:mb-16">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Expertise Technique
        </h2>
        <p className="text-base text-muted-foreground md:text-lg">
          Du design à la production, nous couvrons tout le spectre de la
          fabrication additive.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {Object.entries(SERVICES).map(([category, items]) => (
          <ServiceCategory key={category} title={category} items={items} />
        ))}
      </div>
    </section>
  );
}
