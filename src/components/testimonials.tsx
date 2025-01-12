"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div id="testimonials" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by people worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {[
                {
                  title: "Life-changing experience",
                  text: "Learning to drive here gave me the confidence I needed to hit the road and explore the world with freedom.",
                  author: "John Doe",
                  avatar: "https://i.pravatar.cc/150?img=12",
                  fallback: "MJD",
                  backgroundImage:
                    "https://t3.ftcdn.net/jpg/05/84/81/32/360_F_584813294_cMWq5FAJDHKFCyjIwB3SYFPTumvuUARK.jpg",
                },
                {
                  title: "Building confidence",
                  text: "I finally feel at home on the road, thanks to the incredible guidance I received here.",
                  author: "Maria Garcia",
                  avatar: "https://i.pravatar.cc/150?img=5",
                  fallback: "MG",
                  backgroundImage:
                    "https://img.freepik.com/premium-photo/black-sports-car-dark-background_438099-26786.jpg",
                },
                {
                  title: "Best decision",
                  text: "They taught me to drive safely and confidently.",
                  author: "Pedro Santos",
                  avatar: "https://i.redd.it/j6vt2gglzszb1.jpg",
                  fallback: "PS",
                  backgroundImage:
                    "https://t3.ftcdn.net/jpg/04/85/94/02/360_F_485940219_vemGDyRZMidx9oACruSPO2dAPmO65sEN.jpg",
                },

                {
                  title: "5 Stars",
                  text: "Their patience made all the difference for me.",
                  author: "Jessica Sun",
                  avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                  fallback: "JD",
                  backgroundImage:
                    "https://img.freepik.com/premium-photo/black-sport-car-dark-background-3d-render_68747-40.jpg?semt=ais_hybrid",
                },
              ].map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div
                    className="rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col bg-cover bg-center text-white"
                    style={{
                      backgroundImage: `url(${testimonial.backgroundImage})`,
                    }}
                  >
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight text-left">
                          {testimonial.title}
                        </h3>
                        <p className="max-w-xs text-base text-left">
                          {testimonial.text}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span>By</span>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>
                            {testimonial.fallback}
                          </AvatarFallback>
                        </Avatar>
                        <span>{testimonial.author}</span>
                      </p>
                    </div>
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
