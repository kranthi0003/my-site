import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Home, Zap, GraduationCap, Rocket, Lightbulb } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";
import Lightbox from "@/components/lightbox";

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
    "Foundation": Home,
    "Resilience": Zap,
    "Growth": GraduationCap,
    "Professional Journey": Rocket,
    "Life Philosophy": Lightbulb
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-32 left-20 w-16 h-16 bg-accent/10 opacity-20 rounded-full"></div>
        <div className="absolute bottom-32 right-24 w-20 h-20 bg-primary/10 opacity-15 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent/15 opacity-25 rounded-full"></div>
        <div className="absolute top-3/4 right-1/3 w-14 h-14 bg-primary/15 opacity-20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">About Me</h2>
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
                    <div className="relative group mx-2">
                      {/* Smart gradient border system */}
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/40 via-secondary/30 to-accent/40 rounded-xl opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-xl blur-[1px] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      
                      <Card className="relative min-h-[320px] md:h-96 bg-gradient-to-br from-white via-white/98 to-primary/3 backdrop-blur-sm shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] overflow-hidden rounded-xl ring-1 ring-primary/10 hover:ring-primary/20">
                        {/* Smart inner border highlight */}
                        <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-white/80 via-transparent to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        
                        {/* Sophisticated background pattern */}
                        <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                          <div className="absolute top-6 right-6 w-8 h-8 border border-primary/20 rounded-full"></div>
                          <div className="absolute bottom-8 left-8 w-6 h-6 border border-secondary/20 rounded-full"></div>
                          <div className="absolute top-1/3 right-16 w-3 h-3 bg-gradient-to-br from-accent/30 to-transparent rounded-full"></div>
                          <div className="absolute bottom-1/3 left-16 w-4 h-4 bg-gradient-to-br from-primary/25 to-transparent rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/10 rounded-full"></div>
                        </div>
                        
                        {/* Premium shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 opacity-0 group-hover:opacity-100"></div>
                        
                        <CardContent className="relative p-4 md:p-5 h-full flex flex-col justify-between z-10">
                          {/* Header with Enhanced Icon and Title */}
                          <div className="flex items-center mb-3 md:mb-4">
                            <div className="relative mr-3 md:mr-4 flex-shrink-0">
                              {/* Simple icon container */}
                              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center transition-colors duration-300 border border-primary/20">
                                <IconComponent className="text-primary" size={18} />
                              </div>
                              
                              {/* Simple number badge */}
                              <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white">
                                <span className="text-xs font-bold text-white">{index + 1}</span>
                              </div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base md:text-lg font-bold text-primary group-hover:text-primary/90 transition-colors duration-300 line-clamp-2 leading-tight">
                                {story.title}
                              </h3>
                            </div>
                          </div>

                          {/* Story Content - responsive spacing */}
                          <div className="flex-1 flex flex-col justify-center">
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base group-hover:text-gray-900 transition-all duration-500 text-justify">
                              {story.description}
                            </p>
                          </div>

                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {current > 1 && <CarouselPrevious className="-left-4 w-8 h-8 bg-white/95 border-2 border-primary/30 shadow-lg hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 z-10" />}
            {current < count && <CarouselNext className="-right-4 w-8 h-8 bg-white/95 border-2 border-primary/30 shadow-lg hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 z-10" />}
          </Carousel>
          
          {/* Fixed Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {PROFILE_DATA.personalStory.map((_, i) => (
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

        {/* Memory Years Grid */}
        <div className="animate-fade-in mb-16">
          {/* Simple Frame Container with overflow visible for tags */}
          <div className="relative max-w-3xl mx-auto p-3 bg-white rounded-2xl shadow-lg border border-primary/20">
            <div className="grid grid-cols-2 gap-4 relative">
              {PROFILE_DATA.memoryYears.map((memory, index) => {
                // Special positioning for 2024 photo
                const objectPosition = memory.year === "2024" ? "object-[center_55%]" : "object-[center_top]";
                
                return (
                  <div
                    key={memory.year}
                    className="relative overflow-hidden rounded-xl shadow-lg bg-white"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Photo */}
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={memory.photo}
                        alt={`${memory.year} memory`}
                        className={`w-full h-full object-cover ${objectPosition}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
              
              {/* Year Tags positioned at grid corners - outside photos */}
              <div className="absolute -top-3 -left-3 z-40">
                <div className="bg-primary text-white px-2 py-1 rounded-md font-bold text-xs shadow-lg">
                  2022
                </div>
              </div>
              <div className="absolute -top-3 -right-3 z-40">
                <div className="bg-primary text-white px-2 py-1 rounded-md font-bold text-xs shadow-lg">
                  2023
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 z-40">
                <div className="bg-primary text-white px-2 py-1 rounded-md font-bold text-xs shadow-lg">
                  2024
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 z-40">
                <div className="bg-primary text-white px-2 py-1 rounded-md font-bold text-xs shadow-lg">
                  2025
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Personal Details Grid */}
        <div className="animate-fade-in">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              {/* Basics & Lifestyle */}
              <Card className="group relative w-full bg-gradient-to-br from-white via-white to-slate-50/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] rounded-xl overflow-hidden border border-slate-200/60" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(148, 163, 184, 0.1)'}}>
                {/* Subtle border wrapper */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-slate-200/30 via-slate-100/20 to-slate-200/30 rounded-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Card number badge - light but visible */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-slate-300/80 to-slate-400/80 rounded-full flex items-center justify-center shadow-sm border border-white/90 group-hover:scale-110 transition-transform duration-300 z-10">
                  <span className="text-sm font-semibold text-slate-700">1</span>
                </div>
                
                <CardContent className="p-8 relative">
                  <h3 className="text-xl font-bold text-slate-800/90 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-100/90 to-slate-50/70 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-200/50">
                      <svg className="w-5 h-5 text-orange-600/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9H21ZM19 21H5V3H13V9H19V21Z"/>
                      </svg>
                    </div>
                    Basics
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
                      <p className="font-semibold text-gray-900 mt-1">Telugu, Hindi, English</p>
                    </div>
                    
                    <div>
                      <span className="text-muted-foreground text-sm font-medium">Smoking/Drinking</span>
                      <p className="font-semibold text-gray-900">No</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal & Family */}
              <Card className="group relative w-full bg-gradient-to-br from-white via-white/98 to-blue-50/25 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] rounded-xl overflow-hidden border border-blue-100/40">
                {/* Subtle border wrapper */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-200/25 via-blue-100/15 to-blue-200/25 rounded-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Card number badge - light but visible */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-300/70 to-blue-400/70 rounded-full flex items-center justify-center shadow-sm border border-white/90 group-hover:scale-110 transition-transform duration-300 z-10">
                  <span className="text-sm font-semibold text-blue-700">2</span>
                </div>
                
                <CardContent className="p-8 relative">
                  <h3 className="text-xl font-bold text-blue-800/80 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100/90 to-blue-50/70 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-200/50">
                      <svg className="w-5 h-5 text-blue-600/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 4C18.21 4 20 5.79 20 8C20 10.21 18.21 12 16 12C13.79 12 12 10.21 12 8C12 5.79 13.79 4 16 4ZM16 14C20.42 14 24 15.58 24 17.5V20H8V17.5C8 15.58 11.58 14 16 14ZM8 12C10.21 12 12 10.21 12 8C12 5.79 10.21 4 8 4C5.79 4 4 5.79 4 8C4 10.21 5.79 12 8 12ZM8 14C3.58 14 0 15.58 0 17.5V20H6V17.5C6 16.38 6.65 15.37 7.62 14.74C7.1 14.26 6.55 14 8 14Z"/>
                      </svg>
                    </div>
                    Family
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
              <Card className="group relative w-full bg-gradient-to-br from-white via-white/98 to-green-50/25 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] rounded-xl overflow-hidden border border-green-100/40">
                {/* Subtle border wrapper */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-green-200/25 via-green-100/15 to-green-200/25 rounded-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Card number badge - light but visible */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-green-300/70 to-green-400/70 rounded-full flex items-center justify-center shadow-sm border border-white/90 group-hover:scale-110 transition-transform duration-300 z-10">
                  <span className="text-sm font-semibold text-green-700">3</span>
                </div>
                
                <CardContent className="p-8 relative">
                  <h3 className="text-xl font-bold text-green-800/80 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100/90 to-green-50/70 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-green-200/50">
                      <svg className="w-5 h-5 text-green-600/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
                      </svg>
                    </div>
                    Career
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
              <Card className="group relative w-full bg-gradient-to-br from-white via-white/98 to-purple-50/25 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] rounded-xl overflow-hidden border border-purple-100/40">
                {/* Subtle border wrapper */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-200/25 via-purple-100/15 to-purple-200/25 rounded-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Card number badge - light but visible */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-300/70 to-purple-400/70 rounded-full flex items-center justify-center shadow-sm border border-white/90 group-hover:scale-110 transition-transform duration-300 z-10">
                  <span className="text-sm font-semibold text-purple-700">4</span>
                </div>
                
                <CardContent className="p-8 relative">
                  <h3 className="text-xl font-bold text-purple-800/80 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-100/90 to-purple-50/70 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-purple-200/50">
                      <svg className="w-5 h-5 text-purple-600/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                      </svg>
                    </div>
                    Astrology
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
              <Card className="group relative w-full bg-gradient-to-br from-white via-white to-slate-50/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] rounded-xl overflow-hidden border border-slate-200/60 col-span-full" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(148, 163, 184, 0.1)'}}>
                {/* Subtle border wrapper */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-slate-200/30 via-slate-100/20 to-slate-200/30 rounded-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Card number badge - light but visible */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-slate-300/80 to-slate-400/80 rounded-full flex items-center justify-center shadow-sm border border-white/90 group-hover:scale-110 transition-transform duration-300 z-10">
                  <span className="text-sm font-semibold text-slate-700">5</span>
                </div>
                
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold text-slate-800/90 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-100/90 to-slate-50/70 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-200/50">
                      <svg className="w-5 h-5 text-amber-600/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9Z"/>
                      </svg>
                    </div>
                    Income & Assets
                  </h3>
                  
                  {/* Clean Income Section */}
                  <div className="bg-gradient-to-br from-green-50/60 to-emerald-50/40 p-6 rounded-lg border border-green-100/60 mb-6">
                    <h4 className="font-semibold text-green-800 mb-3">Annual Income</h4>
                    <p className="text-2xl font-bold text-green-900">₹30+ LPA</p>
                    <p className="text-sm font-medium text-green-700">₹2L/month</p>
                  </div>

                  {/* Property Portfolio - Clean Design */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-4">Property Portfolio</h4>
                    <div className="grid gap-3">
                      {/* Property 1 */}
                      <div className="bg-gradient-to-br from-purple-50/40 to-violet-50/30 border border-purple-100/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-purple-800 bg-purple-100/60 px-2 py-1 rounded">Plot</span>
                          <span className="text-xs font-medium text-purple-700">Self</span>
                        </div>
                        <h5 className="font-semibold text-purple-900">Vizag</h5>
                        <p className="text-sm font-medium text-purple-700">200 sqyds</p>
                      </div>

                      {/* Property 2 */}
                      <div className="bg-gradient-to-br from-orange-50/40 to-amber-50/30 border border-orange-100/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-orange-800 bg-orange-100/60 px-2 py-1 rounded">Plot</span>
                          <span className="text-xs font-medium text-orange-700">Inherited</span>
                        </div>
                        <h5 className="font-semibold text-orange-900">Vizag</h5>
                        <p className="text-sm font-medium text-orange-700">250 sqyds</p>
                      </div>

                      {/* Property 3 */}
                      <div className="bg-gradient-to-br from-teal-50/40 to-cyan-50/30 border border-teal-100/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-teal-800 bg-teal-100/60 px-2 py-1 rounded">2BHK Flat</span>
                          <span className="text-xs font-medium text-teal-700">Self</span>
                        </div>
                        <h5 className="font-semibold text-teal-900">Vizag</h5>
                        <p className="text-sm font-medium text-teal-700">1,100 sq ft</p>
                      </div>
                    </div>
                  </div>

                  {/* Investment Portfolio */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-4">Investment Portfolio</h4>
                    <div className="space-y-3">
                      {/* Stock Investments */}
                      <div className="bg-gradient-to-br from-rose-50/40 to-pink-50/30 border border-rose-100/50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-semibold text-rose-900">Stock Investments</h5>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-rose-900">₹25 Lakhs</p>
                          </div>
                        </div>
                      </div>

                      {/* FD/PF */}
                      <div className="bg-gradient-to-br from-emerald-50/40 to-green-50/30 border border-emerald-100/50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-semibold text-emerald-900">FD/PF</h5>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-emerald-900">₹15 Lakhs</p>
                          </div>
                        </div>
                      </div>

                      {/* Insurance */}
                      <div className="bg-gradient-to-br from-indigo-50/40 to-blue-50/30 border border-indigo-100/50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-semibold text-indigo-900">Insurance</h5>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-indigo-900">₹1 CR</p>
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


      </div>
      
      <Lightbox />
    </section>
  );
}