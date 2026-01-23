import { motion } from "framer-motion";

interface ProductGalleryProps {
  images: { label: string }[];
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="aspect-[4/5] bg-tempo-mist overflow-hidden group cursor-pointer"
        >
          <div className="w-full h-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
            <p className="font-mono text-sm text-foreground/50 text-center px-4">
              {image.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGallery;
