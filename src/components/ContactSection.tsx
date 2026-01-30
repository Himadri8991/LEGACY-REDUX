import { motion } from "framer-motion";
import { MapPin, Mail, Facebook, Instagram, Clock, Truck } from "lucide-react";

const ContactSection = () => {
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
            Most Legacy Redux products are limited stock. Advance booking opens via 
            social channels.
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-card rounded-lg border border-primary/10 group-hover:border-primary/30 transition-colors">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">Our Location</h3>
                  <p className="text-muted-foreground font-sans text-sm">
                    Saltlake, Kolkata, India – 700091
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-card rounded-lg border border-primary/10 group-hover:border-primary/30 transition-colors">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">Email Us</h3>
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
                  <Facebook size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">Follow Us</h3>
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
            </div>

            {/* Delivery info cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-card rounded-lg border border-primary/10">
                <Truck size={20} className="text-primary mb-2" />
                <h4 className="font-serif text-sm mb-1">Delivery Window</h4>
                <p className="text-xs text-muted-foreground font-sans">2–4 weeks delivery</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-primary/10">
                <Clock size={20} className="text-primary mb-2" />
                <h4 className="font-serif text-sm mb-1">Pre-Order Updates</h4>
                <p className="text-xs text-muted-foreground font-sans">Via Facebook & Instagram</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form className="bg-card rounded-lg border border-primary/10 p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-serif mb-4">Book Your Timepiece</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">
                  Collection Interest
                </label>
                <select className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors text-foreground">
                  <option value="">Select a collection</option>
                  <option value="legacy-redux">Legacy Redux (-1)</option>
                  <option value="automatic">স্বয়ং — Automatic</option>
                  <option value="table-clock">Heritage Table Clock</option>
                  <option value="odia">ଓଡ଼ିଆ — Odia Heritage</option>
                  <option value="custom">Custom / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="btn-premium w-full py-4 text-sm font-sans tracking-wider text-primary-foreground rounded-sm transition-all duration-300 hover:shadow-lg"
              >
                Send Inquiry
              </button>

              <p className="text-xs text-center text-muted-foreground font-sans">
                We'll respond within 24–48 hours
              </p>
            </form>
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
