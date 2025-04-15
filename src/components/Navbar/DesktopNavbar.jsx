import React from "react";
import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Search,
  ShoppingCart,
  Heart,
} from "lucide-react";

const DesktopNavbar = () => {
  return (
    <div className="w-full">
      {/* Üst Bar */}
      <div className="w-full bg-[#252B42] text-white text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
          {/* Sol: Telefon ve E-posta */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span>(225) 555 0173</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={16} />
              <span>mikelewai@example.com</span>
            </div>
          </div>

          {/* Orta: Metin */}
          <div>
            <span>Follow Us and get a chance to win 80% off</span>
          </div>

          {/* Sağ: Sosyal Medya */}
          <div className="flex items-center space-x-2">
            <span>Follow Us:</span>
            <Instagram size={16} />
            <Youtube size={16} />
            <Facebook size={16} />
            <Twitter size={16} />
          </div>
        </div>
      </div>

      {/* Alt Bar */}
      <div className="w-full bg-white text-black shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Sol: Logo */}
          <div className="text-2xl font-bold">Bandage</div>

          {/* Orta: Menü Linkleri */}
          <nav className="flex gap-8">
            <a
              href="/"
              className="text-lg text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              Home
            </a>
            <a
  href="#shop"
  className="text-lg text-neutral-600 hover:text-neutral-800 transition-colors flex items-center gap-1"
>
  Shop
  {/* Aşağı Ok İkonu */}
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7 10l5 5 5-5z" />
  </svg>
</a>
            <a
              href="#about"
              className="text-lg text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-lg text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-lg text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              Contact
            </a>
            <a
              href="#pages"
              className="text-lg text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              Pages
            </a>
          </nav>

          {/* Sağ: Login/Register ve İkonlar */}
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-blue-500 hover:underline">
              Login / Register
            </a>
            <button aria-label="Search" className="focus:outline-none">
              <Search size={20} />
            </button>
            <button aria-label="Shopping Cart" className="focus:outline-none">
              <ShoppingCart size={20} />
            </button>
            <button aria-label="Wishlist" className="focus:outline-none">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
