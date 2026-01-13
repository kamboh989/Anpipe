"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Send,
  ExternalLink,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, useNavigate, Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "home", type: "scroll" },
    { name: "Features", href: "features", type: "scroll" },
    { name: "About Us", href: "about", type: "scroll" }, // Changed href to match about section in App.tsx
    { name: "Products", href: "products", type: "scroll" },
    { name: "Clients", href: "clients", type: "scroll" },
    { name: "Contact", href: "contact", type: "scroll" },
    { name: "Catalogue", href: "/catalogue", type: "route" },
  ];

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
  };

  return (
    <footer className="relative w-full bg-black text-gray-300 overflow-hidden font-sans pointer-events-auto">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] opacity-20"></div>
      </div>

      {/* 
        PRE-FOOTER CTA 
        Designed to match the "Wow" factor of other sections
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20 mb-10 md:mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] md:rounded-3xl bg-gradient-to-r from-primary/20 via-blue-900/40 to-primary/20 p-8 sm:p-12 md:p-12 border border-white/10 backdrop-blur-xl shadow-2xl shadow-primary/20 group"
        >
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-700"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading leading-tight uppercase tracking-tighter">
                Upgrade Your <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 font-black">Project Infrastructure</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-light">
                Partner with Pakistan's most trusted steel pipe manufacturer. Get a customized quote for your industrial needs today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full lg:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScrollTo("contact")}
                className="px-8 md:px-10 py-4 md:py-5 bg-primary text-white rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-lg shadow-primary/40 hover:bg-blue-600 transition-all flex items-center justify-center gap-3 font-heading"
              >
                Initiate
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScrollTo("products")}
                className="px-8 md:px-10 py-4 md:py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all font-heading"
              >
                Catalog
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-20">
          
          {/* Brand Identity Section */}
          <div className="space-y-8 text-center sm:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center sm:justify-start gap-4 group cursor-pointer" onClick={() => handleScrollTo("home")}>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/40 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                  <div className="relative p-2.5 bg-white rounded-xl shadow-2xl">
                    <img src="/logo.png" alt="A.N Industries" className="h-8 md:h-10 object-contain" />
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xl md:text-2xl font-black text-white font-heading tracking-tighter leading-none">
                    A.N <span className="text-primary font-black">INDUSTRIES</span>
                  </span>
                  <span className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black mt-1">Excellence Since 1991</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light max-w-xs mx-auto sm:mx-0">
                Leading the industry with precision-engineered M.S. and G.I. pipes. Our ISO-certified manufacturing process ensures world-class quality for every infrastructure project.
              </p>
            </div>

            <div className="flex justify-center sm:justify-start gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: '#2563EB', borderColor: '#2563EB' }}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white shadow-lg backdrop-blur-sm transition-all duration-300"
                >
                  <Icon size={18} className="md:w-5 md:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Section */}
          <div className="lg:pl-8 text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-black text-white mb-6 md:mb-8 font-heading uppercase tracking-widest relative inline-block sm:block">
              Navigation
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4 md:space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.type === "scroll" ? (
                    <button
                      onClick={() => handleScrollTo(link.href)}
                      className="group flex items-center justify-center sm:justify-start gap-3 text-gray-400 hover:text-primary transition-all duration-300 text-sm md:text-base font-medium"
                    >
                      <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all"></span>
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="group flex items-center justify-center sm:justify-start gap-3 text-gray-400 hover:text-primary transition-all duration-300 text-sm md:text-base font-medium"
                    >
                      <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all"></span>
                      {link.name}
                      <ExternalLink size={10} className="md:w-3 md:h-3 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-black text-white mb-6 md:mb-8 font-heading uppercase tracking-widest relative inline-block sm:block">
              Inquiry
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
                  <Mail size={16} className="text-primary md:w-[18px] md:h-[18px] group-hover:text-white" />
                </div>
                <div>
                   <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Email Protocol</div>
                   <a href="mailto:info@anpipe.com.pk" className="text-gray-300 hover:text-primary transition-colors block font-medium text-xs md:text-sm">info@anpipe.com.pk</a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
                  <Phone size={16} className="text-primary md:w-[18px] md:h-[18px] group-hover:text-white" />
                </div>
                <div>
                   <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Call Center</div>
                   <a href="tel:+924237963775" className="text-gray-300 hover:text-primary transition-colors block font-black text-base md:text-xl tracking-tighter whitespace-nowrap">+92 42 37963775</a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
                  <MapPin size={16} className="text-primary md:w-[18px] md:h-[18px] group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Logistics</div>
                  <p className="text-gray-400 leading-relaxed font-light text-[10px] md:text-xs">
                    9-KM G.T. Road, Ferozewala,<br />
                    Lahore 54950, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="relative group max-w-sm mx-auto sm:max-w-none">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-[2rem] md:rounded-3xl space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-black text-white font-heading uppercase tracking-widest text-center sm:text-left">
                Bulletin
              </h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light text-center sm:text-left">
                Stay updated with our latest industrial piping solutions and corporate developments.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3 md:space-y-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Official Email"
                  className="w-full px-5 py-3 md:py-4 bg-black/40 border border-white/10 text-white placeholder-gray-600 rounded-xl md:rounded-2xl focus:outline-none focus:border-primary/50 text-xs md:text-sm transition-all focus:ring-1 focus:ring-primary/20"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 md:py-4 bg-primary hover:bg-blue-600 text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl shadow-primary/20"
                >
                  Join Us
                  <Send size={14} className="md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Final Copyright & Attribution Bar */}
        <div className="pt-10 md:pt-12 border-t border-white/5 flex flex-col items-center gap-8 md:gap-10">
          
          {/* Copyright & Certifications */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-[8px] md:text-[10px] uppercase font-black tracking-[0.2em]">
              <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Made in Pakistan
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> ISO 9001
              </span>
            </div>
            
            <p className="text-[10px] md:text-sm text-gray-500 font-medium text-center">
              © {new Date().getFullYear()} <span className="text-white font-black">An Pipe Industrial (Pvt) Ltd.</span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline mx-3 text-gray-800">|</span>
              All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-8">
             {/* Left Legal */}
             <div className="flex gap-6 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500">
               <a href="#" className="hover:text-primary transition-colors">Privacy</a>
               <a href="#" className="hover:text-primary transition-colors">Terms</a>
               <a href="#" className="hover:text-primary transition-colors">Cookies</a>
             </div>

             {/* Center Crafted By */}
             <div className="flex items-center gap-4">
                <span className="text-[8px] md:text-[10px] text-gray-700 uppercase font-black tracking-[0.3em]">By</span>
                <a 
                  href="https://www.aiverse.pk/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/10 rounded-xl transition-all duration-500 hover:scale-105 hover:border-primary/40"
                >
                  <span className="text-xs md:text-sm font-black text-white tracking-[0.2em]">AI VERSE</span>
                  <div className="relative w-1.5 h-1.5 rounded-full bg-primary"></div>
                </a>
             </div>

             {/* Right Scroll Top */}
             <motion.button
               whileHover={{ y: -5, scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={() => handleScrollTo("home")}
               className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-xl"
             >
               <ChevronUp size={20} />
             </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
