import { motion } from "framer-motion";
import { MapPin, Clock, Award, Heart } from "lucide-react";
import watchBengali from "@/assets/watch-bengali.jpg";

const features = [
  {
    icon: Clock,
    title: "Heritage First",
    description: "Bengali numerals and scripts on every dial",
  },
  {
    icon: Award,
    title: "Hand-Crafted",
    description: "Multi-step curing, no machine drying",
  },
  {
    icon: Heart,
    title: "Cultural Tribute",
    description: "Art and history woven into design",
  },
  {
    icon: MapPin,
    title: "Made in Kolkata",
    description: "Proudly crafted in Saltlake, India",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] text-primary/80 font-sans uppercase">
            Our Story
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mt-4 mb-6">
            About <span className="text-gradient-gold">Legacy Redux</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              {/* Frame decoration */}
              <div className="absolute -inset-4 border border-primary/20 rounded-lg" />
              <div className="absolute -inset-8 border border-primary/10 rounded-lg" />
              
              <img
                src={watchBengali}
                alt="Legacy Redux Bengali Watch"
                className="w-full rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card border border-primary/30 rounded-lg p-4 shadow-xl"
              >
                <p className="text-3xl font-serif text-primary">২০২৫</p>
                <p className="text-xs text-muted-foreground font-sans">Since 2025</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-serif leading-relaxed">
              Time should speak <span className="text-primary">your language.</span>
            </h3>

            <p className="text-muted-foreground font-sans leading-relaxed">
              Legacy Redux began with a simple idea: time should speak your language. 
              From reviving Bengali numerals on wristwatches to translating handwritten 
              letters, art, and history onto dials, every Legacy Redux watch is built 
              with care, patience, and respect for heritage.
            </p>

            <p className="text-muted-foreground font-sans leading-relaxed">
              We don't rush production. Each dial goes through multiple stages, 
              handcrafted and carefully cured so that ink, texture, and form remain 
              true to their source. Our watches are not mass-produced statements — 
              they are <span className="text-primary italic">wearable legacies</span>.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
              <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="group p-4 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <feature.icon
                    size={24}
                    className="text-primary mb-2 group-hover:scale-110 transition-transform"
                  />
                  <h4 className="font-serif text-sm font-medium mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-sans">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
