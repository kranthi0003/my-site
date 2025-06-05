import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { PROFILE_DATA } from "@/lib/constants";

export default function HeroSection() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hello, I'm
              <span className="text-accent block">{PROFILE_DATA.name}</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              {PROFILE_DATA.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollTo('about')}
                className="bg-accent text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors"
                size="lg"
              >
                Learn More About Me
              </Button>
              <Button
                onClick={() => scrollTo('contact')}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
                size="lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src={PROFILE_DATA.profileImage}
                alt={`${PROFILE_DATA.name} - Professional Portrait`}
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent rounded-full p-4">
                <Code className="text-primary text-2xl" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
