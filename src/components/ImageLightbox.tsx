import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const ImageLightbox = ({
  images,
  initialIndex,
  isOpen,
  onClose,
  productName = "Product",
}: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsZoomed(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 text-foreground hover:text-primary hover:border-primary/50 transition-all"
          >
            <X size={24} />
          </button>

          {/* Zoom button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleZoom();
            }}
            className="absolute top-4 right-20 z-10 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 text-foreground hover:text-primary hover:border-primary/50 transition-all"
          >
            {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-10 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 text-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-10 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 text-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Main image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={images[currentIndex]}
              alt={`${productName} - Image ${currentIndex + 1}`}
              className={`max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 ${
                isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={toggleZoom}
              drag={isZoomed}
              dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            />
          </motion.div>

          {/* Image counter and thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 p-2 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                      setIsZoomed(false);
                    }}
                    className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${
                      index === currentIndex
                        ? "border-primary"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
            
            {/* Counter */}
            <span className="text-sm text-muted-foreground font-sans">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
