import React from "react";
import { User, Search, ShoppingCart, Menu } from "lucide-react";
import NavLinks from "../common/NavLinks";


const MobileNavbar = () => {
  return (
    <>
      <header className="w-full bg-white px-9 py-6 flex justify-between items-center">
        {/* Sol taraf: Logo */}
        <h1 className="text-2xl font-bold tracking-normal text-slate-800">
          Bandage
        </h1>
        {/* Sağ taraf: İkonlar - Sıralama: User, Search, Cart, Hamburger */}
        <div className="flex items-center gap-4">
          <button aria-label="User" className="focus:outline-none">
            <User size={24} />
          </button>
          <button aria-label="Search" className="focus:outline-none">
            <Search size={24} />
          </button>
          <button aria-label="Cart" className="focus:outline-none">
            <ShoppingCart size={24} />
          </button>
          <button aria-label="Menu" className="focus:outline-none">
            <Menu size={24} />
          </button>
        </div>
      </header>
      {/* NavLinks'i ekliyoruz */}
      <nav className="w-full bg-white py-4">
        <NavLinks />
      </nav>
    </>
  );
};

export default MobileNavbar;
