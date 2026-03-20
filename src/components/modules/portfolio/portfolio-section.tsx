import { ProjectItem } from "@/components/modules/portfolio/project-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PROJECTS from "@/lib/data/portfolio.json";

export function PortfolioSection() {
  return (
    <section className="w-full px-4 py-16 md:px-6 md:py-24">
      <Carousel className="mx-auto w-full max-w-6xl">
        <CarouselContent className="-ml-4">
          {PROJECTS.map((p) => (
            <CarouselItem
              key={p.slug}
              // 1 card mobile, 2 tablet, 3 desktop
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <ProjectItem project={p} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Hide arrows on mobile */}
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
}
