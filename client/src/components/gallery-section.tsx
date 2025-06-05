import { useState } from "react";
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
    <section id="gallery" className="py-20 bg-gradient-to-r from-muted to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Photo Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into my life, travels, and memorable moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE_DATA.galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer card-hover group"
              onClick={() => openLightbox(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="photo-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Expand className="text-white text-2xl" size={32} />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery image"
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
        )}
      </div>
    </section>
  );
}
