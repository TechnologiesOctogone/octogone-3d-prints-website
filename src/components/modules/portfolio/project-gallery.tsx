"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  images: string[];
  title: string;
};

export function ProjectGallery({ images, title }: Props) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((img, i) => (
          <CarouselItem key={i}>
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              {
                <Image
                  src={img}
                  alt={`${title} - view ${i + 1}`}
                  fill
                  className="object-cover"
                />
              }{" "}
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
