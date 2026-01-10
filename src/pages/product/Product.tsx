import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, Shield, ArrowRight, X, ChevronRight, Settings, Info } from "lucide-react";
import { TiltCard } from "../../components/3d/TiltCard";

interface ProductType {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  image: string;
  icon: any;
  category: "Industrial" | "Commercial" | "Structural";
}

const products: ProductType[] = [
  {
    id: 1,
    title: "G.I. Pipes",
    subtitle: "Galvanized Iron Pipes",
    category: "Industrial",
    description: "Our high-precision G.I. pipes offer superior corrosion resistance and structural longevity, perfect for demanding industrial environments and water transport systems.",
    specs: ["Anti-Corrosive Coating", "ASTM Standard", "Schedule 40/80", "Length: 6m - 12m"],
    image: "/iron-pipe.png",
    icon: Package
  },
  {
    id: 2,
    title: "M.S. Pipes",
    subtitle: "Mild Steel Hollow Sections",
    category: "Structural",
    description: "M.S. pipes engineered for maximum load-bearing capacity, ensuring the safety and stability of large-scale infrastructure projects.",
    specs: ["High Tensile Strength", "Black Finish", "Round/Square/Rect.", "Wall: 1.5mm - 12mm"],
    image: "/ms-pipe.png",
    icon: Shield
  },
  {
    id: 3,
    title: "Scaffolding Tube",
    subtitle: "Construction Safety Systems",
    category: "Structural",
    description: "Premium scaffolding tubes designed for extreme reliability. Built to withstand high pressure and ensure worker safety on elevation.",
    specs: ["BS 1139 Certified", "Zinc Coated", "High Impact Res.", "Standard lengths avail."],
    image: "/scaffolding-pipe.png",
    icon: Settings
  }
];

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Industrial", "Structural", "Commercial"];
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(37, 99, 235, 0.5) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cinematic Header */}
        <div className="mb-16 md:mb-24 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-4 md:gap-6 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-4">
               <div className="w-8 md:w-12 h-1 bg-primary"></div>
               <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Capabilities</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white font-heading leading-tight md:leading-none uppercase tracking-tighter">
              Precision <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Inventory</span>
            </h2>
          </motion.div>

          {/* Category Filter */}
          <div className="mt-10 md:mt-12 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-xl shadow-primary/20" 
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard tiltMax={10} scale={1.02}>
                <div 
                  className="group relative bg-[#0a0f1d] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer h-full hover:border-primary/50 transition-colors duration-500"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/20 to-transparent"></div>
                  </div>

                  <div className="p-6 md:p-8 space-y-3 md:space-y-4">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">{product.category}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white font-heading uppercase tracking-tight">{product.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed line-clamp-2">{product.description}</p>
                    <div className="pt-2 md:pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Detail</span>
                        <ChevronRight size={14} className="md:w-4 md:h-4" />
                      </div>
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                         <product.icon size={14} className="text-primary md:w-[18px] md:h-[18px]" />
                      </div>
                    </div>
                  </div>

                  {/* Blueprint Texture Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-700" style={{
                    backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.5) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
              />
              
              <motion.div
                layoutId={`product-${selectedProduct.id}`}
                className="relative w-full max-w-6xl bg-[#0a0f1d] border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto"
              >
                {/* Modal Close */}
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 md:top-8 md:right-8 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/50 md:bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                >
                  <X size={20} className="md:w-6 md:h-6" />
                </button>

                {/* Modal Visual */}
                <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-auto overflow-hidden">
                   <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title} 
                    className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent"></div>
                   
                   {/* HUD Status */}
                   <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-3 md:gap-4 bg-black/50 backdrop-blur-xl p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary animate-pulse"></div>
                      <div className="flex flex-col">
                        <span className="text-[8px] md:text-[10px] text-gray-400 uppercase font-black tracking-widest">Status</span>
                        <span className="text-white text-[10px] md:text-xs font-black uppercase">Technical Verified</span>
                      </div>
                   </div>
                </div>

                {/* Modal Info */}
                <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-20 overflow-y-auto max-h-[60vh] md:max-h-none">
                  <div className="space-y-8 md:space-y-12">
                    <div className="space-y-3 md:space-y-4">
                      <span className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">{selectedProduct.subtitle}</span>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white font-heading uppercase tracking-tighter leading-none">{selectedProduct.title}</h2>
                    </div>

                    <p className="text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed">{selectedProduct.description}</p>

                    <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] md:text-sm">
                          <Info size={16} className="text-primary md:w-[18px] md:h-[18px]" />
                          Technical Specs
                        </div>
                        <div className="space-y-3 md:space-y-4">
                          {selectedProduct.specs.map((spec, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-400 group">
                              <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                              <span className="text-xs md:text-sm font-medium">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl flex flex-col justify-between">
                         <div className="text-white/20 font-black text-[8px] md:text-xs uppercase tracking-widest mb-4">Quality Verified</div>
                         <Shield className="text-primary w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6" />
                         <div className="text-white font-black uppercase text-[10px] md:text-xs tracking-tighter">Certified 2026 Ready</div>
                      </div>
                    </div>

                    <button className="w-full group flex items-center justify-center gap-4 md:gap-6 py-4 md:py-6 bg-primary text-white rounded-xl md:rounded-2xl font-black text-base md:text-xl hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-primary/20 font-heading uppercase tracking-widest">
                       Connect Analysis
                       <ArrowRight size={18} className="md:w-6 md:h-6 group-hover:translate-x-3 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
