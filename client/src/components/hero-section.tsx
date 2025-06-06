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
            
            {/* Profile Image */}
            <div className="flex justify-center animate-slide-up">
              <div className="relative">
                {/* Elegant Frame Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 p-4">
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
                
                {/* Floating Celestial Elements */}
                <div className="absolute inset-0">
                  {/* Sun - floating in top right */}
                  <div className="absolute top-8 right-8 w-5 h-5 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 rounded-full shadow-lg animate-pulse">
                    <div className="absolute inset-0 rounded-full bg-yellow-300/20 scale-125"></div>
                  </div>
                  
                  {/* Moon - floating in bottom left with gentle drift */}
                  <div className="absolute bottom-8 left-8 w-4 h-4 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-md animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-gray-200 rounded-full opacity-60"></div>
                  </div>
                  
                  {/* Subtle Stars */}
                  <div className="absolute top-16 left-12 w-1 h-1 bg-white rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute bottom-16 right-12 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-24 right-20 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
                </div>
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
