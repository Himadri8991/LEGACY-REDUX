import { motion } from "framer-motion";
import { CreditCard, Smartphone, Building2, MessageCircle, Check } from "lucide-react";

export type PaymentMethod = "upi" | "netbanking" | "card" | "link" | null;

interface PaymentSectionProps {
  selectedMethod: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
  totalAmount: number;
}

const paymentMethods = [
  {
    id: "upi" as const,
    label: "UPI",
    description: "GPay, PhonePe, Paytm",
    icon: Smartphone,
  },
  {
    id: "netbanking" as const,
    label: "Net Banking",
    description: "All major banks",
    icon: Building2,
  },
  {
    id: "card" as const,
    label: "Card",
    description: "Debit / Credit",
    icon: CreditCard,
  },
  {
    id: "link" as const,
    label: "Payment Link",
    description: "WhatsApp / Email",
    icon: MessageCircle,
  },
];

const PaymentSection = ({ selectedMethod, onSelect, totalAmount }: PaymentSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <label className="block text-xs text-muted-foreground font-sans uppercase tracking-[0.3em]">
        Payment Method
      </label>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          const isSelected = selectedMethod === method.id;

          return (
            <motion.button
              key={method.id}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(method.id)}
              className={`
                relative p-3 rounded-lg border transition-all duration-200
                ${isSelected
                  ? "bg-primary/10 border-primary"
                  : "bg-card border-primary/10 hover:border-primary/30"
                }
              `}
            >
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1.5 right-1.5 w-4 h-4 bg-primary rounded-full flex items-center justify-center"
                >
                  <Check size={10} className="text-primary-foreground" />
                </motion.div>
              )}

              <div className="flex flex-col items-center gap-1.5 text-center">
                <Icon 
                  size={20} 
                  className={isSelected ? "text-primary" : "text-muted-foreground"} 
                />
                <span className={`text-xs font-sans ${isSelected ? "text-primary" : "text-foreground"}`}>
                  {method.label}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {method.description}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Dynamic Payment CTA */}
      {selectedMethod && totalAmount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-2"
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="btn-premium w-full py-4 text-sm font-sans tracking-wider text-primary-foreground rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            Pay ₹{totalAmount.toLocaleString("en-IN")} Securely
          </motion.button>
        </motion.div>
      )}

      {/* For enquiries and custom without payment */}
      {(!totalAmount || totalAmount === 0) && (
        <motion.button
          type="submit"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="btn-premium w-full py-4 text-sm font-sans tracking-wider text-primary-foreground rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
        >
          Send Enquiry
        </motion.button>
      )}
    </motion.div>
  );
};

export default PaymentSection;
