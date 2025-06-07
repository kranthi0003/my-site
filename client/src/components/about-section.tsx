import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { User, Heart, Award, Briefcase, Star } from "lucide-react";
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

  const iconMap = {
    "Early Life & Foundation": User,
    "Resilience & Growth": Heart,
    "Academic Excellence": Award,
    "Professional Journey": Briefcase,
    "Life Philosophy": Star
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">My Story</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {PROFILE_DATA.aboutDescription}
          </p>
        </div>
        
        {/* Personal Story Carousel */}
        <div className="animate-slide-up mb-16">
          <Carousel 
            setApi={setApi}
            className="w-full max-w-4xl mx-auto" 
            opts={{ align: "start", loop: false }}
          >
            <CarouselContent>
              {PROFILE_DATA.personalStory.map((story, index) => {
                const IconComponent = iconMap[story.title as keyof typeof iconMap];
                
                return (
                  <CarouselItem key={index} className="basis-full">
                    <Card className="group h-full bg-white/90 backdrop-blur-sm shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-500 hover:scale-105 mx-2 relative overflow-hidden">
                      {/* Animated background elements */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 right-4 w-6 h-6 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                        <div className="absolute bottom-6 left-6 w-4 h-4 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                        <div className="absolute top-1/2 right-8 w-2 h-2 bg-accent/50 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
                      </div>
                      
                      <CardContent className="p-6 h-full flex flex-col justify-between">
                        {/* Header with Icon and Title */}
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float">
                            <IconComponent className="text-primary" size={20} />
                          </div>
                          <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors flex-1">
                            {story.title}
                          </h3>
                        </div>

                        {/* Story Content */}
                        <div className="flex-grow mb-4">
                          <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                            {story.description}
                          </p>
                        </div>
                        
                        {/* Footer - Fixed positioning */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                              <span className="text-xs font-bold text-primary">{index + 1}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              Chapter {index + 1} of {PROFILE_DATA.personalStory.length}
                            </span>
                          </div>
                          <div className="flex space-x-1">
                            {PROFILE_DATA.personalStory.map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  i === index 
                                    ? 'bg-primary scale-125 animate-pulse' 
                                    : 'bg-gray-300'
                                }`}
                                style={{ animationDelay: `${i * 100}ms` }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      
                      {/* Animated border on hover */}
                      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {current > 1 && <CarouselPrevious className="left-4" />}
            {current < count && <CarouselNext className="right-4" />}
          </Carousel>
        </div>
        
        {/* Personal Details Grid */}
        <div className="animate-fade-in">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              {/* Basics & Lifestyle */}
              <Card className="w-full bg-white/80 backdrop-blur-sm border-l-4 border-l-primary shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-primary/20 rounded-full"></div>
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
              <Card className="w-full bg-white/80 backdrop-blur-sm border-l-4 border-l-secondary shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-secondary mb-6 flex items-center">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-secondary/20 rounded-full"></div>
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

              {/* Property & Assets Details */}
              <Card className="w-full bg-white/80 backdrop-blur-sm border-l-4 border-l-green-500 shadow-lg col-span-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-green-200 rounded-full"></div>
                    </div>
                    Assets & Income
                  </h3>
                  
                  {/* Financial Summary */}
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Salary</h4>
                      <p className="text-2xl font-bold text-green-600">₹30+ LPA</p>
                      <p className="text-sm text-green-600">₹2L/month</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Property Count</h4>
                      <p className="text-2xl font-bold text-purple-600">3 Units</p>
                      <p className="text-sm text-purple-600">2 Residential plots + 2BHK flat</p>
                    </div>
                  </div>

                  {/* Property Details Cards */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-6">Property Portfolio</h4>
                    <div className="space-y-4">
                      {/* Property 1 */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Plot</span>
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Self</span>
                            </div>
                            <h5 className="font-semibold text-gray-900 text-lg">Tagarapuvalasa, Vizag</h5>
                            <p className="text-gray-600">200 Square Yards</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-green-600">₹40 Lakhs</p>
                          </div>
                        </div>
                      </div>

                      {/* Property 2 */}
                      <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-lg p-5">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Plot</span>
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Inherited</span>
                            </div>
                            <h5 className="font-semibold text-gray-900 text-lg">Simhachalam, Vizag</h5>
                            <p className="text-gray-600">250 Square Yards</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-blue-600">₹50 Lakhs</p>
                          </div>
                        </div>
                      </div>

                      {/* Property 3 */}
                      <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-5">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">2BHK Flat</span>
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Self</span>
                            </div>
                            <h5 className="font-semibold text-gray-900 text-lg">PMPalem, Vizag</h5>
                            <p className="text-gray-600">1,100 Square Feet</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-purple-600">₹45 Lakhs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Investment Portfolio */}
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-700 mb-6">Investment Portfolio</h4>
                    <div className="space-y-4">
                      {/* Stock Investments */}
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-semibold text-orange-800 text-lg">Stock Investments</h5>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-orange-600">₹25 Lakhs</p>
                          </div>
                        </div>
                      </div>

                      {/* Fixed Deposits */}
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-semibold text-emerald-800 text-lg">Fixed Deposits</h5>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-emerald-600">₹15 Lakhs</p>
                          </div>
                        </div>
                      </div>

                      {/* Provident Fund */}
                      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-semibold text-cyan-800 text-lg">Provident Fund</h5>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-cyan-600">₹8 Lakhs</p>
                          </div>
                        </div>
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