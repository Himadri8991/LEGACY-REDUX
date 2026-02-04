import { motion } from "framer-motion";

interface CustomOrderFormProps {
  customDetails: {
    strapPreference: string;
    dialPreference: string;
    specialRequest: string;
  };
  onUpdate: (details: CustomOrderFormProps["customDetails"]) => void;
}

const strapOptions = [
  { value: "", label: "Select strap preference..." },
  { value: "brown-leather", label: "Brown Croc-pattern Leather" },
  { value: "black-leather", label: "Black Croc-pattern Leather" },
  { value: "tan-leather", label: "Tan Vintage Leather" },
  { value: "burgundy-leather", label: "Burgundy Italian Leather" },
  { value: "canvas", label: "Canvas Strap" },
  { value: "custom", label: "Custom (describe below)" },
];

const dialOptions = [
  { value: "", label: "Select dial preference..." },
  { value: "ivory", label: "Ivory / Cream" },
  { value: "white", label: "Classic White" },
  { value: "black", label: "Deep Black" },
  { value: "rose-gold", label: "Rose Gold" },
  { value: "teal", label: "Teal / Emerald" },
  { value: "terracotta", label: "Terracotta" },
  { value: "custom", label: "Custom (describe below)" },
];

const CustomOrderForm = ({ customDetails, onUpdate }: CustomOrderFormProps) => {
  const handleChange = (field: keyof typeof customDetails, value: string) => {
    onUpdate({ ...customDetails, [field]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-5"
    >
      <div className="space-y-2">
        <label className="block text-xs text-muted-foreground font-sans uppercase tracking-[0.3em]">
          Customisation Details
        </label>
        <p className="text-xs text-muted-foreground/70">
          Tell us what you have in mind. We'll review and confirm availability.
        </p>
      </div>

      {/* Strap Preference */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <label className="block text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">
          Strap Preference
        </label>
        <select
          value={customDetails.strapPreference}
          onChange={(e) => handleChange("strapPreference", e.target.value)}
          className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors"
        >
          {strapOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </motion.div>

      {/* Dial Preference */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
      >
        <label className="block text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">
          Dial Preference
        </label>
        <select
          value={customDetails.dialPreference}
          onChange={(e) => handleChange("dialPreference", e.target.value)}
          className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors"
        >
          {dialOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </motion.div>

      {/* Special Request */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label className="block text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">
          Special Request / Notes
        </label>
        <textarea
          rows={4}
          value={customDetails.specialRequest}
          onChange={(e) => handleChange("specialRequest", e.target.value)}
          className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder="Describe your custom requirements — engraving, specific script, art style, size adjustments..."
        />
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-primary/5 border border-primary/10 rounded-lg p-4"
      >
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="text-primary font-medium">Note:</span> Custom orders typically take 4-6 weeks. 
          We'll confirm design details and provide a quote before proceeding with production.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CustomOrderForm;
