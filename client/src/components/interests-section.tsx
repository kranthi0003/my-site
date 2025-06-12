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
    <section className="py-24 bg-gradient-to-br from-orange-50/30 via-amber-50/40 to-red-50/30 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent mb-6">
            Beyond Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <div className="space-y-6">
            {PROFILE_DATA.interests.map((interest, index) => (
              <div key={index} className={`group flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-r ${interest.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    {React.createElement(iconMap[interest.icon as keyof typeof iconMap], {
                      className: "text-white drop-shadow-sm",
                      size: 24
                    })}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-sm">
                    {interest.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Column */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-100 via-amber-100 to-red-100 rounded-3xl overflow-hidden relative border-2 border-orange-200/50 shadow-xl">
              {/* Grid pattern */}
              <div className="absolute inset-0">
                <div className="grid grid-cols-3 grid-rows-2 h-full w-full gap-3 p-6">
                  {PROFILE_DATA.interests.map((interest, index) => {
                    const IconComponent = iconMap[interest.icon as keyof typeof iconMap];
                    return (
                      <div 
                        key={index}
                        className={`bg-gradient-to-br ${interest.color} backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-2 border border-white/20`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <IconComponent 
                          className="text-white drop-shadow-md" 
                          size={28} 
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-300/40 to-red-300/40 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-300/20 to-amber-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-24 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-red-500/10 p-8 rounded-2xl border border-orange-200/30 backdrop-blur-sm">
            <p className="text-lg text-orange-800 leading-relaxed font-medium">
              These interests shape who I am beyond my professional identity. They fuel creativity, 
              provide balance, and remind me that the best solutions often come from diverse experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
