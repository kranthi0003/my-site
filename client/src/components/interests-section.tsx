import React, { useState } from "react";
import { ChefHat, Trophy, Car, Music, MapPin, Code, Sparkles } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

export default function InterestsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const iconMap = {
    ChefHat,
    Trophy,
    Car,
    Music,
    MapPin,
    Code,
    Sparkles
  };

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50/30 via-amber-50/40 to-red-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-200/15 to-amber-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-red-200/15 to-orange-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-amber-200/10 to-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="text-white" size={24} />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent mb-4">
            Interests & Hobbies
          </h2>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
            Beyond my professional life, I enjoy a variety of activities that keep me balanced and fulfilled
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PROFILE_DATA.interests.map((interest, index) => {
            const IconComponent = iconMap[interest.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={index} 
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden ${
                  hoveredIndex === index ? 'scale-105' : ''
                }`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon with gradient background */}
                  <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${interest.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <IconComponent className="text-white" size={28} />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                      {interest.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {interest.description}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-orange-100 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500" style={{ transitionDelay: '200ms' }}></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500" style={{ transitionDelay: '300ms' }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fun stats section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 rounded-2xl p-6 shadow-lg border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">6+</div>
              <div className="text-sm text-slate-600">Active Interests</div>
            </div>
            <div className="bg-white/70 rounded-2xl p-6 shadow-lg border border-orange-200">
              <div className="text-3xl font-bold text-red-600 mb-2">∞</div>
              <div className="text-sm text-slate-600">Learning Journey</div>
            </div>
            <div className="bg-white/70 rounded-2xl p-6 shadow-lg border border-orange-200">
              <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600">Curiosity Mode</div>
            </div>
            <div className="bg-white/70 rounded-2xl p-6 shadow-lg border border-orange-200">
              <div className="text-3xl font-bold text-orange-700 mb-2">100%</div>
              <div className="text-sm text-slate-600">Passion Level</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
