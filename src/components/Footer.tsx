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

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "home", type: "scroll" },
    { name: "About Us", href: "about", type: "scroll" },
    { name: "Products", href: "products", type: "scroll" },
    { name: "Clients", href: "clients", type: "scroll" },
    { name: "Contact", href: "contact", type: "scroll" },
    { name: "Catalogue", href: "/catalogue", type: "route" },
  ];

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-black text-gray-300 overflow-hidden font-sans">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-blue-900/40 to-primary/20 p-8 sm:p-12 border border-white/10 backdrop-blur-xl shadow-2xl shadow-primary/20 group"
        >
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-700"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight uppercase tracking-tight">
                Ready to Upgrade Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Project Infrastructure?</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-xl">
                Partner with Pakistan's most trusted steel pipe manufacturer. Get a customized quote for your industrial needs today.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScrollTo("contact")}
                className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg uppercase tracking-wider shadow-lg shadow-primary/40 hover:bg-blue-600 transition-all flex items-center gap-3 font-heading"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScrollTo("products")}
                className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-all font-heading"
              >
                View Catalog
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Identity Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer" onClick={scrollToTop}>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/40 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                  <div className="relative p-2.5 bg-white rounded-xl shadow-2xl">
                    <img src="/logo.png" alt="A.N Industries" className="h-10 object-contain" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white font-heading tracking-tighter leading-none">
                    A.N <span className="text-primary">INDUSTRIES</span>
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mt-1">Excellence Since 1991</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Leading the industry with precision-engineered M.S. and G.I. pipes. Our ISO-certified manufacturing process ensures world-class quality for every infrastructure project.
              </p>
            </div>

            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: '#2563EB', borderColor: '#2563EB' }}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white shadow-lg backdrop-blur-sm transition-all duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Section */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-bold text-white mb-8 font-heading uppercase tracking-widest relative">
              Navigation
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.type === "scroll" ? (
                    <button
                      onClick={() => handleScrollTo(link.href)}
                      className="group flex items-center gap-3 text-gray-400 hover:text-primary transition-all duration-300 text-base font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all"></span>
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="group flex items-center gap-3 text-gray-400 hover:text-primary transition-all duration-300 text-base font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all"></span>
                      {link.name}
                      <ExternalLink size={12} className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 font-heading uppercase tracking-widest relative">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
                  <Mail size={18} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-black tracking-widest mb-1">Email Support</div>
                  <a href="mailto:info@anpipe.com.pk" className="text-gray-300 hover:text-primary transition-colors block font-medium">info@anpipe.com.pk</a>
                  <a href="mailto:Sales@anpipe.com.pk" className="text-gray-300 hover:text-primary transition-colors block font-medium">Sales@anpipe.com.pk</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
                  <Phone size={18} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-black tracking-widest mb-1">Call Center</div>
                  <a href="tel:+924237963775" className="text-gray-300 hover:text-primary transition-colors block font-medium text-lg">+92 42 37963775</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
                  <MapPin size={18} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-black tracking-widest mb-1">Headquarters</div>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    9-KM G.T. Road, Ferozewala,<br />
                    Shahdara Lahore 54950, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter/Updates Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-white font-heading uppercase tracking-widest">
                Newsletter
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Stay updated with our latest industrial piping solutions and corporate news.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-5 py-4 bg-black/40 border border-white/10 text-white placeholder-gray-600 rounded-2xl focus:outline-none focus:border-primary/50 text-sm transition-all focus:ring-1 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary hover:bg-blue-600 text-white rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group shadow-2xl shadow-primary/20"
                >
                  Join Us
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Final Copyright & Attribution Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Copyright & Certifications */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[10px] uppercase font-bold tracking-[0.2em]">
              <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Made in Pakistan
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> ISO 9001 Certified
              </span>
            </div>
            
            <p className="text-sm text-gray-500 font-medium text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-white">An Pipe Industrial (Pvt) Ltd.</span>
              <span className="hidden sm:inline mx-2 text-gray-800">|</span>
              <br className="sm:hidden" />
              All rights reserved.
            </p>
          </div>

          {/* Designed By Signature */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] text-gray-600 uppercase font-black tracking-[0.3em]">Crafted By</span>
            <a 
              href="https://www.aiverse.pk/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/20 rounded-2xl transition-all duration-500 hover:scale-105 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
            >
              <span className="text-sm font-bold text-white tracking-[0.2em]">AI VERSE</span>
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-2 h-2 rounded-full bg-primary group-hover:bg-blue-400 transition-colors"></div>
              </div>
            </a>
          </div>

          {/* Right Actions & Legal */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
            
            <motion.button
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-xl"
            >
              <ChevronUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
