import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];


const NavLinks = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="text-xl text-neutral-500 hover:text-neutral-700 transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
