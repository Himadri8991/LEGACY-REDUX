import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-primary/10">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif tracking-[0.2em] text-primary mb-4">
              LEGACY REDUX
            </h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-md mb-6">
              A heritage-first Indian watch brand born in Kolkata. We craft timepieces 
              that carry culture on the dial — from Bengali numerals and handwritten 
              scripts to artistic tributes rooted in Indian history.
            </p>
            <p className="text-primary/80 font-display italic text-lg">
              "The Colour of Freedom is Red."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm tracking-wider uppercase mb-4 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Collections", "Craftsmanship", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground font-sans hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-sm tracking-wider uppercase mb-4 text-primary">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:legacyredux.2025@gmail.com"
                  className="text-sm text-muted-foreground font-sans hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={14} /> Email Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/175LckbKiT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground font-sans hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Facebook size={14} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground font-sans hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram size={14} /> Instagram
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-primary/10">
              <p className="text-xs text-muted-foreground font-sans">
                📍 Saltlake, Kolkata, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-sans">
            © {new Date().getFullYear()} Legacy Redux. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/175LckbKiT/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="mailto:legacyredux.2025@gmail.com"
              className="p-2 rounded-full border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Made by credit */}
<div className="flex justify-center pb-8">
  <div className="relative flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#9E8760]/70">
    <span>Made with</span>

    <span className="text-[#B08D57] drop-shadow-[0_0_8px_rgba(176,141,87,0.35)]">
      ♥
    </span>

    <span>by</span>

    <a
      href="https://dualstack.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative font-semibold tracking-[0.35em]
        text-[#9E8760]
        transition-all duration-500
        hover:text-[#C48A7A]

        before:absolute before:inset-0
        before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)]
        before:opacity-0
        before:animate-[shimmer_3.5s_infinite]
        hover:before:opacity-100

        after:absolute after:left-1/2 after:-translate-x-1/2
        after:-bottom-2
        after:h-px after:w-0
        after:bg-gradient-to-r after:from-transparent after:via-[#C48A7A] after:to-transparent
        after:transition-all after:duration-500
        hover:after:w-full
      "
    >
      DualStack
    </a>
  </div>
</div>


      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
};

export default Footer;
