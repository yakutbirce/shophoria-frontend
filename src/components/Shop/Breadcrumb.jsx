import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center gap-2 text-sm px-4 md:px-6 py-2.5">
      <a href="/" className="text-slate-800 hover:underline">Home</a>
      <ChevronRight className="w-4 h-4 text-neutral-400" />
      <span className="text-neutral-500">Shop</span>
    </nav>
  );
};

export default Breadcrumb;
