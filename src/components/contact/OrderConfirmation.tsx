import { motion } from "framer-motion";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";

interface OrderConfirmationProps {
  orderType: "watch" | "custom" | "enquiry";
  onReset: () => void;
}

const OrderConfirmation = ({ orderType, onReset }: OrderConfirmationProps) => {
  const getMessage = () => {
    switch (orderType) {
      case "watch":
        return "Your order has been received. We'll confirm your booking and share payment details shortly.";
      case "custom":
        return "Your custom request has been submitted. Our artisans will review your requirements and get back to you within 48 hours.";
      case "enquiry":
        return "Thank you for reaching out. We'll respond to your enquiry within 24-48 hours.";
      default:
        return "Your submission has been received.";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8 space-y-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center"
      >
        <CheckCircle2 size={40} className="text-primary" />
      </motion.div>

      <div className="space-y-3">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-serif"
        >
          Thank you for trusting{" "}
          <span className="text-gradient-gold">Legacy Redux</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-muted-foreground max-w-sm mx-auto"
        >
          {getMessage()}
        </motion.p>
      </div>

      {/* Contact Options */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center gap-4 pt-4"
      >
        <a
          href="mailto:legacyredux.2025@gmail.com"
          className="flex items-center gap-2 px-4 py-2 bg-card border border-primary/20 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
        >
          <Mail size={16} />
          Email Us
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-card border border-primary/20 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </motion.div>

      {/* Reset Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={onReset}
        className="text-xs text-muted-foreground underline hover:text-primary transition-colors"
      >
        Place another order
      </motion.button>
    </motion.div>
  );
};

export default OrderConfirmation;
