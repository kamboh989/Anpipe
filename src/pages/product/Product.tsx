import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ------------------ Accordion Components ------------------
const Accordion = ({ children, defaultValue, onValueChange }: any) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div>
      {children.map((child: any) =>
        child && typeof child === "object"
          ? {
              ...child,
              props: {
                ...child.props,
                isOpen: value === child.props.value,
                onToggle: () =>
                  handleChange(
                    value === child.props.value ? "" : child.props.value
                  ),
              },
            }
          : child
      )}
    </div>
  );
};

const AccordionItem = ({ children, isOpen, onToggle }: any) => {
  return (
    <div className="border-b border-gray-200">
      {children.map((child: any) =>
        child && typeof child === "object"
          ? { ...child, props: { ...child.props, isOpen, onToggle } }
          : child
      )}
    </div>
  );
};

const AccordionTrigger = ({ children, className, isOpen, onToggle }: any) => {
  return (
    <button
      onClick={onToggle}
      className={`${className} w-full flex justify-between items-center transition-colors  ${
        isOpen ? "text-[#fece1a]" : "text-gray-800"
      }`}
    >
      {children}
      <svg
        className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
};

const AccordionContent = ({ children, isOpen }: any) => {
  if (!isOpen) return null;
  return <div className="overflow-hidden">{children}</div>;
};

// ------------------ Zoomable Image Component ------------------
const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
  const [scale, setScale] = useState(1);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 1));

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-hidden border rounded-lg max-w-full max-h-[500px]">
        <img
          src={src}
          alt={alt}
          className="transition-transform duration-200 w-full h-full "
          style={{ transform: `scale(${scale})` }}
        />
      </div>
      <div className="flex mt-4 gap-4">
        <button
          onClick={zoomOut}
          className="px-4 py-2 bg-white text-gray-800 rounded-full border hover:bg-gray-200 transition-all"
        >
          -
        </button>
        <button
          onClick={zoomIn}
          className="px-4 py-2 bg-white text-gray-800 rounded-full border hover:bg-gray-200 transition-all"
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
  const [activeItem, setActiveItem] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeProduct = products.find((item) => item.id === activeItem) || products[0];

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
    <section className="py-20">
      <h2
        className="text-4xl font-semibold mb-10 flex justify-center text-[#fece1a]"
        style={{ fontFamily: "'Altmann Grotesk', sans-serif" }}
      >
        OUR PRODUCTS
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Accordion */}
        <div>
          <Accordion
            defaultValue="item-1"
            onValueChange={(value: string) => {
              if (value) setActiveItem(Number(value.split("-")[1]));
            }}
          >
            {products.map((product) => (
              <AccordionItem key={product.id} value={`item-${product.id}`}>
                <AccordionTrigger
                  className="px-0 py-5 text-left font-semibold text-lg hover:no-underline"
                  style={{ fontFamily: "'Altmann Grotesk', sans-serif" }}
                >
                  {product.title}
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6">
                  <div className="animate-fadeIn">
                    <ul className="space-y-3 text-gray-700" style={{ fontFamily: "'Fenomen Sans', sans-serif" }}>
                      {product.specs.map((spec, index) => (
                        <li key={index} className="flex justify-between pb-2">
                          <span className="font-medium">{spec.label}</span>
                          <span className="text-right">{spec.value}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => openModal(product)}
                      className="mt-6 inline-block px-6 py-2 text-sm font-semibold border-2 border-[#fece1a] text-[#fece1a] rounded-full hover:bg-[#fece1a] hover:text-white transition-all duration-300"
                    >
                      Read More
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* RIGHT: Fixed Image */}
        <div className="flex items-center justify-center lg:sticky lg:top-32">
          <div className="relative rounded-3xl overflow-hidden w-full max-w-md shadow-2xl">
            <img
              src={activeProduct.image}
              alt={activeProduct.title}
              className="w-full h-[450px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-2 bg-white rounded-full hover:bg-gray-200 transition-all"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>

          {/* Previous */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-50 p-3 bg-white rounded-full hover:bg-gray-200 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Image */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8">
            <ZoomableImage
              src={selectedProduct.detailImages[currentImageIndex]}
              alt={`${selectedProduct.title} detail ${currentImageIndex + 1}`}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full text-sm font-semibold">
              {currentImageIndex + 1} / {selectedProduct.detailImages.length}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-50 p-3 bg-white rounded-full hover:bg-gray-200 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
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
