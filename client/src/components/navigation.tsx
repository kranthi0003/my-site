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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-border/20' 
          : 'bg-white/10 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 relative overflow-hidden ${
              isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } ${
              isScrolled ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-xl' : 'bg-gradient-to-br from-white/30 to-white/10 text-white border-2 border-white/40 shadow-lg backdrop-blur-sm'
            }`}>
              <div className="relative z-10 font-extrabold tracking-tight">KK</div>
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gradient-to-br from-orange-400/20 to-red-400/20' : 'bg-gradient-to-br from-white/10 to-transparent'
              }`}></div>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`transition-all duration-300 font-semibold relative group px-4 py-2 rounded-full ${
                    isScrolled 
                      ? 'text-slate-700 hover:text-orange-600 hover:bg-orange-100/20' 
                      : 'text-white/90 hover:text-accent hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-6 transition-all duration-300 ${
                    isScrolled ? 'bg-orange-600' : 'bg-accent'
                  }`}></span>
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden transition-colors duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:bg-slate-100/20' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gradient-to-b from-orange-200/95 to-orange-300/95 backdrop-blur-xl">
          <div className="h-full overflow-y-auto">
            <div className="flex justify-end p-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-slate-700 hover:bg-white/20 rounded-full w-10 h-10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="px-6 pb-8">
              <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center font-bold text-xl text-white shadow-xl mb-3">
                  KK
                </div>
                <h3 className="text-slate-800 font-bold text-lg">Kranthi Kiran</h3>
                <p className="text-slate-700 text-sm">Software Engineer</p>
              </div>
              
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-slate-800 hover:text-slate-900 font-semibold py-4 px-6 rounded-xl hover:bg-white/20 border border-white/20 hover:border-white/40 text-lg transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}