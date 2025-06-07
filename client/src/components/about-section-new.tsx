import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Home, Zap, GraduationCap, Rocket, Lightbulb } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";
import PersonalDetailsTabs from "./personal-details-tabs";

export default function AboutSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const storyCards = [
    {
      id: 1,
      icon: <Home className="w-8 h-8 text-orange-600" />,
      title: "Foundation",
      content: "Born and raised in Visakhapatnam, I learned the values of resilience and determination from my family. Growing up as an only child after losing my father early, I developed a strong sense of responsibility and independence that shapes who I am today."
    },
    {
      id: 2,
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Resilience",
      content: "Life taught me that challenges are stepping stones, not roadblocks. Through personal losses and professional growth, I've discovered that genuine strength comes from vulnerability and the courage to keep moving forward with purpose and hope."
    },
    {
      id: 3,
      icon: <GraduationCap className="w-8 h-8 text-orange-600" />,
      title: "Growth",
      content: "My journey through engineering at GVPCOE and career progression from Amazon to Groww to Couchbase has been about more than professional success. Each experience has deepened my understanding of technology, teamwork, and the importance of continuous learning."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the journey that shaped me, the values that guide me, and the dreams that drive me forward.
          </p>
        </div>

        {/* Story Cards Carousel */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">My Journey</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every chapter of my story has contributed to who I am today. Here are the key moments that defined my path.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel 
              setApi={setApi} 
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {storyCards.map((card) => (
                  <CarouselItem key={card.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-orange-300/10 to-orange-200/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-r-full"></div>
                      
                      <CardContent className="p-8 relative z-10 h-full flex flex-col">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                            {card.icon}
                          </div>
                          <h4 className="text-xl font-bold text-primary group-hover:text-orange-600 transition-colors duration-300">
                            {card.title}
                          </h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed flex-1">
                          {card.content}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current - 1
                    ? 'bg-gradient-to-r from-primary to-secondary scale-125 shadow-md' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
        
        <PersonalDetailsTabs />

        {/* Call to Action */}
        <div className="text-center animate-fade-in mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">Building Meaningful Connections</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every step of my journey has shaped who I am today. I believe in authentic relationships built on understanding, respect, and shared values. Let's connect and see where our paths might align.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}