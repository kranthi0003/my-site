import { Card, CardContent } from "@/components/ui/card";
import { User, Heart, Award, Briefcase, Star } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

export default function AboutSection() {
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
        
        {/* Personal Story Timeline */}
        <div className="animate-slide-up mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROFILE_DATA.personalStory.map((story, index) => {
              const IconComponent = iconMap[story.title as keyof typeof iconMap];
              
              return (
                <Card key={index} className={`group h-full bg-white/90 backdrop-blur-sm shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  index % 3 === 0 ? 'animate-slide-in-left' : 
                  index % 3 === 1 ? 'animate-scale-in' : 'animate-slide-in-right'
                }`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-primary" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                        {story.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-grow text-sm">
                      {story.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center animate-fade-in">
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