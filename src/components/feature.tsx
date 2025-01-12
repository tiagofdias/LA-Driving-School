import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Feature = () => {
  // Example URLs for background images
  const backgroundImages = [
    "https://img.freepik.com/free-photo/stylish-elegant-couple-car-salon_1157-24282.jpg?semt=ais_hybrid",
    "https://img.freepik.com/free-photo/conference-room-with-televisions-presentations_181624-26085.jpg",
    "https://img.freepik.com/free-photo/conference-hall-empty-seats-row-projection-screen-before-seminar_637285-6721.jpg?semt=ais_hybrid", 
    "https://img.freepik.com/free-photo/people-traveling-by-electric-car_23-2149362846.jpg?semt=ais_hybrid",
  ];

  return (
    <div id="feature" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Classes</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              This is how you'll learn it
              </h2>
              <br></br>
              <p className="text-lg max-w-2xl leading-relaxed tracking-tight text-muted-foreground text-left">
              At our driving school, we combine expert classroom instruction with real-world, hands-on driving practice. 
              Learn the rules of the road in a supportive classroom setting and put them into action alongside our experienced instructors. 
              </p>
              <br></br>
              <br></br>

            </div>
          </div>
          <div className="w-full max-w-full px-6">
            <Carousel>
              <CarouselContent>
                {backgroundImages.map((url, index) => (
                  <CarouselItem key={index}>
                    <div
                      className="flex rounded-md aspect-video items-center justify-center p-6"
                      style={{
                        backgroundImage: `url(${url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gray-800 text-white rounded-full p-2" />
              <CarouselNext className="bg-gray-800 text-white rounded-full p-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
