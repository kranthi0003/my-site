import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { PROFILE_DATA } from "@/lib/constants";

export default function HeroSection() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="home" className="hero-gradient min-h-screen text-white relative overflow-hidden">
      {/* Tamil-inspired decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-20 w-24 h-24 tamil-ornament rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-accent rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 tamil-ornament rounded-lg rotate-12"></div>
        <div className="absolute top-20 right-20 w-8 h-8 bg-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-10 w-10 h-10 tamil-ornament rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="w-full pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-12 animate-fade-in">
              <div className="space-y-10">
                <div className="text-lg md:text-xl font-medium opacity-95 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full inline-block" style={{ fontFamily: 'Noto Sans Tamil, sans-serif', letterSpacing: '1px' }}>
                  வணக்கம் (Vanakkam) 🙏
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed">
                  <span className="block mb-4 text-white/90">Hello, I'm</span>
                  <span className="block text-white font-extrabold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">{PROFILE_DATA.name}</span>
                </h1>
                <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-10 bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
                  {PROFILE_DATA.tagline}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-12">
                <Button
                  onClick={() => scrollTo('about')}
                  className="bg-accent text-primary px-10 py-5 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                  size="lg"
                >
                  Learn More About Me
                </Button>
                <Button
                  onClick={() => scrollTo('contact')}
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg text-lg"
                  size="lg"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600"
                    alt={`${PROFILE_DATA.name} - Professional Portrait`}
                    className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-primary/20"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-accent rounded-full p-4 shadow-xl">
                  <Code className="text-primary text-2xl" size={28} />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-2 -left-8 w-8 h-8 bg-accent/30 rounded-full"></div>
              </div>
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
