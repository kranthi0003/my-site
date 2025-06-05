import { useState, useEffect } from "react";

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

    document.addEventListener('click', handleImageClick);
    return () => document.removeEventListener('click', handleImageClick);
  }, []);

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={closeLightbox}
    >
      <div className="relative max-w-4xl max-h-full p-4">
        <img
          src={imageSrc}
          alt="Lightbox image"
          className="max-w-full max-h-full object-contain"
        />
        <button
          className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
          onClick={closeLightbox}
        >
          ×
        </button>
      </div>
    </div>
  );
}
