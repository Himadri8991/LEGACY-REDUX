import { motion } from "framer-motion";
import { Sparkles, Timer, Palette, Shield } from "lucide-react";
import wallClock from "@/assets/wall-clock.jpg";

const steps = [
  {
    icon: Palette,
    number: "01",
    title: "Cultural Research",
    description:
      "Every design begins with deep research into Indian heritage, scripts, and artistic traditions.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Hand-Processed Dials",
    description:
      "Dials are carefully prepared by hand, ensuring each one carries authentic character and texture.",
  },
  {
    icon: Timer,
    number: "03",
    title: "Multi-Step Curing",
    description:
      "No machine drying. Each layer is naturally cured so ink and form remain true to their source.",
  },
  {
    icon: Shield,
    number: "04",
    title: "Precision Assembly",
    description:
      "Final assembly with Miyota movements, quality-checked to ensure lasting performance.",
  },
];

const CraftsmanshipSection = () => {
  return (
    <section id="craftsmanship" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

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
            The Process
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mt-4 mb-6">
            Our <span className="text-gradient-gold">Craftsmanship</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            We take time so your timepiece lasts. Every Legacy Redux watch goes through 
            a meticulous process that honors tradition.
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative flex gap-6"
              >
                {/* Number */}
                <div className="flex-shrink-0 relative">
                  <span className="text-5xl font-serif text-primary/10 font-bold">
                    {step.number}
                  </span>
                  <step.icon
                    size={24}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary group-hover:scale-110 transition-transform"
                  />
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-lg md:text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative group">
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-32 h-32 border border-primary/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-24 h-24 border border-primary/10 rounded-full"
              />

              {/* Image */}
              <div className="relative overflow-hidden rounded-lg bg-muted z-0">
                <img
                  src={wallClock}
                  alt="Legacy Redux Wall Clock"
                  className="w-full rounded-lg shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Quote badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-8 left-8 right-8 bg-card/95 backdrop-blur-md border border-primary/20 rounded-lg p-6 shadow-xl"
            >
              <p className="text-lg font-serif italic text-center text-foreground/90">
                "অতীতের গর্ব, বর্তমানের নান্দনিকতা"
              </p>
              <p className="text-xs text-muted-foreground text-center mt-2 font-sans tracking-wider">
                — LEGACY REDUX
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
