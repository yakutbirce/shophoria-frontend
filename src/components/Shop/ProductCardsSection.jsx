import React from "react";
import { Link } from "react-router-dom";

// Ürün Kartı
const ProductCard = () => {
  return (
    <div className="flex flex-col items-center gap-3 px-2 md:px-4 mb-14">
      {/* Görsel Placeholder */}
      <div className="w-full aspect-[348/427] md:aspect-[239/300] max-w-[348px] md:max-w-[239px] bg-gray-300" />

      {/* Başlıklar */}
      <div className="text-center">
        <h3 className="text-base font-semibold text-gray-900">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
      </div>

      {/* Fiyat */}
      <div className="flex gap-2 items-center">
        <span className="text-gray-400 line-through text-sm">$16.48</span>
        <span className="text-green-600 font-semibold text-sm">$6.48</span>
      </div>

      {/* Renk Daireleri */}
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-cyan-500" />
        <span className="w-3 h-3 rounded-full bg-green-600" />
        <span className="w-3 h-3 rounded-full bg-orange-500" />
        <span className="w-3 h-3 rounded-full bg-slate-800" />
      </div>
    </div>
  );
};

// Kartları Listeleyen Ana Bileşen
const ProductCardsSection = ({ currentPage }) => {
  const allProducts = Array.from({ length: 36 }); // Simülasyon: 36 ürün var
  const productsPerPage = 12;

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = allProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <section className="flex flex-col items-center px-4 py-10 bg-white">
      <div className="flex flex-wrap justify-start max-w-[1300px]">
        {currentProducts.map((_, i) => (
          <div key={i} className="w-full md:w-1/4">
            <Link to={`/product/${i + 1}`} className="block hover:cursor-pointer">
              <ProductCard />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCardsSection;
