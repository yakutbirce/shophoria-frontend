import { Phone, Mail, Instagram, Facebook, Twitter, Youtube, ShoppingCart, Heart, User, ChevronDown, Search } from 'lucide-react'; 
import React from "react";

export const DesktopNavbar = () => {
  return (
    <header className="bg-[#252B42] pt-3 w-full absolute left-0 top-0">
      <div className="flex justify-between items-center text-white text-sm w-full px-6">
        {/* Left Side: Phone & Email */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Center: Promo Text */}
        <div className="text-center flex-grow">
          <span className="text-xs md:text-sm">
            Follow Us and get a chance to win 80% off
          </span>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center space-x-6 cursor-pointer">
          <Instagram className="w-6 h-6" />
          <Facebook className="w-6 h-6" />
          <Twitter className="w-6 h-6" />
          <Youtube className="w-6 h-6" />
        </div>
      </div>
      
      {/* Light Navbar Section */}
      <div className="bg-[#F5F7FA] w-full py-1 mt-1">
        <div className="w-full px-6 flex justify-between items-center max-w-[1437px] h-[50px] mx-auto">
          {/* Brand Name */}
          <div className="text-2xl text-[#1A1A1A] font-semibold">Bandage</div>

          {/* Menu Items */}
          <div className="flex items-center space-x-8 ml-[-240px]">
            <span className="text-gray-800 cursor-pointer">Home</span>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-gray-800">Shop</span>
              <ChevronDown className="w-4 h-4" /> 
            </div>
            <span className="text-gray-800 cursor-pointer">About</span>
            <span className="text-gray-800 cursor-pointer">Blog</span>
            <span className="text-gray-800 cursor-pointer">Contact</span>
            <span className="text-gray-800 cursor-pointer">Pages</span>
          </div>

          {/* Right Side: Login / Register, Icons */}
          <div className="flex items-center space-x-6 ">
            <User className="w-5 h-5 text-[#23A6F0] cursor-pointer " />
            <span className=" text-[#23A6F0] cursor-pointer">Login / Register</span> 
            <Search className="w-5 h-5 text-[#23A6F0] cursor-pointer" /> 
            <ShoppingCart className="w-5 h-5 text-[#23A6F0] cursor-pointer" /> 
            <Heart className="w-5 h-5 text-[#23A6F0] cursor-pointer" /> 
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavbar;
