"use client";

import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import type { Project } from "@/types/landing";
import { Card, CardHeader, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

function ProjectGallery({
  pictures,
  slug,
}: {
  pictures: string[];
  slug: string;
}) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {pictures.map((pic, i) => (
          <CarouselItem key={pic}>
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              {
                <Image
                  src={require(`@/assets/projects/${slug}/${pic}`)}
                  alt={`${slug} ${i + 1}`}
                  fill
                  className="object-cover"
                />
              }
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Hide arrows on mobile, rely on touch swipe */}
      <div className="hidden sm:block">
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </div>
    </Carousel>
  );
}

function ProjectItem({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger className="block w-full text-left">
        <div className="w-full cursor-pointer transition-opacity hover:opacity-80">
          <Card className="overflow-hidden">
            <div className="relative aspect-video w-full">
              <Image
                src={require(
                  `@/assets/projects/${project.slug}/${project.pictures[0]}`,
                )}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg line-clamp-1">
                {project.title}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </DialogTrigger>

      <DialogContent className="w-[95vw] max-w-3xl rounded-lg p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <ProjectGallery pictures={project.pictures} slug={project.slug} />
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsSection() {
  return (
    <section className="w-full px-4 py-16 md:px-6 md:py-24" id="projects">
      <Carousel className="mx-auto w-full max-w-6xl">
        <CarouselContent className="-ml-4">
          {PROJECTS.map((p) => (
            <CarouselItem
              key={p.slug}
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
