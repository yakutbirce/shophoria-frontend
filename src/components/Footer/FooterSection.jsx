import React from "react";

const FooterSection = ({ title, links }) => {
  return (
    <section className="flex flex-col gap-3 min-w-[140px]">
      <h3 className="text-base font-bold tracking-normal text-slate-800">
        {title}
      </h3>
      <nav className="flex flex-col gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-sm tracking-wide text-neutral-500 hover:text-slate-800 transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>
    </section>
  );
};

export default FooterSection;
