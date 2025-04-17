import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import ShopCards18 from "./ShopCards18";
import FilterRow from "./FilterRow";
import ProductCardsSection from "./ProductCardsSection";
import Pagination from "./Pagination";
import Clients from "../Clients";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center gap-2 text-sm px-4 md:px-6 py-2.5">
      <a href="/" className="text-slate-800 hover:underline">Home</a>
      <ChevronRight className="w-4 h-4 text-neutral-400" />
      <span className="text-neutral-500">Shop</span>
    </nav>
  );
};

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <section className="bg-neutral-50 py-1 mb-12">
      <div className="w-full max-w-[1050px] mx-auto px-4 md:px-6">
        {/* Başlık ve Breadcrumb */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-2xl font-bold text-center md:text-left text-slate-800">Shop</h1>
          <div className="flex justify-center md:justify-end">
            <Breadcrumb />
          </div>
        </div>
        <ShopCards18 />
      </div>

      <FilterRow />
      <ProductCardsSection currentPage={currentPage} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      <Clients />
    </section>
  );
};

export default ShopPage;
