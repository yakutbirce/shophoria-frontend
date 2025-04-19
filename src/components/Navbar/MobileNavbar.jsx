import React, { useState } from "react";
import { User, Search, ShoppingCart, Menu } from "lucide-react";
import NavLinks from "../common/NavLinks";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="w-full bg-white px-9 py-6 flex justify-between items-center">
        {/* Sol taraf: Logo */}
        <Link to="/" aria-label="Homepage" className="text-2xl font-bold tracking-normal text-slate-800">
    Bandage
  </Link>

        {/* Sağ taraf: İkonlar */}
        <div className="flex items-center gap-4">
          <Link to="/login-register" aria-label="User" className="focus:outline-none">
            <User size={24} />
          </Link>
          <Link to="/search" aria-label="Search" className="focus:outline-none">
            <Search size={24} />
          </Link>
          <Link to="/cart" aria-label="Cart" className="focus:outline-none">
            <ShoppingCart size={24} />
          </Link>
          <button
            aria-label="Menu"
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      
      <nav className={`px-4 overflow-hidden transition-all duration-500 ease-in-out transform
          ${isMenuOpen ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}
        `}
      >
        <NavLinks />
      </nav>
    </>
  );
};

export default MobileNavbar;
