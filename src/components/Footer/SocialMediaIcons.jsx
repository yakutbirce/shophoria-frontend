import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const SocialMediaIcons = () => {
  const iconClass = "w-6 h-6 text-sky-500 hover:text-sky-700 transition";

  return (
    <nav className="flex gap-5 items-center mt-4 md:mt-0">
      <a href="#" aria-label="Facebook"><Facebook className={iconClass} /></a>
      <a href="#" aria-label="Instagram"><Instagram className={iconClass} /></a>
      <a href="#" aria-label="Twitter"><Twitter className={iconClass} /></a>
    </nav>
  );
};

export default SocialMediaIcons;
