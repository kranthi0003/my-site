import React from "react";
import { Heart, Code, Users, MapPin } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

export default function InterestsSection() {
  const iconMap = {
    Heart,
    Code,
    Users,
    MapPin
  };

  return (
    <section className="py-20 tamil-bg-interests paisley-motif">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-18 h-1 rangoli-dots opacity-40"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 relative">
            Interests & Hobbies
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-14 h-1 temple-motif opacity-50"></div>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond my professional life, I enjoy a variety of activities that keep me balanced and fulfilled.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROFILE_DATA.interests.map((interest, index) => {
            const IconComponent = iconMap[interest.icon as keyof typeof iconMap];
            
            return (
              <div key={index} className={`bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl text-center card-hover animate-float ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-primary text-2xl" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{interest.title}</h3>
                <p className="text-muted-foreground text-sm">{interest.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
