import React, { useState, useEffect } from "react";

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const handleImageClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('.photo-item')) {
        const img = target.closest('.photo-item')?.querySelector('img');
        if (img) {
          setImageSrc(img.src);
          setIsOpen(true);
          document.body.style.overflow = 'hidden';
        }
      }
    };

    // Add both click and touch events for better mobile support
    document.addEventListener('click', handleImageClick);
    document.addEventListener('touchend', handleImageClick);
    
    return () => {
      document.removeEventListener('click', handleImageClick);
      document.removeEventListener('touchend', handleImageClick);
    };
  }, []);

  const closeLightbox = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleBackdropClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox(e);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
      onTouchEnd={handleBackdropClick}
    >
      {/* Mobile-optimized container */}
      <div className="relative w-full h-full max-w-5xl max-h-full flex items-center justify-center">
        <img
          src={imageSrc}
          alt="Lightbox image"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
        />
        
        {/* Enhanced close button for mobile */}
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold transition-all duration-200 hover:scale-110 backdrop-blur-sm border-2 border-white/20"
          onClick={closeLightbox}
          onTouchEnd={closeLightbox}
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
  );
}
