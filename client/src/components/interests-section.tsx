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
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Beyond Work
          </h2>
          <div className="w-24 h-1 bg-orange-500"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <div className="space-y-8">
            {PROFILE_DATA.interests.map((interest, index) => (
              <div key={index} className="group flex items-start space-x-6 p-6 rounded-lg hover:bg-orange-50/50 transition-all duration-300 border border-transparent hover:border-orange-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                    {React.createElement(iconMap[interest.icon as keyof typeof iconMap], {
                      className: "text-slate-600 group-hover:text-orange-600 transition-colors duration-300",
                      size: 20
                    })}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    {interest.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Column */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl overflow-hidden relative">
              {/* Grid pattern */}
              <div className="absolute inset-0">
                <div className="grid grid-cols-3 grid-rows-3 h-full w-full gap-1 p-8">
                  {PROFILE_DATA.interests.map((interest, index) => {
                    const IconComponent = iconMap[interest.icon as keyof typeof iconMap];
                    return (
                      <div 
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <IconComponent 
                          className="text-slate-700" 
                          size={24} 
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-orange-200/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-amber-200/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-24 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              These interests shape who I am beyond my professional identity. They fuel creativity, 
              provide balance, and remind me that the best solutions often come from diverse experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
