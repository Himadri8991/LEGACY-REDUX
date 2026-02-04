import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import PaymentSection, { PaymentMethod } from "@/components/contact/PaymentSection";
import TrustIndicators from "@/components/contact/TrustIndicators";
import OrderConfirmation from "@/components/contact/OrderConfirmation";

interface Product {
  id: string;
  name: string;
  price: string;
  images: string[];
}

interface ProductBookingFormProps {
  product: Product;
}

const ProductBookingForm = ({ product }: ProductBookingFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const productPrice = parseInt(product.price.replace(/[₹,]/g, "")) || 0;
  const totalAmount = productPrice * quantity;

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(10, prev + delta)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Order: ${product.name} x${quantity}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Order Details:
- Product: ${product.name}
- Quantity: ${quantity}
- Unit Price: ${product.price}
- Total: ₹${totalAmount.toLocaleString("en-IN")}
- Payment Method: ${paymentMethod || "Not selected"}

Message: ${formData.message || "None"}
    `.trim();

    window.location.href = `mailto:legacyredux.2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setQuantity(1);
    setPaymentMethod(null);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return <OrderConfirmation orderType="watch" onReset={handleReset} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Order Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card/50 rounded-lg border border-primary/10 p-4"
      >
        <div className="flex gap-4">
          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-serif text-sm">{product.name}</h4>
            <p className="text-primary text-sm mt-1">{product.price}</p>
            
            {/* Quantity Control */}
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs text-muted-foreground">Qty:</span>
              <div className="flex items-center gap-2">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Minus size={12} />
                </motion.button>
                <motion.span
                  key={quantity}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="w-8 text-center text-sm font-sans"
                >
                  {quantity}
                </motion.span>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                  className="w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Plus size={12} />
                </motion.button>
              </div>
            </div>
          </div>
          
          {/* Total */}
          <div className="text-right">
            <span className="text-xs text-muted-foreground block">Total</span>
            <motion.span
              key={totalAmount}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-serif text-primary"
            >
              ₹{totalAmount.toLocaleString("en-IN")}
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Customer Details */}
      <div className="space-y-4">
        <label className="block text-xs text-muted-foreground font-sans uppercase tracking-[0.3em]">
          Your Details
        </label>
        
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-primary/20 rounded-sm focus:border-primary focus:outline-none transition-colors font-sans text-sm"
            placeholder="Full Name *"
          />
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-primary/20 rounded-sm focus:border-primary focus:outline-none transition-colors font-sans text-sm"
            placeholder="Email *"
          />
        </div>

        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 bg-background border border-primary/20 rounded-sm focus:border-primary focus:outline-none transition-colors font-sans text-sm"
          placeholder="Phone Number *"
        />

        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-background border border-primary/20 rounded-sm focus:border-primary focus:outline-none transition-colors font-sans text-sm resize-none"
          placeholder="Special requests or notes (optional)"
        />
      </div>

      {/* Payment Section */}
      <PaymentSection
        selectedMethod={paymentMethod}
        onSelect={setPaymentMethod}
        totalAmount={totalAmount}
      />

      {/* Trust Indicators */}
      <TrustIndicators />
    </form>
  );
};

export default ProductBookingForm;
