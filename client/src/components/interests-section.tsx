import React from "react";
import { ChefHat, Trophy, Car, Music, MapPin, Code } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

export default function InterestsSection() {
  const iconMap = {
    ChefHat,
    Trophy,
    Car,
    Music,
    MapPin,
    Code
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-accent/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            What I Love
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Life beyond code
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {PROFILE_DATA.interests.map((interest, index) => {
              const IconComponent = iconMap[interest.icon as keyof typeof iconMap];
              
              return (
                <div 
                  key={index} 
                  className="group text-center"
                >
                  <div className="relative mb-4">
                    <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${interest.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    {interest.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-white p-3 rounded-lg shadow-lg z-10 left-1/2 transform -translate-x-1/2 mt-2 w-48 pointer-events-none">
                    {interest.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Simple tagline */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground italic">
            "Balance is not something you find, it's something you create"
          </p>
        </div>
      </div>
    </section>
  );
}
