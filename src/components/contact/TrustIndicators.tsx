import { motion } from "framer-motion";
import { Shield, Clock, Package, Settings } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    label: "Secure Payment",
  },
  {
    icon: Clock,
    label: "1 Year Warranty",
  },
  {
    icon: Package,
    label: "Wooden Box",
  },
  {
    icon: Settings,
    label: "Miyota Movement",
  },
];

const TrustIndicators = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex flex-wrap justify-center gap-4 pt-4"
    >
      {trustItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <Icon size={12} className="text-primary" />
            <span>{item.label}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TrustIndicators;
