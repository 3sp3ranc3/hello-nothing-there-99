import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BatchNavbar from "@/components/layout/BatchNavbar";
import MegaFooter from "@/components/layout/MegaFooter";

const collections: Record<string, { 
  title: string; 
  description: string;
  products: { name: string; price: string; href: string; tag?: string }[];
}> = {
  paddles: {
    title: "Complete Paddles Collection",
    description: "Precision-engineered paddles for every play style. From power drives to surgical placement, find your instrument.",
    products: [
      { name: "The Architect", price: "$119.00", href: "/", tag: "Now Available" },
    ],
  },
  accessories: {
    title: "Accessories & Gear",
    description: "Essential gear to complement your game. Protection, performance, and precision in every detail.",
    products: [
      { name: "Paddle Cover", price: "$35.00", href: "#" },
      { name: "Grip Tape (3-Pack)", price: "$15.00", href: "#" },
      { name: "Lead Tape Kit", price: "$12.00", href: "#" },
      { name: "Edge Guard", price: "$18.00", href: "#" },
    ],
  },
  apparel: {
    title: "Apparel",
    description: "Performance apparel engineered for the court. Move freely, stay cool, look sharp.",
    products: [
      { name: "Performance Polo", price: "$65.00", href: "#" },
      { name: "Court Shorts", price: "$55.00", href: "#" },
      { name: "Training Tee", price: "$40.00", href: "#" },
      { name: "Tempo Cap", price: "$28.00", href: "#" },
    ],
  },
};

const CollectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const collection = collections[slug || "paddles"];

  if (!collection) {
    return null;
  }

  return (
    <main className="bg-tempo-bone min-h-screen">
      <BatchNavbar />
      
      <div className="pt-32 pb-24">
        {/* Hero */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-6 text-tempo-carbon"
          >
            {collection.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-tempo-carbon/70 max-w-2xl"
          >
            {collection.description}
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link 
                  to={product.href}
                  className="group block"
                >
                  {/* Product Image Placeholder */}
                  <div className="aspect-[4/5] bg-tempo-carbon/5 mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-tempo-carbon/50 uppercase tracking-widest">
                        {product.name}
                      </span>
                    </div>
                    {product.tag && (
                      <span className="absolute top-4 left-4 text-xs font-medium uppercase tracking-widest 
                                     bg-tempo-carbon text-tempo-bone px-3 py-1 rounded-full">
                        {product.tag}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-tempo-carbon/0 group-hover:bg-tempo-carbon/5 
                                  transition-colors duration-300" />
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-tempo-navy transition-colors text-tempo-carbon">
                        {product.name}
                      </h3>
                      <p className="text-tempo-carbon/60">{product.price}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 
                                         transform translate-x-0 group-hover:translate-x-1
                                         transition-all duration-300 text-tempo-carbon" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <MegaFooter />
    </main>
  );
};

export default CollectionPage;
