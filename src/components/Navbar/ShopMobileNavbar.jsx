import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  User,
  Search,
  ShoppingCart,
  Heart,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Pages", path: "/pages" },
];

const ShopMobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-slate-800">
          Bandage
        </Link>

        {/* Menü ikonu */}
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <Menu size={24} />
        </button>
      </header>

      {/* Açılır Menü */}
      <nav
        className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${
          isOpen ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-4 items-center py-4 text-lg text-neutral-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-sky-500 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Alt ikonlar */}
        <div className="flex flex-col gap-4 py-6 border-t border-neutral-200 items-center">
          <Link to="/login" className="flex items-center gap-2 text-[#23A6F0] font-medium">
            <User size={20} /> Login / Register
          </Link>
          <Link to="/search" className="flex items-center gap-2 text-[#23A6F0]">
            <Search size={20} /> Search
          </Link>
          <Link to="/cart" className="flex items-center gap-2 text-[#23A6F0]">
            <ShoppingCart size={20} /> Cart
          </Link>
          <Link to="/wishlist" className="flex items-center gap-2 text-[#23A6F0]">
            <Heart size={20} /> Wishlist
          </Link>
        </div>
      </nav>
    </>
  );
};

export default ShopMobileNavbar;
