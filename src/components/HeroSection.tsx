import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroWatch from "@/assets/hero-watch.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block text-xs tracking-[0.4em] text-primary/80 font-sans uppercase border border-primary/30 px-4 py-2 rounded-full">
                Est. Kolkata, India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold leading-tight mb-6"
            >
              <span className="block text-foreground">Reviving</span>
              <span className="block text-gradient-gold">Timeless</span>
              <span className="block text-foreground">Craftsmanship</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground font-sans font-light max-w-lg mx-auto lg:mx-0 mb-4"
            >
              Watches inspired by heritage, built for the modern era.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base md:text-lg text-primary/70 font-display italic mb-8"
            >
              অতীতের গর্ব, বর্তমানের নান্দনিকতা
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start lg:mb-0 mb-4"
            >
              <a
                href="#collections"
                className="btn-premium group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-sans tracking-wider text-primary-foreground rounded-sm transition-all duration-300"
              >
                Explore Collections
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="btn-outline-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-sans tracking-wider rounded-sm"
              >
                Book Limited Editions
              </a>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Glow effect behind watch */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-2xl" />
              
              {/* Main watch image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={heroWatch}
                  alt="Legacy Redux Heritage Watch"
                  className="w-full max-w-2xl mx-auto mt-20 lg:mt-0 rounded-lg shadow-2xl"
                />
                
                {/* Floating accent */}
                {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-md border border-primary/20 rounded-lg px-4 py-3 shadow-lg"
                >
                  <p className="text-xs text-muted-foreground font-sans">Starting from</p>
                  <p className="text-xl font-serif text-primary">₹2,950</p>
                </motion.div> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-muted-foreground font-sans uppercase">
            Scroll
          </span>
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
