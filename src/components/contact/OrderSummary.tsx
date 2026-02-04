import { motion, AnimatePresence } from "framer-motion";
import { Package, Truck } from "lucide-react";
import { SelectedWatch } from "./WatchSelector";
import { products } from "@/data/products";
import { OrderType } from "./OrderTypeSelector";

interface OrderSummaryProps {
  orderType: OrderType;
  selectedWatches: SelectedWatch[];
  customDetails?: {
    strapPreference: string;
    dialPreference: string;
    specialRequest: string;
  };
}

const OrderSummary = ({ orderType, selectedWatches, customDetails }: OrderSummaryProps) => {
  // Calculate totals for watch orders
  const watchItems = selectedWatches
    .filter(w => w.productId)
    .map(w => {
      const product = products.find(p => p.id === w.productId);
      if (!product) return null;
      
      // Parse price (remove ₹ and commas)
      const priceNum = parseInt(product.price.replace(/[₹,]/g, "")) || 0;
      
      return {
        ...w,
        product,
        priceNum,
        subtotal: priceNum * w.quantity,
      };
    })
    .filter(Boolean);

  const totalAmount = watchItems.reduce((sum, item) => sum + (item?.subtotal || 0), 0);
  const totalQuantity = watchItems.reduce((sum, item) => sum + (item?.quantity || 0), 0);

  // Don't show if no valid selections
  if (orderType === "watch" && watchItems.length === 0) {
    return null;
  }

  if (orderType === "enquiry") {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-gradient-to-b from-card to-card/50 border border-primary/20 rounded-lg p-5 space-y-4"
    >
      <div className="flex items-center gap-2 text-primary">
        <Package size={18} />
        <h4 className="font-serif text-sm uppercase tracking-wider">Order Summary</h4>
      </div>

      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {orderType === "watch" && watchItems.map((item, index) => (
            <motion.div
              key={item?.product.id + "-" + index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex justify-between items-start text-sm pb-2 border-b border-primary/5"
            >
              <div className="flex-1">
                <p className="font-serif text-foreground">{item?.product.name}</p>
                <p className="text-xs text-muted-foreground">
                  Qty: {item?.quantity} × {item?.product.price}
                </p>
              </div>
              <motion.span 
                key={item?.subtotal}
                initial={{ scale: 1.2, color: "hsl(var(--primary))" }}
                animate={{ scale: 1, color: "hsl(var(--foreground))" }}
                className="font-serif"
              >
                ₹{item?.subtotal.toLocaleString("en-IN")}
              </motion.span>
            </motion.div>
          ))}

          {orderType === "custom" && customDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm space-y-2"
            >
              <p className="font-serif text-foreground">Custom Order Request</p>
              {customDetails.strapPreference && (
                <p className="text-xs text-muted-foreground">
                  Strap: {customDetails.strapPreference.replace(/-/g, " ")}
                </p>
              )}
              {customDetails.dialPreference && (
                <p className="text-xs text-muted-foreground">
                  Dial: {customDetails.dialPreference.replace(/-/g, " ")}
                </p>
              )}
              <p className="text-xs text-primary/70 italic mt-2">
                Price to be confirmed after review
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Totals for Watch Orders */}
      {orderType === "watch" && totalAmount > 0 && (
        <>
          <div className="border-t border-primary/20 pt-3 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subtotal ({totalQuantity} item{totalQuantity > 1 ? "s" : ""})</span>
              <span>₹{totalAmount.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Shipping</span>
              <span className="text-primary">Free</span>
            </div>
          </div>

          <div className="border-t border-primary/30 pt-3">
            <div className="flex justify-between items-center">
              <span className="font-serif text-lg">Total</span>
              <motion.span 
                key={totalAmount}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="font-serif text-2xl text-primary"
              >
                ₹{totalAmount.toLocaleString("en-IN")}
              </motion.span>
            </div>
          </div>
        </>
      )}

      {/* Shipping Info */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
        <Truck size={14} className="text-primary" />
        <span>Free shipping • Delivery in 2-4 weeks</span>
      </div>
    </motion.div>
  );
};

export default OrderSummary;
