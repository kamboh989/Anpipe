import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2, FileText, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "../../components/Footer";

const images: string[] = [
  "/PDF Profile -01.jpg",
  "/PDF Profile -02.jpg",
  "/PDF Profile -03.jpg",
  "/PDF Profile -04.jpg",
  "/PDF Profile -05.jpg",
  "/PDF Profile -06.jpg",
  "/PDF Profile -07.jpg",
  "/PDF Profile -08.jpg",
  "/PDF Profile -09.jpg",
  "/PDF Profile -10.jpg",
  "/PDF Profile -11.jpg",
  "/PDF Profile -12.jpg",
  "/PDF Profile -13.jpg",
  "/PDF Profile -14.jpg",
];

export const Catalogue = () => {
  const [step, setStep] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSpreads = Math.ceil((images.length - 1) / 2);

  const next = () => {
    if (isMobile) {
      if (step < images.length - 1) setStep(step + 1);
    } else {
      if (step < totalSpreads) setStep(step + 1);
    }
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  // Determine pages to show
  const leftPage = step === 0 ? images[0] : images[step * 2 - 1];
  const rightPage = !isMobile && step > 0 && step * 2 < images.length ? images[step * 2] : null;

  const openLightbox = (img: string) => {
    setCurrentImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col items-center min-h-[calc(100vh-80px)]">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <FileText size={14} />
            Digital Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tighter mb-4">
            Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Profile</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Flip through our comprehensive collection of steel solutions and industrial expertise. 
            Experience quality innovation on every page.
          </p>
        </motion.div>

        {/* Catalog Controller Section */}
        <div className="w-full relative flex items-center justify-center gap-4 sm:gap-10 mb-12">
          
          {/* NAVIGATION BUTTONS - DESKTOP */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            disabled={step === 0}
            className="hidden sm:flex p-4 rounded-2xl bg-white/5 border border-white/10 text-white backdrop-blur-md disabled:opacity-20 hover:bg-primary transition-all duration-300 shadow-xl group"
          >
            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
          </motion.button>

          {/* THE BOOK VIEWER */}
          <div className="relative perspective-3d w-full max-w-5xl h-[400px] sm:h-[600px] flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, rotateY: 15, scale: 0.95 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0"
              >
                {step === 0 ? (
                  /* COVER VIEW */
                  <div className="relative group cursor-zoom-in">
                    <motion.div 
                      whileHover={{ scale: 1.02, rotateY: -5 }}
                      className="w-[280px] sm:w-[420px] h-full rounded-2xl overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.5),-10px_-10px_30px_rgba(255,255,255,0.02)] border border-white/10"
                      onClick={() => openLightbox(leftPage)}
                    >
                      <img src={leftPage} className="w-full h-full object-cover" alt="Cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-6 right-6 p-3 bg-primary/80 backdrop-blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                        <Maximize2 size={20} className="text-white" />
                      </div>
                    </motion.div>
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/50 to-transparent pointer-events-none rounded-l-2xl"></div>
                  </div>
                ) : (
                  /* SPREAD VIEW */
                  <div className="w-full h-full flex flex-col lg:flex-row shadow-[0_40px_100px_rgba(0,0,0,0.6)] rounded-2xl overflow-hidden">
                    {/* LEFT PAGE */}
                    <div 
                      className="relative w-full lg:w-1/2 h-full bg-white group cursor-zoom-in"
                      onClick={() => openLightbox(leftPage)}
                    >
                      <img src={leftPage} className="w-full h-full object-cover" alt="Left" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-6 left-6 p-2 bg-black/50 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={16} className="text-white" />
                      </div>
                    </div>
                    
                    {/* SPINE (Desktop only) */}
                    <div className="hidden lg:block w-px h-full bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20"></div>

                    {/* RIGHT PAGE */}
                    {rightPage && (
                      <div 
                        className="relative w-full lg:w-1/2 h-full bg-white group cursor-zoom-in border-l border-white/5"
                        onClick={() => openLightbox(rightPage)}
                      >
                        <img src={rightPage} className="w-full h-full object-cover" alt="Right" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-6 right-6 p-2 bg-black/50 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 size={16} className="text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            disabled={isMobile ? step === images.length - 1 : step === totalSpreads}
            className="hidden sm:flex p-4 rounded-2xl bg-primary text-white backdrop-blur-md disabled:opacity-20 hover:bg-blue-600 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] group"
          >
            <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex sm:hidden gap-6 mb-8">
           <button
            onClick={prev}
            disabled={step === 0}
            className="p-4 rounded-xl bg-white/10 text-white disabled:opacity-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            disabled={isMobile ? step === images.length - 1 : step === totalSpreads}
            className="p-4 rounded-xl bg-primary text-white disabled:opacity-20 shadow-lg shadow-primary/30"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* FOOTER CONTROLS / PAGINATION */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-8 w-full"
        >
          {/* Progress Bar */}
          <div className="w-full max-w-md h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              className="h-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${(step / (isMobile ? images.length - 1 : totalSpreads)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Metadata & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl gap-6">
            <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold tracking-widest text-gray-400">
               {step === 0
                ? "FRONT COVER"
                : isMobile
                ? `PAGE ${step + 1} OF ${images.length}`
                : `PAGES ${step * 2} – ${Math.min(step * 2 + 1, images.length)} OF ${images.length}`}
            </div>

            <div className="flex gap-4">
              <a 
                href="/Company Profile An Industries Final.pdf" 
                download
                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-bold uppercase tracking-widest transition-all"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-4 sm:p-10 cursor-zoom-out"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all z-[110]"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            >
              <X size={32} />
            </motion.button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={currentImage}
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_100px_rgba(37,99,235,0.2)] border border-white/5"
              alt="Zoomed"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .perspective-3d {
          perspective: 2000px;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};
