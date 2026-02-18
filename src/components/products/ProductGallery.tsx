import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ProductGalleryProps {
  images: { src: string; alt: string }[];
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const mainRef = useRef<HTMLDivElement>(null);

  const handleThumbnailHover = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainRef.current) return;
    const rect = mainRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  }, []);

  const handleMainClick = useCallback(() => {
    setIsFullscreen(true);
    setIsZooming(false);
  }, []);

  const handleCloseFullscreen = useCallback(() => {
    setIsFullscreen(false);
  }, []);

  return (
    <>
      {/* Gallery Layout */}
      <div className="flex gap-3 lg:gap-4">
        {/* Thumbnails Column */}
        <div className="flex flex-col gap-2 lg:gap-3 w-16 lg:w-20 shrink-0">
          {images.map((image, index) => (
            <button
              key={index}
              onMouseEnter={() => handleThumbnailHover(index)}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-square overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "ring-2 ring-tempo-carbon ring-offset-1 ring-offset-tempo-bone opacity-100"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div
          ref={mainRef}
          className="flex-1 relative aspect-[4/5] overflow-hidden cursor-zoom-in bg-tempo-mist"
          onMouseEnter={() => setIsZooming(true)}
          onMouseLeave={() => setIsZooming(false)}
          onMouseMove={handleMouseMove}
          onClick={handleMainClick}
        >
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="w-full h-full object-cover transition-transform duration-200 ease-out"
            style={{
              transformOrigin,
              transform: isZooming ? "scale(1.35)" : "scale(1)",
            }}
          />
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center cursor-pointer"
            onClick={handleCloseFullscreen}
          >
            <button
              onClick={handleCloseFullscreen}
              className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(index);
                  }}
                  className={`w-14 h-14 overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? "ring-2 ring-white opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <motion.img
              key={`fs-${activeIndex}`}
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={handleCloseFullscreen}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductGallery;
