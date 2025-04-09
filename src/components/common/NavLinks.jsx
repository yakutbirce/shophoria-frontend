import React from "react";

const NavLinks = () => {
  const links = ["Home", "Product", "Pricing", "Contact"];
  return (
    <div className="flex flex-col items-center gap-4">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-xl text-neutral-500 hover:text-neutral-700 transition-colors"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
