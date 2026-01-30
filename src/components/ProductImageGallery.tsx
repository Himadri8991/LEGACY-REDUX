import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  compact?: boolean;
}

const ProductImageGallery = ({
  images,
  productName,
  compact = false,
}: ProductImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (compact) {
    return (
      <>
        <div className="relative group">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={images[currentIndex]}
              alt={`${productName} - ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Expand button */}
          <button
            onClick={() => openLightbox(currentIndex)}
            className="absolute top-2 right-2 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Expand size={16} className="text-foreground" />
          </button>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          {/* Dots indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-4"
                      : "bg-foreground/40 hover:bg-foreground/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <ImageLightbox
          images={images}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          productName={productName}
        />
      </>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer"
          onClick={() => openLightbox(currentIndex)}
        >
          <img
            src={images[currentIndex]}
            alt={`${productName} - Main`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Expand overlay */}
          <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="p-3 rounded-full bg-card/90 backdrop-blur-sm border border-primary/30">
              <Expand size={24} className="text-primary" />
            </div>
          </div>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </motion.div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-primary"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`${productName} - Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <ImageLightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        productName={productName}
      />
    </>
  );
};

export default ProductImageGallery;
