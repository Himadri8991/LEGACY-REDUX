import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Truck, Shield, Clock, Share2 } from "lucide-react";
import { getProductById, products } from "@/data/products";
import ProductImageGallery from "@/components/ProductImageGallery";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductBookingForm from "@/components/product/ProductBookingForm";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

    useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-foreground mb-4">Product Not Found</h1>
          <Link to="/#collections" className="text-primary hover:underline">
            ← Back to Collections
          </Link>
        </div>
      </div>
    );
  }


  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/#collections" className="hover:text-primary transition-colors">
              Collections
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </motion.div>
        </div>

        {/* Product Section */}
        <section className="container mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProductImageGallery
                images={product.images}
                productName={product.name}
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Badge */}
              <span
                className={`inline-block text-xs tracking-wider font-sans px-3 py-1.5 rounded-full ${
                  product.badge === "Bestseller"
                    ? "bg-primary text-primary-foreground"
                    : product.badge === "Premium"
                    ? "bg-secondary text-secondary-foreground"
                    : product.badge === "Upcoming"
                    ? "bg-accent/80 text-accent-foreground"
                    : product.badge === "New"
                    ? "bg-green-600 text-white"
                    : "bg-accent text-accent-foreground"
                }`}
              >
                {product.badge}
              </span>

              {/* Title and Tagline */}
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground italic font-sans">
                  {product.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span
                  className={`text-3xl font-serif ${
                    product.inStock ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground font-sans leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-widest text-primary font-sans">
                  Features
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground font-sans"
                    >
                      <Check
                        size={14}
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-primary/10">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck size={16} className="text-primary" />
                  <span>{product.deliveryInfo}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield size={16} className="text-primary" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} className="text-primary" />
                  <span>1 Year Warranty</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {product.inStock ? (
                  <a
                    href="#booking-form"
                    className="btn-premium flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-sans tracking-wider text-primary-foreground rounded-sm"
                  >
                    Book Now
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 px-8 py-4 text-sm font-sans tracking-wider bg-muted text-muted-foreground rounded-sm cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
                <button className="btn-outline-gold inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-sans tracking-wider rounded-sm">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specifications */}
        <section className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-serif font-semibold mb-8 text-center">
              Specifications
            </h2>
            <div className="bg-card/50 rounded-lg border border-primary/10 overflow-hidden">
              <div className="grid md:grid-cols-2">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex justify-between p-4 ${
                      index % 2 === 0 ? "bg-transparent" : "bg-muted/30"
                    } ${index < product.specifications.length - 2 ? "border-b border-primary/10" : ""}`}
                  >
                    <span className="text-sm text-muted-foreground font-sans">
                      {spec.label}
                    </span>
                    <span className="text-sm font-sans text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Booking Form */}
        {product.inStock && (
          <section id="booking-form" className="container mx-auto px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-2xl font-serif font-semibold mb-2 text-center">
                Book Your {product.name}
              </h2>
              <p className="text-muted-foreground text-center mb-8 font-sans">
                Complete your order with secure payment options.
              </p>

              <div className="bg-card/50 rounded-lg border border-primary/10 p-6 md:p-8">
                <ProductBookingForm product={product} />
              </div>
            </motion.div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="container mx-auto px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-serif font-semibold mb-8 text-center">
                You May Also Like
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedProducts.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/product/${item.id}`}
                      className="group block bg-card rounded-lg overflow-hidden border border-primary/10 hover:border-primary/30 transition-all"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-lg group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.price}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Back to collections */}
        <div className="container mx-auto px-6 py-8 text-center">
          <Link
            to="/#collections"
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wider text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All Collections
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
