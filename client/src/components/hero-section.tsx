import React from "react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { PROFILE_DATA } from "@/lib/constants";
import profilePhoto from "@assets/IMG_20220826_165143_835_1749135163637.jpg";

export default function HeroSection() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="home" className="hero-gradient h-screen text-white relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-16 h-16 bg-accent/30 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-accent/40 rounded-lg rotate-12"></div>
        <div className="absolute top-16 right-20 w-6 h-6 bg-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-16 left-10 w-8 h-8 bg-accent/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="text-center space-y-12 md:space-y-16 animate-fade-in">
          {/* Namaskaram greeting at top */}
          <div className="text-base md:text-lg font-medium opacity-95 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full inline-block" style={{ letterSpacing: '1px' }}>
            నమస్కారం 🙏
          </div>
          
          {/* Name section */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed">
              <span className="block mb-3 text-white font-semibold drop-shadow-lg">Hello, I'm</span>
              <span className="block font-extrabold bg-gradient-to-r from-orange-300 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl">{PROFILE_DATA.name}</span>
            </h1>
            
            {/* Tagline below name */}
            <div className="text-center relative mt-8">
              <p className="text-base md:text-lg font-medium text-white/50 relative z-10 px-4">
                Traveller by heart, Techie by skill
              </p>
            </div>
          </div>

          {/* Profile Image - Smaller */}
          <div className="flex justify-center animate-slide-up">
            <div className="relative">
              {/* Compact Frame Container */}
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 p-2">
                {/* Elegant Multi-Layer Frame */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/20 via-orange-300/15 to-amber-400/20 p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/70 via-white/50 to-white/30 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border border-white/60">
                      <img
                        src={profilePhoto}
                        alt={`${PROFILE_DATA.name} - Professional Portrait`}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center 15%' }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Soft Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300/10 via-transparent to-orange-400/10 scale-110 blur-sm -z-10"></div>
              </div>
              
              {/* Simplified Celestial Elements */}
              <div className="absolute inset-0">
                {/* Sun */}
                <div className="absolute inset-1 animate-spin" style={{ animationDuration: '30s' }}>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full shadow-md shadow-amber-400/40">
                    <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-yellow-200 to-amber-300"></div>
                  </div>
                </div>
                
                {/* Moon */}
                <div className="absolute inset-1 animate-spin" style={{ animationDuration: '15s' }}>
                  <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full shadow-sm shadow-slate-400/30">
                  </div>
                </div>
                
                {/* Stars */}
                <div className="absolute top-16 left-12 w-0.5 h-0.5 bg-white/80 rounded-full animate-pulse opacity-60" style={{ animationDuration: '3s' }}></div>
                <div className="absolute bottom-16 right-12 w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1.5s', animationDuration: '3s' }}></div>
              </div>
            </div>
          </div>

          {/* Buttons - More relaxed spacing */}
          <div className="space-y-6 mt-12">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button
                onClick={() => scrollTo('about')}
                className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 text-sm border-0 overflow-hidden group hover:-translate-y-1"
                size="sm"
              >
                <span className="relative z-10 transition-all duration-300">Peek Into My World 👀</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              <Button
                onClick={() => scrollTo('contact')}
                variant="outline"
                className="relative border-2 border-white/50 text-white bg-white/5 backdrop-blur-md px-8 py-3 rounded-xl font-semibold hover:bg-white/20 hover:border-white hover:shadow-xl hover:shadow-white/25 transition-all duration-500 text-sm group overflow-hidden transform hover:scale-105 hover:-translate-y-1"
                size="sm"
              >
                <span className="relative z-10 transition-all duration-300">Say Hello! 👋</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Compact Scroll indicator */}
        <div className="absolute bottom-4 right-4 animate-bounce">
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
