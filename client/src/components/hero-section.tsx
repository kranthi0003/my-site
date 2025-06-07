import React from "react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { PROFILE_DATA } from "@/lib/constants";
import profilePhoto from "@assets/IMG_20220826_165143_835_1749135163637.jpg";

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
      
      {/* Separate Namaskaram greeting positioned higher */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center pt-32 animate-fade-in">
          <div className="text-lg md:text-xl font-medium opacity-95 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full inline-block" style={{ fontFamily: 'Noto Sans Tamil, Noto Sans Telugu, sans-serif', letterSpacing: '1px' }}>
            வணக்கம் (నమస్కారం) 🙏
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="w-full pt-8 pb-16">
          <div className="text-center space-y-12 animate-fade-in">
            {/* Name section */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block mb-2 text-white font-semibold drop-shadow-lg">Hello, I'm</span>
                <span className="block font-extrabold bg-gradient-to-r from-orange-300 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl">{PROFILE_DATA.name}</span>
              </h1>
              
              {/* Tagline below name */}
              <div className="text-center relative mt-4">
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/50 whitespace-nowrap relative z-10 px-4">
                  Traveller by heart, Techie by skill
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center animate-slide-up">
              <div className="relative">
                {/* Elegant Frame Container */}
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 p-4">
                  {/* Elegant Multi-Layer Frame */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/20 via-orange-300/15 to-amber-400/20 p-2">
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
                
                {/* Refined Celestial Elements */}
                <div className="absolute inset-0">
                  {/* Sun and Moon on same line */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
                    {/* Elegant Sun - simplified and cleaner */}
                    <div className="animate-spin" style={{ animationDuration: '30s' }}>
                      <div className="w-4 h-4 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full shadow-md shadow-amber-400/40">
                        <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-yellow-200 to-amber-300"></div>
                        <div className="absolute inset-0 rounded-full bg-amber-200/60 scale-110 animate-pulse" style={{ animationDuration: '4s' }}></div>
                      </div>
                    </div>
                    
                    {/* Refined Moon - cleaner with subtle details */}
                    <div className="animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                      <div className="w-2.5 h-2.5 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full shadow-sm shadow-slate-400/30">
                        <div className="absolute inset-0 rounded-full bg-white/20 scale-110 animate-pulse" style={{ animationDuration: '5s' }}></div>
                        <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-slate-300 rounded-full opacity-40"></div>
                        <div className="absolute bottom-0.5 right-0.5 w-0.25 h-0.25 bg-slate-400 rounded-full opacity-30"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Minimal Twinkling Stars */}
                  <div className="absolute top-20 left-16 w-0.5 h-0.5 bg-white/80 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                  <div className="absolute bottom-24 right-20 w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1.5s', animationDuration: '3s' }}></div>
                  <div className="absolute top-32 right-24 w-0.25 h-0.25 bg-amber-200/80 rounded-full animate-pulse opacity-70" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
                  <div className="absolute bottom-32 left-20 w-0.25 h-0.25 bg-blue-200/60 rounded-full animate-pulse opacity-40" style={{ animationDelay: '4.5s', animationDuration: '3s' }}></div>
                </div>
              </div>
            </div>



            {/* Buttons - Now below the photo */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => scrollTo('about')}
                  className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 text-base border-0 overflow-hidden group hover:-translate-y-1"
                  size="default"
                >
                  <span className="relative z-10 transition-all duration-300">Peek Into My World 👀</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
                <Button
                  onClick={() => scrollTo('contact')}
                  variant="outline"
                  className="relative border-2 border-white/50 text-white bg-white/5 backdrop-blur-md px-8 py-3 rounded-xl font-semibold hover:bg-white/20 hover:border-white hover:shadow-xl hover:shadow-white/25 transition-all duration-500 text-base group overflow-hidden transform hover:scale-105 hover:-translate-y-1"
                  size="default"
                >
                  <span className="relative z-10 transition-all duration-300">Say Hello! 👋</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator - moved to side */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
