import React from "react";
import { LayoutGrid, List } from "lucide-react";

const FilterRow = () => {
  return (
    <section className="w-full py-6 bg-white">
    <div className="max-w-[1050px] mx-auto w-full px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
      
      {/* Sol */}
      <div className="text-sm font-semibold text-neutral-500 text-center md:text-left">
        Showing all 12 results
      </div>
  
      {/* Orta */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-neutral-700">Views:</span>
        <button className="p-2 border border-neutral-200 rounded bg-white shadow-sm hover:bg-slate-100">
          <LayoutGrid size={16} fill="black" />
        </button>
        <button className="p-2 border border-neutral-200 rounded bg-white shadow-sm hover:bg-slate-100">
          <List size={16} />
        </button>
      </div>
  
      {/* Sağ */}
      <div className="flex items-center gap-2 md:translate-x-[66px]">
  <select className="border border-neutral-200 text-sm px-3 py-2 rounded text-neutral-700 bg-white shadow-sm hover:border-slate-300 focus:outline-none">
    <option>Popularity</option>
  </select>
  <button className="px-5 py-2 text-sm font-semibold text-white bg-sky-500 rounded hover:bg-sky-600 transition">
    Filter
  </button>
</div>

  
    </div>
  </section>
  
  );
};

export default FilterRow;
