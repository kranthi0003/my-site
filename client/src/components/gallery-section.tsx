import React, { useState } from "react";
import { Expand } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

interface GallerySectionProps {}

export default function GallerySection({}: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="pt-24 pb-20 tamil-bg-gallery relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
            <Expand className="text-secondary" size={24} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Photo Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A glimpse into my life, travels, and memorable moments that define who I am.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {PROFILE_DATA.galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-xl cursor-pointer card-hover group bg-white photo-item touch-manipulation active:scale-[0.98] ${
                index % 3 === 0 ? 'animate-slide-in-left' : 
                index % 3 === 1 ? 'animate-scale-in' : 'animate-slide-in-right'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image.url)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.alt} in full size`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-active:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Enhanced overlay for mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 sm:opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/30 sm:bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 scale-90 sm:scale-100 group-hover:scale-110 group-active:scale-125 transition-transform duration-200">
                    <Expand className="text-white drop-shadow-lg" size={20} />
                  </div>
                </div>
                
                {/* Image caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium drop-shadow-lg">{image.alt}</p>
                </div>
              </div>
              
              {/* Border accent and mobile tap feedback */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300"></div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-active:opacity-100 transition-opacity duration-100 rounded-2xl sm:hidden"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-semibold text-primary mb-4">Creating Memories Together</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              These moments capture the essence of my journey so far. I look forward to creating many more beautiful memories with the right person by my side.
            </p>
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
