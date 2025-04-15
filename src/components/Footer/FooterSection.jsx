import React from "react";
import { Link } from "react-router-dom";

const convertToPath = (text) =>
  "/" +
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const FooterSection = ({ title, links }) => {
  return (
    <section className="flex flex-col gap-3 min-w-[140px]">
      <h3 className="text-base font-bold tracking-normal text-slate-800">
        {title}
      </h3>
      <nav className="flex flex-col gap-2">
        {links.map((link, index) => (
          <Link
            key={index}
            to={convertToPath(link)}
            className="text-sm tracking-wide text-neutral-500 hover:text-slate-800 transition-colors"
          >
            {link}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default FooterSection;
