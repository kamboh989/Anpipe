"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Products", id: "products", type: "scroll" },
    { name: "About", id: "profile", type: "scroll" },
    { name: "Catalogue", path: "/catalogue", type: "route" },
    { name: "Clients", id: "clients", type: "scroll" },
    { name: "Contact", id: "contact", type: "scroll" },
  ];

  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setHide(mobileOpen ? false : true);
      } else {
        setHide(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileOpen]);

  const handleScrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        hide ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || mobileOpen
          ? "py-4 bg-black/90 backdrop-blur-2xl border-b border-white/5" 
          : "py-8 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <button 
          onClick={() => {
            if (location.pathname === "/") window.scrollTo({ top: 0, behavior: 'smooth' });
            else navigate("/");
            setMobileOpen(false);
          }} 
          className="group flex items-center gap-4 z-[110]"
        >
          <div className="relative">
             <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/40 transition-all duration-500"></div>
             <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-2xl group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                <img src="/logo.png" alt="A.N Industries Logo" className="w-full h-full object-contain" />
             </div>
          </div>
          <div className="flex flex-col text-left">
             <span className="text-white font-black text-xl md:text-2xl leading-none tracking-tighter uppercase font-heading">
               A.N <span className="text-primary">Industries</span>
             </span>
             <span className="text-primary/60 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Engineering Steel</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-black text-white">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.type === "scroll" ? (
                <button
                  onClick={() => handleScrollTo(item.id!)}
                  className="relative hover:text-primary transition-colors uppercase tracking-[0.2em] text-[10px] font-black font-heading group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  to={item.path!}
                  className="relative hover:text-primary transition-colors uppercase tracking-[0.2em] text-[10px] font-black font-heading group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-black text-[10px] hover:bg-white/10 transition-all font-heading uppercase tracking-[0.2em] flex items-center gap-2"
            >
              Analysis
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-[110] p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 text-white hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-[100] flex flex-col pt-32 px-10 lg:hidden"
          >
             <div className="flex flex-col gap-6">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.type === "scroll" ? (
                      <button
                        onClick={() => handleScrollTo(item.id!)}
                        className="text-4xl sm:text-5xl font-black text-white hover:text-primary transition-colors font-heading uppercase tracking-tighter"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        to={item.path!}
                        onClick={() => setMobileOpen(false)}
                        className="text-4xl sm:text-5xl font-black text-white hover:text-primary transition-colors font-heading uppercase tracking-tighter"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
             </div>

             <div className="mt-auto pb-16 space-y-8">
                <div className="w-full h-px bg-white/10"></div>
                <div className="flex flex-col gap-4">
                   <button 
                     onClick={() => handleScrollTo("contact")}
                     className="w-full group flex items-center justify-center gap-4 py-5 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20"
                   >
                     Get Precise Analysis
                     <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                   </button>
                   <p className="text-center text-gray-500 text-[10px] uppercase font-black tracking-widest leading-loose">
                      Engineering Pakistan's Future <br /> Since 1991
                   </p>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
