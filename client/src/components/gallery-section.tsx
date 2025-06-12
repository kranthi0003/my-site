import React, { useState } from "react";
import { Expand, ChevronLeft, ChevronRight } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

interface GallerySectionProps {}

export default function GallerySection({}: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PROFILE_DATA.galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PROFILE_DATA.galleryImages.length) % PROFILE_DATA.galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="pt-24 pb-20 tamil-bg-gallery rangoli-dots relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 rangoli-dots opacity-30"></div>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6 temple-motif">
            <Expand className="text-secondary" size={24} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 relative">
            Photo Gallery
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 kolam-pattern opacity-40"></div>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A glimpse into my life, travels, and memorable moments that define who I am.
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
            {/* Main Slide */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={PROFILE_DATA.galleryImages[currentSlide].url}
                alt={PROFILE_DATA.galleryImages[currentSlide].alt}
                className="w-full h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-105 bg-gray-50"
                onClick={() => openLightbox(PROFILE_DATA.galleryImages[currentSlide].url)}
              />
              
              {/* Overlay with expand icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                   onClick={() => openLightbox(PROFILE_DATA.galleryImages[currentSlide].url)}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:scale-110 transition-transform duration-200">
                    <Expand className="text-white drop-shadow-lg" size={24} />
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentSlide + 1} / {PROFILE_DATA.galleryImages.length}
              </div>
            </div>
            
            {/* Caption */}
            <div className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-primary mb-2">
                {PROFILE_DATA.galleryImages[currentSlide].alt}
              </h3>
              
              {/* Thumbnail Navigation */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {PROFILE_DATA.galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentSlide 
                        ? 'border-accent shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-accent/50 hover:scale-105'
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
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold transition-all duration-200 hover:scale-110 backdrop-blur-sm border-2 border-white/20"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  closeLightbox();
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  closeLightbox();
                }}
                aria-label="Close lightbox"
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
      </div>
    </section>
  );
}
