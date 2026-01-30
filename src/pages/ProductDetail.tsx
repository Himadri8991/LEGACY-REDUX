import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Truck, Shield, Clock, Share2 } from "lucide-react";
import { getProductById, products } from "@/data/products";
import ProductImageGallery from "@/components/ProductImageGallery";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, []);

  const product = getProductById(id || "");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Booking Inquiry: ${product.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AProduct: ${product.name} (${product.price})%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:legacyredux.2025@gmail.com?subject=${subject}&body=${body}`;
  };

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
                Fill the form below and we'll get back to you within 24 hours.
              </p>

              <form
                onSubmit={handleSubmit}
                className="bg-card/50 rounded-lg border border-primary/10 p-8 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-sans text-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-sm focus:border-primary focus:outline-none transition-colors font-sans"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-sans text-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-sm focus:border-primary focus:outline-none transition-colors font-sans"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-sans text-foreground">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-sm focus:border-primary focus:outline-none transition-colors font-sans"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-sans text-foreground">
                    Additional Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-sm focus:border-primary focus:outline-none transition-colors font-sans resize-none"
                    placeholder="Any special requests or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-premium w-full py-4 text-sm font-sans tracking-wider text-primary-foreground rounded-sm"
                >
                  Submit Booking Request
                </button>
              </form>
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
