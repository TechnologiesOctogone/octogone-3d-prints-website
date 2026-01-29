'use client';

import {
  Mail,
  Box,
  Layers,
  Settings,
  PenTool,
  Cpu,
  Palette,
  Rocket,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import heroPic from '@/assets/hero.png';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const App = () => {

  const services = {
    conception: [
      { title: "Idéation", icon: <Rocket className="w-5 h-5" />, desc: "De l'idée au concept concret." },
      { title: "Modélisation technique", icon: <PenTool className="w-5 h-5" />, desc: "CAO précise pour fabrication." },
      { title: "Sélection matériaux", icon: <Layers className="w-5 h-5" />, desc: "Optimisation selon l'usage." }
    ],
    impression: [
      { title: "Impression à la demande", icon: <Box className="w-5 h-5" />, desc: "Vos fichiers STL en réalité." },
      { title: "Séries & Catalogues", icon: <Layers className="w-5 h-5" />, desc: "Production de petites séries." },
      { title: "Prototypage", icon: <Settings className="w-5 h-5" />, desc: "Validation rapide de design." },
      { title: "Post-traitement", icon: <Palette className="w-5 h-5" />, desc: "Finition, ponçage et peinture." }
    ],
    conseil: [
      { title: "Formations", icon: <Cpu className="w-5 h-5" />, desc: "Apprenez à maîtriser vos outils." },
      { title: "Design for AM", icon: <Zap className="w-5 h-5" />, desc: "Optimisation spécifique 3D." }
    ]
  };

  const projects = [
    {
      title: "Lanterne de Mariage",
      tags: ["Conception", "Impression", "Finition"],
      img: "https://images.unsplash.com/photo-1518131343132-37887556f081?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Figurine Overwatch",
      tags: ["Résine High-Res", "Catalogue", "Qualité"],
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Support iPad Pro",
      tags: ["Idéation", "Modélisation", "Prototypage"],
      img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <section id="home" className="container mx-auto pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-6" variant="secondary">2 imprimantes en ligne</Badge>
          <h1 className="text-5xl font-bold tracking-tighter mb-6">
            Ouvrez la porte aux personnalisations {" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground to-primary">infinies</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            Octogone 3D Prints™ transforme vos concepts en objets tangibles avec une précision industrielle et une approche artisanale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button render={<Link href="#contact" />} nativeButton={false}>
              Lancer un projet
            </Button>
            <Button variant="secondary" render={<Link href="#services" />} nativeButton={false}>
              Découvrir
            </Button>
          </div>
        </div>
        <Image src={heroPic} alt="3D Printing Preview" className='brightness-80' />
      </section>

      <section id="about">
        <Card className="container mx-auto">
          <CardContent>
            <h2 className="font-bold uppercase tracking-widest mb-4">Notre Vision</h2>
            <p className="text-2xl font-medium leading-tight">
              &quot;La qualité et le contrôle sont la pierre angulaire de notre pratique pour garantir des résultats à la hauteur de vos attentes.&quot;
            </p>
          </CardContent>
          <CardFooter className="flex justify-around">
            <Item variant="muted" className='w-fit'>
              <ItemContent>
                <ItemTitle>23+</ItemTitle>
                <ItemDescription>
                  Projets Livrés
                </ItemDescription>
              </ItemContent>
            </Item>
            <Item variant="muted" className='w-fit'>
              <ItemContent>
                <ItemTitle>5+</ItemTitle>
                <ItemDescription>
                  Années d&apos;Expertise
                </ItemDescription>
              </ItemContent>
            </Item>
          </CardFooter>
        </Card>
      </section >

      <section id="services" className="py-24 container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Expertise Technique</h2>
          <p className="text-muted-foreground">Du design à la production, nous couvrons tout le spectre de la fabrication additive.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([key, items]) => (
            <div key={key}>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{key}</h3>
              <div className="space-y-3">
                {items.map((service, idx) => (
                  <Item variant="outline" key={idx}>
                    <ItemMedia>
                      {service.icon}
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{service.title}</ItemTitle>
                      <ItemDescription>
                        {service.desc}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section >

      <section id="projects" className="py-24 container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Portfolio</h2>
            <p className="text-muted-foreground">Une sélection de nos réalisations récentes.</p>
          </div>
        </div>

        <Carousel>
          <CarouselContent>
            {projects.map((project, idx) => (
              <CarouselItem key={idx} className='basis-1/3'>
                <Card className="relative mx-auto w-full max-w-sm pt-0">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="aspect-video object-cover brightness-60"
                  />
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section id="contact" className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold tracking-tighter mb-8">
              Prêt à donner <br />
              <span className="text-primary">vie à vos idées ?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Que ce soit pour un prototype fonctionnel ou une pièce décorative unique, notre atelier est prêt.
            </p>

            <div className="flex items-center gap-4">
              <Mail size={24} />
              <a href="mailto:info@octogone3dprints.com">info@octogone3dprints.com</a>
            </div>
          </div>

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
                    <Textarea id="message" placeholder="Décrivez votre projet..." required />
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
      </section >
    </>
  );
};

export default App;