import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { PROFILE_DATA } from "@/lib/constants";

export default function HeroSection() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center text-white relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-accent rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Hello, I'm
              <span className="text-white block text-5xl lg:text-7xl font-extrabold">{PROFILE_DATA.name}</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 opacity-90 leading-relaxed max-w-lg lg:max-w-none">
              {PROFILE_DATA.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollTo('about')}
                className="bg-accent text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Learn More About Me
              </Button>
              <Button
                onClick={() => scrollTo('contact')}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                size="lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center animate-slide-up order-1 lg:order-2">
            <div className="relative">
              {/* Profile image with better styling */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600"
                  alt={`${PROFILE_DATA.name} - Professional Portrait`}
                  className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white/20"
                />
                {/* Gradient overlay for better integration */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-primary/20"></div>
              </div>
              
              {/* Floating icon */}
              <div className="absolute -bottom-4 -right-4 bg-accent rounded-full p-4 shadow-lg">
                <Code className="text-primary text-2xl" size={32} />
              </div>
              
              {/* Additional decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-2 -left-8 w-8 h-8 bg-accent/30 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
