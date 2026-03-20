"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import { HeroSection } from "@/components/modules/landing/hero-section";
import { ServicesSection } from "@/components/modules/landing/services-section";
import { StatsSection } from "@/components/modules/landing/stats-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import projects from "@/data/projects.json";

const App = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />

      <section id="projects" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Portfolio
              </h2>
              <p className="text-muted-foreground">
                Une sélection de nos réalisations récentes.
              </p>
            </div>
          </div>

          <Carousel>
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.slug} className="basis-1/3">
                  <Dialog>
                    <form>
                      <DialogTrigger
                        render={
                          <Card className="relative mx-auto w-full max-w-sm pt-0">
                            <Image
                              src={require(
                                `@/assets/projects/${project.slug}/${project.pictures[0]}`,
                              )}
                              alt={project.title}
                              className="aspect-video object-cover"
                            />
                            <CardHeader>
                              <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                          </Card>
                        }
                        nativeButton={false}
                      />
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                          <DialogDescription>
                            {project.description}
                          </DialogDescription>
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </DialogHeader>
                        <Carousel>
                          <CarouselContent>
                            {project.pictures.map((string) => (
                              <CarouselItem key={string}>
                                <Image
                                  src={require(
                                    `@/assets/projects/${project.slug}/${string}`,
                                  )}
                                  alt={project.title}
                                  className="aspect-video object-cover"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                        <DialogFooter>
                          <DialogClose
                            render={<Button variant="outline">Close</Button>}
                          />
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="contact" className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold tracking-tighter mb-8">
              Prêt à donner <br />
              <span className="text-primary">vie à vos idées ?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Que ce soit pour un prototype fonctionnel ou une pièce décorative
              unique, notre atelier est prêt.
            </p>

            <div className="flex items-center gap-4">
              <Mail size={24} />
              <a href="mailto:info@octogone3dprints.com">
                info@octogone3dprints.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
