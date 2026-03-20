"use client";

import Image from "next/image";
import { ProjectGallery } from "@/components/modules/portfolio/project-gallery";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/types/portfolio";

export function ProjectItem({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="cursor-pointer transition-opacity hover:opacity-80">
          <Card className="overflow-hidden">
            <div className="relative aspect-video w-full">
              <Image
                src={`/projects/${project.slug}/${project.pictures[0]}`}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Tighter padding on mobile */}
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">
                {project.title}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </DialogTrigger>

      {/* 95vw ensures it doesn't touch screen edges on mobile */}
      <DialogContent className="w-[95vw] max-w-3xl rounded-lg p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <ProjectGallery images={project.pictures} title={project.title} />
      </DialogContent>
    </Dialog>
  );
}
