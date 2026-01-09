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
} from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Clients", href: "#clients" },
    { name: "Contact Us", href: "#contact" },
    { name: "Catalogue", href: "#catalogue" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

          {/* LEFT SECTION */}
          <div className="space-y-8">
            {/* Logo */}
            <img
              src="/logo.png"
              alt="Company Logo"
              className="h-16 object-contain"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.src =
                  "https://via.placeholder.com/200x80/fece1a/1f2937?text=Your+Logo";
              }}
            />

            {/* Description */}
            <p className="text-gray-700 max-w-md leading-relaxed">
              We are dedicated to delivering excellence and innovation in everything we do.
              Your trusted partner for modern business solutions.
            </p>

            {/* Social Icons */}
            <div>
              <h4 className="text-sm font-bold uppercase mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#fece1a] text-black hover:scale-110 transition"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-bold uppercase mb-3">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-2 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#fece1a]"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-5 py-3 bg-[#fece1a] rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-yellow-400 transition"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
         {/* RIGHT SECTION */}
<div className="grid grid-cols-2 gap-8 lg:gap-2 mt-15">
  {/* Quick Links */}
  <div>
    <h3 className="text-xl font-bold border-b-2 border-[#fece1a] inline-block mb-6">
      Quick Links
    </h3>
    <ul className="space-y-3">
      {quickLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="flex items-center gap-2 text-gray-700 hover:text-[#fece1a] transition"
          >
            <ArrowRight size={14} />
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Contact Info */}
  <div>
    <h3 className="text-xl font-bold border-b-2 border-[#fece1a] inline-block mb-6">
      Get In Touch
    </h3>

    <div className="space-y-5 text-gray-700">
      <div>
        <div className="flex items-center gap-3 font-semibold">
          <Mail size={18} />
          Email
        </div>
        <a href="mailto:info@company.com" className="ml-7 block hover:text-[#fece1a]">
info@anpipe.com.pk <br />
Sales@anpipe.com.pk        </a>
      </div>

      <div>
        <div className="flex items-center gap-3 font-semibold">
          <Phone size={18} />
          Phone
        </div>
        <a href="tel:+15551234567" className="ml-7 block hover:text-[#fece1a]">
+ 92 42 37963775        </a>
      </div>

      <div>
        <div className="flex items-center gap-3 font-semibold">
          <MapPin size={18} />
          Address
        </div>
        <p className="ml-7 leading-relaxed">
        9-KM G.T. Road, Ferozewala, Shahdara Lahore 54950, Pakistan.

        <br />
        47-Umer Market Railway Road, Lahore.


        </p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 text-center text-sm text-gray-600 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
          <span>© 2026 An Pipe Industrial (Pvt) Ltd. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};
