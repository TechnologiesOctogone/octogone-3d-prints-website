import { ServiceItem } from "@/components/modules/landing/service-item";

type Service = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

type ServiceCategoryProps = {
  title: string;
  items: Service[];
};

export function ServiceCategory({ title, items }: ServiceCategoryProps) {
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
