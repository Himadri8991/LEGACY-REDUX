import { motion } from "framer-motion";
import { Watch, Palette, FileText } from "lucide-react";

export type OrderType = "watch" | "custom" | "enquiry" | null;

interface OrderTypeSelectorProps {
  selectedType: OrderType;
  onSelect: (type: OrderType) => void;
}

const orderTypes = [
  {
    id: "watch" as const,
    label: "Select a Watch",
    description: "Browse our collection",
    icon: Watch,
  },
  {
    id: "custom" as const,
    label: "Custom Order",
    description: "Personalized timepiece",
    icon: Palette,
  },
  {
    id: "enquiry" as const,
    label: "Other Enquiry",
    description: "General questions",
    icon: FileText,
  },
];

const OrderTypeSelector = ({ selectedType, onSelect }: OrderTypeSelectorProps) => {
  return (
    <div className="space-y-4">
      <label className="block text-xs text-muted-foreground font-sans uppercase tracking-[0.3em] mb-4">
        What would you like to enquire or order?
      </label>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {orderTypes.map((type, index) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.id;
          
          return (
            <motion.button
              key={type.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelect(isSelected ? null : type.id)}
              className={`
                relative p-4 rounded-lg border transition-all duration-300
                ${isSelected 
                  ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(212,175,55,0.15)]" 
                  : "bg-card border-primary/10 hover:border-primary/30"
                }
              `}
            >
              {/* Selected indicator */}
              {isSelected && (
                <motion.div
                  layoutId="selectedIndicator"
                  className="absolute inset-0 rounded-lg border-2 border-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center gap-2">
                <motion.div
                  animate={{ 
                    scale: isSelected ? 1.1 : 1,
                    color: isSelected ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={24} />
                </motion.div>
                
                <div>
                  <p className={`font-serif text-sm ${isSelected ? "text-primary" : "text-foreground"}`}>
                    {type.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {type.description}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTypeSelector;
