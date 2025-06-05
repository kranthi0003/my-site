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
    <section id="gallery" className="py-20 bg-gradient-to-br from-muted/20 to-white relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROFILE_DATA.galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer card-hover group bg-white"
              onClick={() => openLightbox(image.url)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Expand className="text-white" size={24} />
                  </div>
                </div>
                
                {/* Image caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
              
              {/* Border accent */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300"></div>
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

        {/* Enhanced Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-5xl max-h-full animate-fade-in">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
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
