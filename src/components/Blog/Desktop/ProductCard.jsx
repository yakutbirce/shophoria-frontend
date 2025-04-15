import React from "react";
import ProductActions from "./ProductActions";
import ProductDetails from "./ProductDetails";

const ProductCard = ({ imageUrl, actionImages, productDetails }) => {
  return (
    <article className="flex flex-wrap bg-white shadow-md rounded-md overflow-hidden w-full max-w-[508px]">
      {/* Sol: Ürün görseli ve ikonlar */}
      <div className="relative w-full max-w-[209px]">
        <img
          src={imageUrl}
          alt={productDetails.title}
          className="object-cover w-full h-full"
        />
        {/* "Sale" etiketi */}
        <span className="absolute top-5 left-5 px-2.5 py-0.5 text-sm font-bold tracking-wide leading-6 text-white bg-red-500 rounded shadow-sm">
          Sale
        </span>
        {/* Ürün aksiyon ikonları */}
        <ProductActions images={actionImages} />
      </div>

      {/* Sağ: Ürün detayları */}
      <ProductDetails {...productDetails} />
    </article>
  );
};

export default ProductCard;
