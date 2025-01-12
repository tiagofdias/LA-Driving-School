"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Vehicles = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const carImages = [
    "https://static.vecteezy.com/system/resources/previews/024/568/587/non_2x/closeup-luxury-supercar-on-dark-background-ai-generated-free-photo.JPG",
    "https://img.freepik.com/premium-photo/luxury-car-dark-background-generative-ai_446633-154818.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/luxury-black-car-on-dark-background-gualtiero-boffi.jpg",
    "https://img.freepik.com/premium-photo/luxury-car-dark-background-generative-ai_446633-154641.jpg",
    "https://img.freepik.com/premium-photo/luxury-car-dark-background-generative-ai_446633-154873.jpg",
    "https://img.freepik.com/premium-photo/bmw-car-is-black-background-with-headlights_915071-7539.jpg",
    "https://img.freepik.com/premium-photo/silver-black-big-bike-luxury-motorcycle_63106-8141.jpg",
    "https://img.freepik.com/premium-photo/silver-black-big-bike-luxury-motorcycle_63106-8140.jpg?w=360",
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 3000); // Adjust interval timing as needed

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
            The vehicles you'll be driving with us
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {carImages.map((url, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square items-center justify-center p-6">
                    <img
                      src={url}
                      alt={`Car ${index + 1}`}
                      className="rounded-md object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

