import React from "react";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

function NavIcons() {
  return (
    <>
      {/* Arama İkonu */}
      <button aria-label="Search" className="focus:outline-none">
        <Search size={24} />
      </button>

      {/* Alışveriş Sepeti */}
      <button aria-label="Shopping Cart" className="focus:outline-none">
        <ShoppingCart size={24} />
      </button>

      {/* Kullanıcı Ayarları (Profil) */}
      <button aria-label="User Settings" className="focus:outline-none">
        <User size={24} />
      </button>

      {/* Menü (Eğer desktopta da hamburger menü göstermek istersen) */}
      <button aria-label="Menu" className="focus:outline-none">
        <Menu size={24} />
      </button>
    </>
  );
}

export default NavIcons;
