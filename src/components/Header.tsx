"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", id: "home", type: "scroll" },
    { name: "About Us", id: "about", type: "scroll" },
    { name: "Products", id: "products", type: "scroll" },
    { name: "Clients", id: "clients", type: "scroll" },
    { name: "Contact", id: "contact", type: "scroll" },
    { name: "Catalogue", path: "/catalogue", type: "route" },
  ];

  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hide / show header on scroll & detect scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for background change
      setScrolled(currentScrollY > 20);
      
      // Hide/show logic
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setHide(true);
      } else {
        setHide(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scroll handler
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hide ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled 
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-primary/10 border-b border-primary/20" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <button onClick={() => handleScrollTo("home")} className="group">
          <img
            src="/logo (1).png"
            alt="A.N Industries Logo"
            className="hidden md:block h-14 transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src="/logo.png"
            alt="A.N Industries Logo"
            className="md:hidden h-12 transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-white">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.type === "scroll" ? (
                <button
                  onClick={() => handleScrollTo(item.id!)}
                  className="relative hover:text-primary transition-colors uppercase tracking-wide text-sm font-bold font-heading group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  to={item.path!}
                  className="relative hover:text-primary transition-colors uppercase tracking-wide text-sm font-bold font-heading group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <button
          onClick={() => handleScrollTo("contact")}
          className="hidden md:block px-6 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105 font-heading uppercase tracking-wider"
        >
          Get Quote
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-white hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-md shadow-xl border-t border-primary/20 transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 font-semibold text-white">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.type === "scroll" ? (
                <button
                  onClick={() => handleScrollTo(item.id!)}
                  className="hover:text-primary uppercase tracking-wide text-base font-heading transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path!}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-primary uppercase tracking-wide text-base font-heading transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-8 py-3 bg-primary text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-primary/50 font-heading uppercase tracking-wider"
            >
              Get Quote
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
