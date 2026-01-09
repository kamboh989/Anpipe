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

  // Hide / show header on scroll
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
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 ${
        hide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* LOGO */}
        <button onClick={() => handleScrollTo("home")}>
          <img
            src="/logo (1).png"
            alt="Logo"
            className="hidden md:block h-12"
          />
          <img
            src="/logo.png"
            alt="Logo"
            className="md:hidden h-10"
          />
        </button>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex gap-8 font-semibold text-black"
          style={{ fontFamily: "'Fenomen Sans', sans-serif" }}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.type === "scroll" ? (
                <button
                  onClick={() => handleScrollTo(item.id!)}
                  className="hover:text-[#fece1a] transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path!}
                  className="hover:text-[#fece1a] transition-colors"
                >
                  {item.name}
                </Link>
              )}
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
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul
          className="flex flex-col items-center gap-6 py-6 font-semibold"
          style={{ fontFamily: "'Fenomen Sans', sans-serif" }}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.type === "scroll" ? (
                <button
                  onClick={() => handleScrollTo(item.id!)}
                  className="hover:text-[#fece1a]"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path!}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#fece1a]"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
