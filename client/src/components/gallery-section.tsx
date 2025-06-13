import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { PROFILE_DATA } from '@/lib/constants';

interface GallerySectionProps {}

export default function GallerySection({}: GallerySectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PROFILE_DATA.galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? PROFILE_DATA.galleryImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-scroll thumbnails to keep current one visible
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const thumbnailWidth = 64 + 12; // w-16 (64px) + gap-3 (12px)
      const scrollPosition = currentSlide * thumbnailWidth;
      const containerWidth = container.clientWidth;
      const maxScroll = container.scrollWidth - containerWidth;
      
      // Calculate optimal scroll position to center the current thumbnail
      const targetScroll = Math.max(0, Math.min(maxScroll, scrollPosition - containerWidth / 2 + thumbnailWidth / 2));
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Background Elements matching other sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-32 left-20 w-16 h-16 bg-accent/10 opacity-20 rounded-full"></div>
        <div className="absolute bottom-32 right-24 w-20 h-20 bg-primary/10 opacity-15 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent/15 opacity-25 rounded-full"></div>
        <div className="absolute top-3/4 right-1/3 w-14 h-14 bg-primary/15 opacity-20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Photo Gallery</h2>
        </div>

        {/* Gallery Container matching theme - Fixed height structure */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="relative group min-h-0">
            {/* Subtle border wrapper */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/40 via-secondary/30 to-accent/40 rounded-xl opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-xl blur-[1px] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
            
            <div className="relative bg-gradient-to-br from-white via-white/98 to-primary/3 backdrop-blur-sm shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 rounded-xl ring-1 ring-primary/10 hover:ring-primary/20 flex flex-col">
              {/* Inner border highlight */}
              <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-white/80 via-transparent to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-6 right-6 w-8 h-8 border border-primary/20 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 border border-secondary/20 rounded-full"></div>
                <div className="absolute top-1/3 right-16 w-3 h-3 bg-gradient-to-br from-accent/30 to-transparent rounded-full"></div>
                <div className="absolute bottom-1/3 left-16 w-4 h-4 bg-gradient-to-br from-primary/25 to-transparent rounded-full"></div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
            
              {/* Main Slide Container - Fixed height */}
              <div className="relative bg-gradient-to-br from-white/80 via-primary/5 to-accent/5 backdrop-blur-sm p-3 flex-shrink-0">
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                  <img
                    src={PROFILE_DATA.galleryImages[currentSlide].url}
                    alt={PROFILE_DATA.galleryImages[currentSlide].alt}
                    className="w-full h-full object-contain transition-all duration-500 ease-in-out rounded-lg"
                  />
                  
                  {/* Navigation Arrows - lighter */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white text-primary/70 hover:text-primary rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md border border-primary/20"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white text-primary/70 hover:text-primary rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md border border-primary/20"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Expand Button - lighter */}
                  <button
                    onClick={() => openLightbox(PROFILE_DATA.galleryImages[currentSlide].url)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white text-accent/70 hover:text-accent rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md border border-accent/20"
                    aria-label="Expand image"
                  >
                    <Expand size={16} />
                  </button>
                  
                  {/* Slide Counter - lighter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-md border border-primary/20">
                    {currentSlide + 1} / {PROFILE_DATA.galleryImages.length}
                  </div>
                </div>
              </div>
            
              {/* Thumbnail Navigation - Always visible */}
              <div className="p-6 bg-gradient-to-r from-white via-primary/2 to-white flex-shrink-0">
                <div ref={thumbnailContainerRef} className="flex gap-3 overflow-x-auto pb-2">
                  {PROFILE_DATA.galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentSlide 
                          ? 'border-primary scale-110 shadow-xl ring-2 ring-primary/30' 
                          : 'border-gray-300 hover:border-primary/60 hover:scale-105'
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile-Friendly Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
          onClick={closeLightbox}
          onTouchEnd={closeLightbox}
        >
          <div className="relative w-full h-full max-w-5xl max-h-full flex items-center justify-center animate-fade-in">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 w-14 h-14 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center text-3xl font-bold transition-all duration-200 hover:scale-110 backdrop-blur-md border-2 border-white/30 z-50 shadow-lg"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              type="button"
            >
              ×
            </button>
            
            {/* Mobile tap instruction */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm sm:hidden">
              Tap anywhere to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
}