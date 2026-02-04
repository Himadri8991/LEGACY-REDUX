import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Facebook, Instagram, Clock, Truck } from "lucide-react";
import { products } from "@/data/products";
import OrderTypeSelector, { OrderType } from "./contact/OrderTypeSelector";
import WatchSelector, { SelectedWatch } from "./contact/WatchSelector";
import CustomOrderForm from "./contact/CustomOrderForm";
import EnquiryForm from "./contact/EnquiryForm";
import OrderSummary from "./contact/OrderSummary";
import PaymentSection, { PaymentMethod } from "./contact/PaymentSection";
import TrustIndicators from "./contact/TrustIndicators";
import OrderConfirmation from "./contact/OrderConfirmation";

const ContactSection = () => {
  // Form state
  const [orderType, setOrderType] = useState<OrderType>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  
  // Watch order state
  const [selectedWatches, setSelectedWatches] = useState<SelectedWatch[]>([]);
  
  // Custom order state
  const [customDetails, setCustomDetails] = useState({
    strapPreference: "",
    dialPreference: "",
    specialRequest: "",
  });
  
  // Enquiry state
  const [enquiryMessage, setEnquiryMessage] = useState("");
  
  // Payment state
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  
  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate total for watch orders
  const calculateTotal = () => {
    return selectedWatches
      .filter(w => w.productId)
      .reduce((sum, w) => {
        const product = products.find(p => p.id === w.productId);
        if (!product) return sum;
        const price = parseInt(product.price.replace(/[₹,]/g, "")) || 0;
        return sum + price * w.quantity;
      }, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to backend
    console.log({
      orderType,
      name,
      phone,
      email,
      address, 
      selectedWatches,
      customDetails,
      enquiryMessage,
      paymentMethod,
      total: calculateTotal(),
    });
    setIsSubmitted(true);
  };

const handleReset = () => {
  setOrderType(null);
  setName("");
  setPhone("");
  setEmail("");
  setAddress(""); 
  setSelectedWatches([]);
  setCustomDetails({ strapPreference: "", dialPreference: "", specialRequest: "" });
  setEnquiryMessage("");
  setPaymentMethod(null);
  setIsSubmitted(false);
};


  return (
    <section id="contact" className="relative py-24 md:py-32 bg-muted/30">
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
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mt-4 mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Most Legacy Redux products are limited stock. Book your timepiece directly 
            or enquire about customizations.
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Left - Contact Info (narrower) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Location */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-card rounded-lg border border-primary/10 group-hover:border-primary/30 transition-colors">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-base mb-1">Our Location</h3>
                <p className="text-muted-foreground font-sans text-sm">
                  Saltlake, Kolkata, India – 700091
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-card rounded-lg border border-primary/10 group-hover:border-primary/30 transition-colors">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-base mb-1">Email Us</h3>
                <a
                  href="mailto:legacyredux.2025@gmail.com"
                  className="text-muted-foreground font-sans text-sm hover:text-primary transition-colors"
                >
                  legacyredux.2025@gmail.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-card rounded-lg border border-primary/10 group-hover:border-primary/30 transition-colors">
                <Facebook size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-base mb-1">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/175LckbKiT/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground font-sans text-sm hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <Facebook size={14} /> Facebook
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground font-sans text-sm hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <Instagram size={14} /> Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Delivery info cards */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="p-3 bg-card rounded-lg border border-primary/10">
                <Truck size={18} className="text-primary mb-2" />
                <h4 className="font-serif text-xs mb-0.5">Delivery Window</h4>
                <p className="text-[11px] text-muted-foreground font-sans">2–4 weeks delivery</p>
              </div>
              <div className="p-3 bg-card rounded-lg border border-primary/10">
                <Clock size={18} className="text-primary mb-2" />
                <h4 className="font-serif text-xs mb-0.5">Pre-Order Updates</h4>
                <p className="text-[11px] text-muted-foreground font-sans">Via Facebook & Instagram</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Smart Order Form (wider) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-lg border border-primary/10 p-6 md:p-8">
              <AnimatePresence mode="wait">
                {isSubmitted && orderType ? (
                  <OrderConfirmation 
                    key="confirmation"
                    orderType={orderType} 
                    onReset={handleReset} 
                  />
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-serif mb-2">Book Your Timepiece</h3>

                    {/* Order Type Selector */}
                    <OrderTypeSelector 
                      selectedType={orderType} 
                      onSelect={setOrderType} 
                    />

                    {/* Dynamic Content Based on Order Type */}
                    <AnimatePresence mode="wait">
                      {orderType === "watch" && (
                        <motion.div
                          key="watch-form"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-6"
                        >
                          <WatchSelector 
                            selectedWatches={selectedWatches}
                            onUpdate={setSelectedWatches}
                          />
                        </motion.div>
                      )}

                      {orderType === "custom" && (
                        <CustomOrderForm
                          key="custom-form"
                          customDetails={customDetails}
                          onUpdate={setCustomDetails}
                        />
                      )}

                      {orderType === "enquiry" && (
                        <EnquiryForm
                          key="enquiry-form"
                          message={enquiryMessage}
                          onUpdate={setEnquiryMessage}
                        />
                      )}
                    </AnimatePresence>

                    {/* Contact Details (show when type is selected) */}
                    <AnimatePresence>
                      {orderType && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 pt-2"
                        >
                          <div className="h-px bg-primary/10" />
                          
                          <label className="block text-xs text-muted-foreground font-sans uppercase tracking-[0.3em]">
                            Your Details
                          </label>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors"
                                placeholder="Your name"
                                required
                              />
                            </div>
                            <div>
                              <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors"
                                placeholder="+91"
                                required
                              />
                            </div>
                          </div>

                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors"
                            placeholder="your@email.com"
                            required
                          />

                          {/* Address – only for Watch orders */}
                          {orderType === "watch" && (
                            <>
                              <motion.textarea
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                rows={3}
                                className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors resize-none"
                                placeholder="Delivery address"
                                required
                              />
                              <p className="text-[10px] tracking-wide text-muted-foreground font-sans">
                                ** Used only for secure delivery & order updates
                              </p>
                            </>
                          )}

                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Order Summary */}
                    <AnimatePresence>
                      {(orderType === "watch" || orderType === "custom") && (
                        <OrderSummary
                          orderType={orderType}
                          selectedWatches={selectedWatches}
                          customDetails={customDetails}
                        />
                      )}
                    </AnimatePresence>

                    {/* Payment Section (for watch orders with items) */}
                    <AnimatePresence>
                      {orderType === "watch" && calculateTotal() > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <PaymentSection
                            selectedMethod={paymentMethod}
                            onSelect={setPaymentMethod}
                            totalAmount={calculateTotal()}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit for Custom/Enquiry */}
                    {(orderType === "custom" || orderType === "enquiry") && (
                      <motion.button
                        type="submit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="btn-premium w-full py-4 text-sm font-sans tracking-wider text-primary-foreground rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                      >
                        {orderType === "custom" ? "Submit Custom Request" : "Send Enquiry"}
                      </motion.button>
                    )}

                    {/* Trust Indicators */}
                    {orderType && <TrustIndicators />}

                    {/* Response Time */}
                    {orderType && (
                      <p className="text-xs text-center text-muted-foreground font-sans">
                        We'll respond within 24–48 hours
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Timeline Updates */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-serif mb-6 text-center">
              <span className="text-primary">📌</span> Shipping Updates
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <p className="text-sm font-sans text-primary mb-1">Table Clocks</p>
                <p className="text-xs text-muted-foreground">Shipping this week</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <p className="text-sm font-sans text-primary mb-1">Legacy Redux (-1)</p>
                <p className="text-xs text-muted-foreground">Delivery by early January</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <p className="text-sm font-sans text-primary mb-1">Wall Clock 4.0</p>
                <p className="text-xs text-muted-foreground">Coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
