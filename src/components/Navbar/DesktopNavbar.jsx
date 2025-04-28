import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom"; 
import Gravatar from "react-gravatar";
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
  ChevronDown,
} from "lucide-react";

const DesktopNavbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const history = useHistory(); 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const userInfo = useSelector((s) => s.user.userInfo);
  const categories = useSelector((s) => s.category.categories || []);
  const women = categories.filter((c) => c.gender === "k");
  const men = categories.filter((c) => c.gender === "e");

  return (
    <div className="w-full">
      {/* Üst Bar */}
      <div className="w-full bg-[#252B42] text-white text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
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
          <div>
            <span>Follow Us and get a chance to win 80% off</span>
          </div>
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
          <div className="text-2xl font-bold">Bandage</div>

          <nav className="flex gap-8 items-center">
            <Link to="/" className="text-lg text-neutral-600 hover:text-neutral-800">
              Home
            </Link>

            {/* Shop dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                  history.push("/shop"); 
                }}
                className="flex items-center gap-1 text-lg text-neutral-600 hover:text-neutral-800 cursor-pointer"
              >
                Shop <ChevronDown size={16} />
              </button>

              {open && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded p-4 w-64 grid grid-cols-2 gap-4 z-50">
                  {/* Kadın */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Kadın</h4>
                    <ul className="space-y-1">
                      {women.map((c) => {
                        const slug = c.code.split(":")[1];
                        return (
                          <li key={c.id}>
                            <Link
                              to={`/shop/${c.gender}/${slug}/${c.id}`}
                              className="text-sm hover:text-blue-600"
                            >
                              {c.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* Erkek */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Erkek</h4>
                    <ul className="space-y-1">
                      {men.map((c) => {
                        const slug = c.code.split(":")[1];
                        return (
                          <li key={c.id}>
                            <Link
                              to={`/shop/${c.gender}/${slug}/${c.id}`}
                              className="text-sm hover:text-blue-600"
                            >
                              {c.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-lg text-neutral-600 hover:text-neutral-800">
              About
            </Link>
            <Link to="/blog" className="text-lg text-neutral-600 hover:text-neutral-800">
              Blog
            </Link>
            <Link to="/contact" className="text-lg text-neutral-600 hover:text-neutral-800">
              Contact
            </Link>
            <Link to="/team" className="text-lg text-neutral-600 hover:text-neutral-800">
              Team
            </Link>
          </nav>

          {/* Sağ taraf: kullanıcı + ikonlar */}
          <div className="flex items-center space-x-4">
            {userInfo && (
              <div className="flex items-center gap-2">
                <Gravatar email={userInfo.email} className="rounded-full w-6 h-6" default="mp" />
                <span className="text-sm text-neutral-700 font-semibold">
                  Welcome, {userInfo.name || userInfo.email}
                </span>
              </div>
            )}
            <Link to="/login-register" className="text-blue-500 hover:underline">
              Login / Register
            </Link>
            <button aria-label="Search"><Search size={20} /></button>
            <button aria-label="Shopping Cart"><ShoppingCart size={20} /></button>
            <button aria-label="Wishlist"><Heart size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
