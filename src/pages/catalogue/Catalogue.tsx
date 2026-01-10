import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, Download, FileText } from "lucide-react";

const cataloguePages = [
  { id: 1, title: "G.I. Pipes Catalogue", image: "/Galvinzed Pipe-page-001.jpg" },
  { id: 2, title: "M.S. Pipes Specs", image: "/MS Pipe-page-001.jpg" },
  { id: 3, title: "Scaffolding Tubes", image: "/Scaffolding Tubes-page-001.jpg" },
  { id: 4, title: "Structural Sections", image: "/RHS,SHS, Conduite-page-001.jpg" }
];

export default function Catalogue() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % cataloguePages.length);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + cataloguePages.length) % cataloguePages.length);

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cinematic Header */}
        <div className="mb-20 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 text-primary font-black uppercase tracking-[0.4em] text-xs"
          >
             <div className="w-12 h-[1px] bg-primary/30"></div>
             Master Catalog 2026
             <div className="w-12 h-[1px] bg-primary/30"></div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl sm:text-8xl font-black text-white font-heading uppercase tracking-tighter leading-none"
          >
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Inventory</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            Explore our comprehensive range of industrial piping solutions, technical specifications, and international standard compliance tables.
          </motion.p>
        </div>

        {/* Interactive Viewer */}
        <div className="relative group">
           <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
           
           <div className="relative aspect-[16/10] sm:aspect-[16/10] md:aspect-[16/10] max-w-5xl mx-auto bg-[#0a0f1d] border border-white/10 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                 <motion.div
                   key={currentPage}
                   initial={{ opacity: 0, x: 100 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -100 }}
                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                   className="absolute inset-0"
                 >
                    <img 
                      src={cataloguePages[currentPage].image} 
                      alt={cataloguePages[currentPage].title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex items-end justify-between">
                       <div className="space-y-1 md:space-y-2">
                          <div className="text-primary font-black uppercase text-[8px] md:text-[10px] tracking-[0.4em]">Section {cataloguePages[currentPage].id}</div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white font-heading uppercase tracking-tight">{cataloguePages[currentPage].title}</h3>
                       </div>
                       <button 
                         onClick={() => setIsLightboxOpen(true)}
                         className="p-3 md:p-4 bg-white/10 hover:bg-primary text-white rounded-xl md:rounded-2xl backdrop-blur-xl border border-white/10 transition-all active:scale-95"
                       >
                          <Maximize2 size={18} className="md:w-6 md:h-6" />
                       </button>
                    </div>
                 </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute bottom-20 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 md:gap-12 bg-black/40 backdrop-blur-2xl px-6 md:px-10 py-3 md:py-4 rounded-2xl md:rounded-3xl border border-white/10">
                 <button onClick={prevPage} className="text-white hover:text-primary transition-colors active:scale-90"><ChevronLeft size={24} className="md:w-8 md:h-8" /></button>
                 <div className="flex flex-col items-center">
                    <span className="text-white font-black text-lg md:text-xl leading-none">{currentPage + 1}</span>
                    <span className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest">Page</span>
                 </div>
                 <button onClick={nextPage} className="text-white hover:text-primary transition-colors active:scale-90"><ChevronRight size={24} className="md:w-8 md:h-8" /></button>
              </div>
           </div>
        </div>

        {/* Global Catalog Actions */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
           <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-primary text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:bg-blue-600 transition-all">
              <Download size={16} className="md:w-[18px] md:h-[18px]" />
              Full PDF Catalog
           </button>
           <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-white/5 border border-white/10 text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
              <FileText size={16} className="md:w-[18px] md:h-[18px]" />
              Technical Data Sheets
           </button>
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex flex-col items-center justify-center"
            >
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-10 right-10 p-4 bg-white/10 text-white rounded-full hover:bg-primary transition-colors z-10"
              >
                <X size={32} />
              </button>
              <img 
                src={cataloguePages[currentPage].image} 
                alt={cataloguePages[currentPage].title} 
                className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
