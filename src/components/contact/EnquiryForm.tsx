import { motion } from "framer-motion";

interface EnquiryFormProps {
  message: string;
  onUpdate: (message: string) => void;
}

const EnquiryForm = ({ message, onUpdate }: EnquiryFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <label className="block text-xs text-muted-foreground font-sans uppercase tracking-[0.3em]">
        Your Message
      </label>
      <textarea
        rows={5}
        value={message}
        onChange={(e) => onUpdate(e.target.value)}
        className="w-full bg-background border border-primary/20 rounded-sm px-4 py-3 text-sm font-sans focus:border-primary focus:outline-none transition-colors resize-none"
        placeholder="How can we help you? Ask about availability, shipping, warranty, or anything else..."
      />
    </motion.div>
  );
};

export default EnquiryForm;
