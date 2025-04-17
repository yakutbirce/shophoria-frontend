import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import ShopCards18 from "./ShopCards18";
import FilterRow from "./FilterRow";
import ProductCardsSection from "./ProductCardsSection";
import Pagination from "./Pagination";
import Clients from "../Clients";



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
