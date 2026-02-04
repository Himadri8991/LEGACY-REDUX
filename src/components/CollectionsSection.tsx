import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductImageGallery from "./ProductImageGallery";

const CollectionsSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="collections" className="relative py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] text-primary/80 font-sans uppercase">
            Our Timepieces
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mt-4 mb-6">
            The <span className="text-gradient-gold">Collections</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Each piece is a tribute — not a reproduction. Culture, art, and history 
            carefully translated onto the dial.
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Collections grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-card rounded-lg overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`text-xs tracking-wider font-sans px-3 py-1.5 rounded-full ${
                  product.badge === "Bestseller"
                    ? "bg-primary text-primary-foreground"
                    : product.badge === "Premium"
                    ? "bg-secondary text-secondary-foreground"
                    : product.badge === "Upcoming"
                    ? "bg-accent/80 text-accent-foreground"
                    : product.badge === "New"
                    ? "bg-green-600 text-white"
                    : product.badge === "Sale"
                    ? "bg-red-600 text-white"
                    : "bg-accent text-accent-foreground"
                }`}>
                  {product.badge}
                </span>
              </div>

              {/* Image Gallery (compact mode) */}
              <div className="relative">
                <ProductImageGallery
                  images={product.images}
                  productName={product.name}
                  compact
                />
                
                {/* Price badge on hover */}
                <motion.div
                  initial={false}
                  animate={{
                    y: hoveredId === product.id ? 0 : 20,
                    opacity: hoveredId === product.id ? 1 : 0,
                  }}
                  className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-2 z-10"
                >
                  <span className="text-xl font-serif text-primary">{product.price}</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg md:text-xl font-serif mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs text-muted-foreground font-sans mb-3 italic">
                  {product.tagline}
                </p>

                {/* Features list (limited) */}
                <ul className="space-y-1.5 mb-4">
                  {product.features.slice(0, 3).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-muted-foreground font-sans"
                    >
                      <Check size={12} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-primary/10">
                  <span className="text-lg font-serif text-primary">
                    {product.price}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="inline-flex items-center gap-2 text-xs font-sans tracking-wider text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    {product.inStock ? "View Details" : "Learn More"}
                    <ArrowRight
                      size={12}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bengali Heritage Series callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8 max-w-3xl">
            <h3 className="text-xl md:text-2xl font-serif mb-4">
              Bengali Heritage Series
            </h3>
            <p className="text-muted-foreground font-sans mb-4">
              Special editions featuring handwritten scripts inspired by{" "}
              <span className="text-primary">Netaji Subhas Chandra Bose</span>,{" "}
              <span className="text-primary">Rabindranath Tagore</span> (Rabindralipi), and{" "}
              <span className="text-primary">Jamini Roy</span> art-inspired dials.
            </p>
            <p className="text-sm text-muted-foreground/70 italic font-sans">
              Each piece is a tribute — not a reproduction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;
