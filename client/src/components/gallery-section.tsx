import { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { PROFILE_DATA } from '@/lib/constants';

interface GallerySectionProps {}

export default function GallerySection({}: GallerySectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/10 to-accent/10 relative overflow-hidden">
      {/* Simple Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-muted-foreground">
            Family & Friends
          </p>
        </div>

        {/* Enhanced Vibrant Slideshow Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden animate-fade-in p-1.5"
               style={{ 
                 background: 'linear-gradient(45deg, #fb923c, #f59e0b, #dc2626, #ea580c, #fb923c)',
                 boxShadow: '0 25px 50px -12px rgba(251, 146, 60, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
               }}>
            <div className="relative bg-gradient-to-br from-white via-orange-50/40 to-amber-50 rounded-xl overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, #ffffff, rgba(255,237,213,0.4), #fef3c7)',
                   boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(251, 146, 60, 0.1)'
                 }}>
              
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-orange-200/40 to-amber-200/40 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
                <div className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-red-200/40 to-orange-200/40 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
                <div className="absolute top-1/3 right-12 w-12 h-12 bg-gradient-to-br from-amber-200/40 to-yellow-200/40 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute bottom-1/3 left-8 w-8 h-8 bg-gradient-to-br from-orange-300/40 to-red-300/40 rounded-full animate-pulse" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
                
                {/* Floating Kolam-inspired patterns */}
                <div className="absolute top-8 right-20 w-6 h-6 opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-400 rounded-sm transform rotate-45"></div>
                </div>
                <div className="absolute bottom-12 left-16 w-4 h-4 opacity-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
                  <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-400 rounded-sm transform rotate-45"></div>
                </div>
              </div>
            
              {/* Main Slide */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/80 via-orange-50/50 to-amber-50/80 backdrop-blur-sm">
                <img
                  src={PROFILE_DATA.galleryImages[currentSlide].url}
                  alt={PROFILE_DATA.galleryImages[currentSlide].alt}
                  className="w-full h-full object-contain transition-all duration-500 ease-in-out"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Expand Button */}
                <button
                  onClick={() => openLightbox(PROFILE_DATA.galleryImages[currentSlide].url)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                  aria-label="Expand image"
                >
                  <Expand size={18} />
                </button>
                
                {/* Slide Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {currentSlide + 1} / {PROFILE_DATA.galleryImages.length}
                </div>
              </div>
            
              {/* Thumbnail Navigation */}
              <div className="p-6 bg-white">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {PROFILE_DATA.galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-3 transition-all duration-300 ${
                        index === currentSlide 
                          ? 'border-orange-500 scale-110 shadow-xl ring-2 ring-orange-300 ring-opacity-50' 
                          : 'border-gray-300 hover:border-orange-300 hover:scale-105'
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