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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed top-24 left-0 right-0 bottom-0 bg-gradient-to-b from-orange-200/95 to-orange-300/95 backdrop-blur-xl shadow-2xl border-t border-orange-200/40 z-40 overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
              {/* Profile section in mobile menu */}
              <div className="flex flex-col items-center mb-12">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center font-bold text-2xl text-white shadow-2xl mb-4 border-4 border-white/30">
                  <div className="relative z-10 font-extrabold tracking-tight">KK</div>
                </div>
                <h3 className="text-slate-800 font-bold text-xl mb-2">Kranthi Kiran</h3>
                <p className="text-slate-700 text-sm text-center opacity-80">Software Engineer</p>
              </div>
              
              {/* Navigation items */}
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="group text-left text-slate-800 hover:text-slate-900 transition-all duration-300 font-bold py-6 px-8 rounded-2xl hover:bg-white/30 border-2 border-transparent hover:border-white/50 text-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    {/* Icon placeholder */}
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                    </div>
                    
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                  </button>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-50"></div>
              <div className="absolute bottom-12 left-8 w-8 h-8 bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-40"></div>
              <div className="absolute top-1/3 left-12 w-3 h-3 bg-gradient-to-br from-orange-400/60 to-transparent rounded-full opacity-60"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
