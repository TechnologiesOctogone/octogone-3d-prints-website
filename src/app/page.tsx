"use client";

import { Clock, Heart, Mail, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Input } from "@/components/ui/input";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import projects from "@/data/projects.json";
import services from "@/data/services";

const App = () => {
  return (
    <>
      <section
        id="hero"
        className="container mx-auto py-32 grid lg:grid-cols-2 gap-16 items-center px-6"
      >
        <div>
          <Badge className="mb-6" variant="secondary">
            <span className="relative size-2 rounded-full bg-primary before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-primary" />
            2 imprimantes en ligne
          </Badge>
          <h1 className="text-6xl font-bold tracking-tighter mb-6">
            Ouvrez la porte des personnalisations infinies.
          </h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg">
            Bienvenue chez Octogone 3D Prints™. Notre mission est de promouvoir
            la créativité et l'expertise technique à chaque étape de la chaîne
            de valeur. Qualité et contrôle sont la pierre angulaire de notre
            pratique.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button render={<Link href="#contact" />} nativeButton={false}>
              Imprimez
            </Button>
            <Button
              variant="secondary"
              render={<Link href="#services" />}
              nativeButton={false}
            >
              Nos services
            </Button>
          </div>
        </div>

        <Card className="relative w-full max-w-md mx-auto py-0">
          <div
            className="absolute z-0 inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(grey 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <AspectRatio ratio={1 / 1}>
            <Image
              src={require("@/assets/hero.png")}
              alt="3D Printing Preview"
              fill
              className="object-contain"
            />
          </AspectRatio>
        </Card>
      </section>

      <section id="stats" className="py-24 bg-secondary/50">
        <div className="container mx-auto grid grid-cols-3 gap-10">
          {[
            {
              icon: <Trophy className="w-6 h-6 text-primary" />,
              value: `${Math.floor((Date.now() - new Date("2025-06-01").getTime()) / 604800000)}+`,
              label: "Projets réalisés",
            },
            {
              icon: <Clock className="w-6 h-6 text-primary" />,
              value: "5+",
              label: "Années d'expérience",
            },
            {
              icon: <Heart className="w-6 h-6 text-primary" />,
              value: "100%",
              label: "Satisfaction",
            },
          ].map(({ icon, value, label }) => (
            <Card key={label}>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  {icon}
                </div>
                <span className="text-4xl font-bold tracking-tight">
                  {value}
                </span>
                <span className="text-sm font-medium text-muted-foreground mt-1 uppercase tracking-wide">
                  {label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="py-24 container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Expertise Technique
          </h2>
          <p className="text-muted-foreground">
            Du design à la production, nous couvrons tout le spectre de la
            fabrication additive.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([key, items]) => (
            <div key={key}>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">
                {key}
              </h3>
              <div className="space-y-3">
                {items.map((service) => (
                  <Item variant="outline" key={service.title}>
                    <ItemMedia>{service.icon}</ItemMedia>
                    <ItemContent>
                      <ItemTitle>{service.title}</ItemTitle>
                      <ItemDescription>{service.desc}</ItemDescription>
                    </ItemContent>
                  </Item>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

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

          <div className="flex justify-center">
            <Card className="w-full max-w-sm">
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Nom</Label>
                      <Input
                        id="text"
                        type="text"
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jean@example.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre projet..."
                        required
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Envoyer la demande
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
