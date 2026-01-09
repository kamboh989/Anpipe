import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "../../components/3d/TiltCard";
import Background3D from "../../components/3d/Background3D";


// ------------------ Zoomable Image Component ------------------
const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.3, 4));
  const zoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.3, 1);
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="relative overflow-hidden border-2  rounded-lg  flex items-center justify-center"
        style={{ 
          width: '90vw', 
          maxWidth: '1200px', 
          height: '80vh',
          maxHeight: '800px',
          cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={src}
          alt={alt}
          className="transition-transform duration-200 max-w-full max-h-full object-contain select-none"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: 'center center'
          }}
          draggable={false}
        />
      </div>
      <div className="flex mt-6 gap-4 bg-gray-800 px-6 py-2 rounded-full">
        <button
          onClick={zoomOut}
          disabled={scale === 1}
          className="px-3 py-1 bg-white text-gray-800 rounded-full border-2 hover:bg-gray-200 transition-all font-bold text-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          −
        </button>
        <span className="px-3 py-1 text-white font-semibold flex items-center">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={zoomIn}
          disabled={scale >= 4}
          className="px-3 py-1 bg-white text-gray-800 rounded-full border-2 hover:bg-gray-200 transition-all font-bold text-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>
    </div>
  );
};
// ------------------ Product Data ------------------
const products = [
  {
    id: 1,
    title: "GALVANIZED IRON PIPE",
    image: "./iron-pipe.png",
    detailImages: ["./Galvinzed Pipe-page-001.jpg", "./Galvinzed Pipe-page-002.jpg"],
    specs: [
      { label: "Size", value: "1/2 - 12 (Inches)" },
      { label: "Thickness", value: "2mm To 12mm" },
      { label: "Material", value: "Prime Hot Rolled" },
      { label: "Surface", value: "Hot Dipped Galvanized" },
      { label: "Standard", value: "EN 10255:2004, BS 1387-1985, ASTM A53" },
      { label: "Certification", value: "ISO 9001:2008" },
      { label: "End", value: "Threaded, Plain" },
    ],
  },
  {
    id: 2,
    title: "ERW MS BLACK PIPE",
    image: "./ms-pipe.png",
    detailImages: ["./MS Pipe-page-001.jpg", "./MS Pipe-page-002.jpg"],
    specs: [
      { label: "Size", value: "1/2 to 12 Inches" },
      { label: "Thickness", value: "1.6mm To 12mm" },
      { label: "Material", value: "Prime Hot Rolled, Cold Rolled" },
      { label: "Surface", value: "Bared, Painted, Anti Rust Coating" },
      { label: "Standard", value: "ASTM A53 Grade A&B, API 5L-B" },
      { label: "Certification", value: "ISO 9001:2008" },
      { label: "End", value: "Plain, Beveled" },
    ],
  },
  {
        id: 3,
        title: "PROFILE TUBE",
        image: "./profile-tube.jpg",
        detailImages: ["./PDF Profile -11.jpg", "./PDF Profile -12.jpg"],
        specs: [
            { label: "Size", value: "L, T, Z, D Type Profiles" },
            { label: "Thickness", value: "0.6mm - 2mm" },
            { label: "Material", value: "Prime Cold Rolled and Hot Rolled" },
            { label: "Surface", value: "Bared, Painted, Anti Rust Coating" },
            { label: "Standard", value: "EN 10305-5, BS 6323-5" },
            { label: "Certification", value: "ISO 9001:2008" },
            { label: "End", value: "Plain" },
        ],
    },
    {
        id: 4,
        title: "SCAFFOLDING PIPE",
        image: "./scaffolding-pipe.png",
        detailImages: ["./Scaffolding Tubes-page-001.jpg", "./Scaffolding Tubes-page-001.jpg"],
        specs: [
            { label: "Size", value: "1/2 - 12 (Inches)" },
            { label: "Thickness", value: "3mm & 4mm" },
            { label: "Material", value: "Prime Hot Rolled" },
            { label: "Surface", value: "Bared & Hot Dipped Galvanized" },
            { label: "Standard", value: "BS EN 39:2001" },
            { label: "Certification", value: "ISO 9001:2008" },
            { label: "End", value: "Plain, Beveled" },
        ],
    },
    {
        id: 5,
        title: "SQUARE TUBE",
        image: "./square-tube.png",
        detailImages: ["./RHS,SHS, Conduite-page-001.jpg", "./RHS,SHS, Conduite-page-002.jpg"],
        specs: [
            { label: "Size", value: "12X12mm TO 50x50mm" },
            { label: "Thickness", value: "0.6mm TO 2mm" },
            { label: "Material", value: "Prime Hot Rolled and Hot Rolled" },
            { label: "Surface", value: "Bared, Painted, Anti Rust Coating," },
            { label: "Standard", value: "EN 10305-5, BS 6323-5" },
            { label: "Certification", value: "ISO 9001:2008" },
            { label: "End", value: "Plain" },
        ],
    },
    {
        id: 6,
        title: "ERW FILTER STEEL PIPE",
        image: "./steel-pipe.png",
        detailImages: ["./MS Pipe-page-001 (2).jpg", "./MS Pipe-page-002 (2).jpg"],
        specs: [
            { label: "Size", value: " 6 TO 12 (Inches)" },
            { label: "Thickness", value: "4mm TO 12mm" },
            { label: "Material", value: "Prime Hot Rolled" },
            { label: "Surface", value: "Bared, Painted, Anti Rust Coating," },
            { label: "Standard", value: "ASTM A53" },
            { label: "Certification", value: "ISO 9001:2008" },
            { label: "End", value: "Plain" },
        ],
    },
  // Add more products as needed...
];

// ------------------ Main Product Component ------------------
export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) =>
        prev === selectedProduct.detailImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProduct.detailImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <Background3D preset="products" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full text-primary text-sm font-semibold uppercase tracking-wider mb-4">
          Our Products
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-heading uppercase tracking-tight">
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Steel Solutions</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our comprehensive range of high-quality steel pipes and tubes
        </p>
      </motion.div>

      {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <TiltCard key={product.id} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gray-800/50">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Product Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 font-heading uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>

                  {/* Specs - Show first 4 */}
                  <div className="space-y-2 mb-6 flex-grow">
                    {product.specs.slice(0, 4).map((spec, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-400">{spec.label}:</span>
                        <span className="text-gray-300 font-semibold text-right ml-2">{spec.value}</span>
                      </div>
                    ))}
                    {product.specs.length > 4 && (
                      <div className="text-primary text-sm font-semibold pt-2">
                        +{product.specs.length - 4} more specifications
                      </div>
                    )}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => openModal(product)}
                    className="w-full px-6 py-3 bg-primary/10 backdrop-blur-sm text-primary rounded-lg font-semibold border-2 border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 font-heading uppercase tracking-wider hover:scale-105"
                  >
                    View Full Details
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

      {/* MODAL */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/95 backdrop-blur-sm">
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-2 bg-white rounded-full hover:bg-gray-200 transition-all shadow-lg"
          >
            <X className="w-6 h-6 text-secondary" />
          </button>

          {/* Previous */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-50 p-3 bg-white rounded-full hover:bg-gray-200 transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-secondary" />
          </button>

          {/* Image */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8">
            <ZoomableImage
              src={selectedProduct.detailImages[currentImageIndex]}
              alt={`${selectedProduct.title} detail ${currentImageIndex + 1}`}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full text-sm font-bold shadow-lg text-secondary">
              {currentImageIndex + 1} / {selectedProduct.detailImages.length}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-50 p-3 bg-white rounded-full hover:bg-gray-200 transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-secondary" />
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </section>
  );
}
