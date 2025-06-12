import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Background", href: "#background" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    scrollTo(href.slice(1));
    setIsOpen(false);
  };

  return (
    <>
      {/* Development Progress Banner */}
      <div className="fixed top-0 w-full z-[60] bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm">
        <div className="text-center py-1.5 px-4">
          <p className="text-white text-xs md:text-sm font-medium animate-pulse">
            🚧 Site Development in Progress 🚧
          </p>
        </div>
      </div>
      
      <nav className={`fixed top-8 w-full z-50 transition-all duration-500 tamil-script-bg ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-orange-200/40' 
          : 'bg-gradient-to-r from-orange-50/10 via-white/15 to-orange-50/10 backdrop-blur-lg'
      }`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 relative overflow-hidden group hover:scale-105 ${
              isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } ${
              isScrolled ? 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white shadow-2xl hover:shadow-orange-500/30' : 'bg-gradient-to-br from-orange-500/90 via-orange-600/90 to-red-500/90 text-white border-2 border-white/70 shadow-2xl backdrop-blur-md hover:border-white/90'
            }`}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 font-black text-lg tracking-tight drop-shadow-lg">KK</div>
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gradient-to-br from-orange-300/30 to-red-300/30' : 'bg-gradient-to-br from-orange-400/20 to-red-400/20'
              }`}></div>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`transition-all duration-300 font-medium relative group px-5 py-2.5 hover:scale-[1.02] transform ${
                    isScrolled 
                      ? 'text-slate-700 hover:text-orange-600 bg-transparent hover:bg-orange-50/70' 
                      : 'text-white/90 hover:text-white bg-transparent hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10 tracking-wide">{item.label}</span>
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? 'bg-orange-500' : 'bg-white'
                  }`}></span>
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden transition-all duration-400 rounded-2xl backdrop-blur-md hover:scale-110 transform border ${
                isScrolled 
                  ? 'text-slate-800 bg-gradient-to-r from-orange-50/80 to-white/60 border-orange-200/40 hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-orange-400 shadow-lg hover:shadow-xl' 
                  : 'text-white bg-gradient-to-r from-orange-500/80 to-red-500/80 border-white/50 hover:from-orange-600 hover:to-red-600 hover:border-white/70 shadow-2xl hover:shadow-xl'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6 drop-shadow-lg" /> : <Menu className="h-6 w-6 drop-shadow-lg" />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gradient-to-br from-orange-100/96 via-orange-200/96 to-orange-300/96 backdrop-blur-2xl">
          <div className="h-full overflow-y-auto">
            <div className="flex justify-end p-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-slate-800 bg-gradient-to-r from-white/60 to-orange-50/80 hover:from-red-500 hover:to-orange-500 hover:text-white border border-orange-200/50 hover:border-red-400 rounded-2xl w-12 h-12 transition-all duration-400 hover:scale-110 shadow-lg hover:shadow-xl backdrop-blur-md"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="px-6 pb-8">
              <div className="flex flex-col items-center mb-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 flex items-center justify-center font-bold text-2xl text-white shadow-2xl mb-4 border-4 border-white/40 hover:scale-105 transition-transform duration-300 group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-black">KK</span>
                </div>
                <h3 className="text-slate-800 font-black text-xl mb-2">Kranthi Kiran</h3>
                <p className="text-slate-700 text-base font-semibold">Software Engineer</p>
              </div>
              
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="group text-left text-slate-800 hover:text-white font-bold py-5 px-8 rounded-2xl bg-gradient-to-r from-white/60 to-orange-50/80 hover:from-orange-500 hover:to-red-500 border-2 border-orange-200/50 hover:border-orange-400 text-xl transition-all duration-400 hover:scale-105 shadow-lg hover:shadow-2xl backdrop-blur-md relative overflow-hidden"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute top-20 right-8 w-16 h-16 bg-gradient-to-br from-orange-300/20 to-transparent rounded-full opacity-40"></div>
              <div className="absolute bottom-16 left-8 w-8 h-8 bg-gradient-to-br from-red-300/30 to-transparent rounded-full opacity-50"></div>
              <div className="absolute top-1/3 left-6 w-4 h-4 bg-gradient-to-br from-orange-400/40 to-transparent rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}