"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Products", id: "products" },
    { name: "Clients", id: "clients" },
    { name: "Contact", id: "contact" },
    { name: "Catalogue", id: "catalogue" },
  ];

  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hide / show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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

  // Smooth scroll
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white  z-50 transition-transform duration-300 ${hide ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-8 mg:px-6 py-4 flex items-center justify-between">

        {/* LOGO SECTION */}
        <button
          onClick={() => handleScrollTo("home")}
          className="flex items-center"
        >
          {/* Desktop Logo */}
          <img
            src="/logo (1).png"
            alt="Desktop Logo"
            className="hidden md:block h-12 w-auto object-contain cursor-pointer"
          />

          {/* Mobile Logo */}
          <img
            src="/logo.png"
            alt="Mobile Logo"
            className="block md:hidden h-10 w-auto object-contain"
          />
        </button>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex items-center  gap-8 font-semibold text-black justify-center mr-1"
          style={{ fontFamily: "'Fenomen Sans', sans-serif" }}
        >
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer hover:text-[#fece1a] transition-colors"
              onClick={() => handleScrollTo(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0  w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul
          className="flex flex-col items-center justify-center gap-6 px-6 py-4 font-semibold text-black text-center"
          style={{ fontFamily: "'Fenomen Sans', sans-serif" }}
        >
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer hover:text-[#fece1a] transition-colors"
              onClick={() => handleScrollTo(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
};
