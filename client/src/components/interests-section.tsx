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
    <section className="py-24 bg-gradient-to-br from-background via-secondary/5 to-accent/5 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Beyond Work
          </h2>
          <div className="w-24 h-1 bg-orange-400"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <div className="space-y-6">
            {PROFILE_DATA.interests.map((interest, index) => (
              <div key={index} className="group flex items-start space-x-6 p-6 rounded-xl bg-white border border-orange-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-orange-200">
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 bg-gradient-to-br ${interest.color} rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300`}>
                    {React.createElement(iconMap[interest.icon as keyof typeof iconMap], {
                      className: "text-white",
                      size: 24
                    })}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-orange-700 transition-colors duration-300">
                    {interest.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    {interest.description}
                  </p>
                  {interest.link && (
                    <a 
                      href={interest.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors duration-300 hover:underline"
                    >
                      {interest.link.text}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Visual Column */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl overflow-hidden relative border border-orange-100 shadow-md">
              {/* Grid pattern */}
              <div className="absolute inset-0">
                <div className="grid grid-cols-3 grid-rows-2 h-full w-full gap-3 p-6">
                  {PROFILE_DATA.interests.map((interest, index) => {
                    const IconComponent = iconMap[interest.icon as keyof typeof iconMap];
                    return (
                      <div 
                        key={index}
                        className="bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-orange-100/50"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <IconComponent 
                          className="text-orange-600" 
                          size={24} 
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Subtle floating elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-orange-200/20 rounded-full blur-lg"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-amber-200/15 rounded-full blur-lg"></div>
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
