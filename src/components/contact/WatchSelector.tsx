import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Trash2, PlusCircle } from "lucide-react";
import { products } from "@/data/products";

export interface SelectedWatch {
  id: string;
  productId: string;
  quantity: number;
}

interface WatchSelectorProps {
  selectedWatches: SelectedWatch[];
  onUpdate: (watches: SelectedWatch[]) => void;
}

const availableProducts = products.filter(p => p.inStock && p.price !== "Coming Soon");

const WatchSelector = ({ selectedWatches, onUpdate }: WatchSelectorProps) => {
  const addWatchRow = () => {
    const newWatch: SelectedWatch = {
      id: `watch-${Date.now()}`,
      productId: "",
      quantity: 1,
    };
    onUpdate([...selectedWatches, newWatch]);
  };

  const removeWatchRow = (id: string) => {
    onUpdate(selectedWatches.filter(w => w.id !== id));
  };

  const updateWatch = (id: string, updates: Partial<SelectedWatch>) => {
    onUpdate(selectedWatches.map(w => 
      w.id === id ? { ...w, ...updates } : w
    ));
  };

  const updateQuantity = (id: string, delta: number) => {
    const watch = selectedWatches.find(w => w.id === id);
    if (watch) {
      const newQuantity = Math.max(1, Math.min(10, watch.quantity + delta));
      updateWatch(id, { quantity: newQuantity });
    }
  };

  // Add initial row if empty
  if (selectedWatches.length === 0) {
    addWatchRow();
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <label className="block text-xs text-muted-foreground font-sans uppercase tracking-[0.3em]">
        Select Your Timepiece
      </label>

      <AnimatePresence mode="popLayout">
        {selectedWatches.map((watch, index) => {
          const product = availableProducts.find(p => p.id === watch.productId);
          
          return (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20, height: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-background/50 border border-primary/10 rounded-lg p-4 space-y-3"
            >
              {/* Watch Selector Dropdown */}
              <div className="flex items-start gap-3">
                {/* Thumbnail Preview */}
                <div className="w-16 h-16 rounded-md overflow-hidden bg-muted/30 flex-shrink-0">
                  {product ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-2xl opacity-30">🕐</span>
                    </div>
                  )}
                </div>

                {/* Selector & Info */}
                <div className="flex-1 min-w-0">
                  <select
                    value={watch.productId}
                    onChange={(e) => updateWatch(watch.id, { productId: e.target.value })}
                    className="w-full bg-card border border-primary/20 rounded-md px-3 py-2 text-sm font-sans focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Choose a watch...</option>
                    {availableProducts.map(p => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {p.price}
                      </option>
                    ))}
                  </select>
                  
                  {product && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-muted-foreground mt-1"
                    >
                      {product.tagline}
                    </motion.p>
                  )}
                </div>

                {/* Remove Button */}
                {selectedWatches.length > 1 && (
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeWatchRow(watch.id)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 size={16} />
                  </motion.button>
                )}
              </div>

              {/* Quantity Control */}
              {product && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between pt-2 border-t border-primary/5"
                >
                  <span className="text-xs text-muted-foreground">Quantity</span>
                  
                  <div className="flex items-center gap-3">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => updateQuantity(watch.id, -1)}
                      disabled={watch.quantity <= 1}
                      className="p-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <Minus size={14} />
                    </motion.button>
                    
                    <motion.span 
                      key={watch.quantity}
                      initial={{ scale: 1.3 }}
                      animate={{ scale: 1 }}
                      className="w-8 text-center font-serif text-lg text-primary"
                    >
                      {watch.quantity}
                    </motion.span>
                    
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => updateQuantity(watch.id, 1)}
                      disabled={watch.quantity >= 10}
                      className="p-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <Plus size={14} />
                    </motion.button>
                  </div>
                  
                  <span className="font-serif text-primary">
                    {product.price}
                  </span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Add Another Watch Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={addWatchRow}
        className="w-full py-3 border border-dashed border-primary/30 rounded-lg text-primary/70 hover:text-primary hover:border-primary/50 transition-all flex items-center justify-center gap-2 text-sm"
      >
        <PlusCircle size={16} />
        Add Another Watch
      </motion.button>
    </motion.div>
  );
};

export default WatchSelector;
