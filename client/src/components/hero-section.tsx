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
      
      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="w-full pt-40 pb-16">
          <div className="text-center space-y-12 animate-fade-in">
            {/* Tamil Greeting and Name */}
            <div className="space-y-8">
              <div className="text-lg md:text-xl font-medium opacity-95 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full inline-block" style={{ fontFamily: 'Noto Sans Tamil, sans-serif', letterSpacing: '1px' }}>
                வணக்கம் (Vanakkam) 🙏
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed">
                <span className="block mb-4 text-white/90">Hello, I'm</span>
                <span className="block text-white font-extrabold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">{PROFILE_DATA.name}</span>
              </h1>
            </div>
            
            {/* Profile Images Grid */}
            <div className="flex justify-center animate-slide-up">
              <div className="relative">
                {/* 2x2 Grid Container */}
                <div className="grid grid-cols-2 gap-3 w-80 h-80 lg:w-96 lg:h-96 p-3">
                  {/* Top Left */}
                  <div className="relative">
                    <img
                      src={profilePhoto}
                      alt={`${PROFILE_DATA.name} - Selfie 1`}
                      className="w-full h-full rounded-2xl object-cover shadow-xl border-2 border-white/20 transform hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: 'center 15%' }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-primary/10"></div>
                  </div>
                  
                  {/* Top Right */}
                  <div className="relative">
                    <img
                      src={profilePhoto}
                      alt={`${PROFILE_DATA.name} - Selfie 2`}
                      className="w-full h-full rounded-2xl object-cover shadow-xl border-2 border-white/20 transform hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: 'center 20%' }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-accent/10"></div>
                  </div>
                  
                  {/* Bottom Left */}
                  <div className="relative">
                    <img
                      src={profilePhoto}
                      alt={`${PROFILE_DATA.name} - Selfie 3`}
                      className="w-full h-full rounded-2xl object-cover shadow-xl border-2 border-white/20 transform hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: 'center 10%' }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-yellow-400/10"></div>
                  </div>
                  
                  {/* Bottom Right */}
                  <div className="relative">
                    <img
                      src={profilePhoto}
                      alt={`${PROFILE_DATA.name} - Selfie 4`}
                      className="w-full h-full rounded-2xl object-cover shadow-xl border-2 border-white/20 transform hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: 'center 25%' }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-white/10"></div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-accent rounded-full p-4 shadow-xl">
                  <Code className="text-primary text-2xl" size={28} />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-2 -left-8 w-8 h-8 bg-accent/30 rounded-full"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-yellow-400/40 rounded-full"></div>
              </div>
            </div>

            {/* Tagline and Buttons - Now below the photo */}
            <div className="space-y-8">
              <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
                {PROFILE_DATA.tagline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
