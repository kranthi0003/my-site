import { useState, useEffect } from "react";
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
    { label: "Background", href: "#background" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    scrollTo(href.slice(1));
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-orange-100/50' 
          : 'bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-lg'
      }`}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 relative overflow-hidden group cursor-pointer ${
              isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } ${
              isScrolled ? 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white shadow-2xl scale-110' : 'bg-gradient-to-br from-cyan-400/80 via-blue-500/80 to-purple-600/80 text-white border-2 border-white/60 shadow-2xl backdrop-blur-md'
            }`}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 font-black tracking-tight text-2xl">KK</div>
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gradient-to-br from-orange-300/30 to-pink-300/30 animate-pulse' : 'bg-gradient-to-br from-cyan-200/20 to-purple-200/20'
              }`}></div>
            </div>
            
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`transition-all duration-400 font-bold relative group px-6 py-3 rounded-2xl border-2 backdrop-blur-md hover:scale-105 transform ${
                    isScrolled 
                      ? 'text-slate-800 hover:text-white bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200/50 hover:from-orange-500 hover:to-pink-500 hover:border-orange-300 shadow-lg hover:shadow-2xl' 
                      : 'text-white/95 hover:text-white bg-gradient-to-r from-white/10 to-white/5 border-white/30 hover:from-cyan-400/20 hover:to-purple-500/20 hover:border-white/60 shadow-xl hover:shadow-2xl'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 rounded-full group-hover:w-8 transition-all duration-400 ${
                    isScrolled ? 'bg-gradient-to-r from-orange-500 to-pink-500' : 'bg-gradient-to-r from-cyan-400 to-purple-500'
                  }`}></span>
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden transition-all duration-400 rounded-2xl border-2 backdrop-blur-md hover:scale-110 transform ${
                isScrolled 
                  ? 'text-slate-800 bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200/50 hover:from-orange-500 hover:to-pink-500 hover:text-white hover:border-orange-300 shadow-lg hover:shadow-2xl' 
                  : 'text-white bg-gradient-to-r from-white/10 to-white/5 border-white/30 hover:from-cyan-400/20 hover:to-purple-500/20 hover:border-white/60 shadow-xl hover:shadow-2xl'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-2xl">
          <div className="h-full overflow-y-auto">
            <div className="flex justify-end p-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white bg-gradient-to-r from-white/20 to-white/10 hover:from-red-500/80 hover:to-pink-500/80 border-2 border-white/30 hover:border-red-300/50 rounded-2xl w-12 h-12 transition-all duration-400 hover:scale-110 shadow-2xl"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="px-6 pb-8">
              <div className="flex flex-col items-center mb-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center font-black text-2xl text-white shadow-2xl mb-4 border-4 border-white/40 relative overflow-hidden group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">KK</div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-200/20 to-purple-200/20 animate-pulse"></div>
                </div>
                <h3 className="text-white font-black text-2xl mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Kranthi Kiran</h3>
                <p className="text-cyan-200 text-base font-semibold">Software Engineer</p>
              </div>
              
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="group text-left text-white font-bold py-5 px-8 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:from-cyan-500/30 hover:to-purple-500/30 border-2 border-white/20 hover:border-cyan-300/50 text-xl transition-all duration-400 hover:scale-105 shadow-xl hover:shadow-2xl backdrop-blur-md relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{item.label}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute top-20 right-12 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-20 left-12 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-8 w-6 h-6 bg-gradient-to-br from-blue-400/40 to-transparent rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/3 right-8 w-8 h-8 bg-gradient-to-br from-indigo-400/35 to-transparent rounded-full opacity-65 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}