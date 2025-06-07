import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Home, Zap, GraduationCap, Rocket, Lightbulb } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

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
        
        {/* Personal Details Grid */}
        <div className="animate-fade-in">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              {/* Basics & Lifestyle */}
              <Card className="group w-full bg-gradient-to-br from-white via-white/95 to-primary/3 backdrop-blur-sm border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-xl overflow-hidden">
                {/* Card number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300 z-10">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                
                <CardContent className="p-8 relative">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-primary/80 rounded-lg"></div>
                    </div>
                    Basics & Lifestyle
                  </h3>
                  <div className="space-y-5 text-base">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Age</span>
                        <p className="font-semibold text-gray-900">25</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Date of Birth</span>
                        <p className="font-semibold text-gray-900">03-Sep-1999</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Height</span>
                        <p className="font-semibold text-gray-900">5' 10" (177cm)</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Weight</span>
                        <p className="font-semibold text-gray-900">75kg</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Work</span>
                        <p className="font-semibold text-gray-900">Software Engineer</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Diet</span>
                        <p className="font-semibold text-gray-900">Non-vegetarian</p>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-muted-foreground text-sm font-medium">Languages</span>
                      <p className="font-semibold text-gray-900 mt-1">Telugu, Hindi, English<br/><span className="text-primary">(learning Tamil)</span></p>
                    </div>
                    
                    <div>
                      <span className="text-muted-foreground text-sm font-medium">Smoking/Drinking</span>
                      <p className="font-semibold text-gray-900">No</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal & Family */}
              <Card className="group w-full bg-gradient-to-br from-white via-white/95 to-secondary/3 backdrop-blur-sm border border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-xl overflow-hidden">
                {/* Card number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300 z-10">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                
                <CardContent className="p-8 relative">
                  <h3 className="text-xl font-bold text-secondary mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <div className="w-5 h-5 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg"></div>
                    </div>
                    Personal & Family
                  </h3>
                  <div className="space-y-5 text-base">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Caste</span>
                        <p className="font-semibold text-gray-900">Patnaik (OC)</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Native</span>
                        <p className="font-semibold text-gray-900">Visakhapatnam</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Siblings</span>
                        <p className="font-semibold text-gray-900">0</p>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                        <div>
                          <span className="text-muted-foreground text-sm font-medium">Father's Occupation</span>
                          <p className="font-semibold text-gray-900">Passed away</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground text-sm font-medium">Mother's Occupation</span>
                          <p className="font-semibold text-gray-900">Homemaker</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education & Career */}
              <Card className="w-full bg-white/80 backdrop-blur-sm border-l-4 border-l-accent shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-accent mb-6 flex items-center">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-accent/20 rounded-full"></div>
                    </div>
                    Education & Career
                  </h3>
                  <div className="space-y-5 text-base">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Qualification</span>
                        <p className="font-semibold text-gray-900">B.Tech (CSE)</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">College</span>
                        <p className="font-semibold text-gray-900">GVPCOE, Vizag</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Year of Passing</span>
                        <p className="font-semibold text-gray-900">2021</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Experience</span>
                        <p className="font-semibold text-gray-900">4+ years</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Salary</span>
                        <p className="font-semibold text-gray-900">₹30+ LPA</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Work Location</span>
                        <p className="font-semibold text-gray-900">Bangalore</p>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Current Company</span>
                        <p className="font-semibold text-gray-900">Couchbase</p>
                      </div>
                      
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Previous Companies</span>
                        <p className="font-semibold text-gray-900">Amazon, Groww</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Astrology Details */}
              <Card className="w-full bg-white/80 backdrop-blur-sm border-l-4 border-l-purple-500 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-purple-600 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-purple-200 rounded-full"></div>
                    </div>
                    Astrology Details
                  </h3>
                  <div className="space-y-5 text-base">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Gothram</span>
                        <p className="font-semibold text-gray-900">Bharadwaja</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Star</span>
                        <p className="font-semibold text-gray-900">Ardra</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Rasi</span>
                        <p className="font-semibold text-gray-900">Mithuna (Gemini)</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">Time of Birth</span>
                        <p className="font-semibold text-gray-900">10:20 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

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