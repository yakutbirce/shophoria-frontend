import React from "react";
import { Heart, Search, Eye } from "lucide-react";

const iconComponents = {
  "/icons/favorite.svg": <Heart size={20} strokeWidth={1.5} />,
  "/icons/search.svg": <Search size={20} strokeWidth={1.5} />,
  "/icons/eye.svg": <Eye size={20} strokeWidth={1.5} />,
};

const ProductActions = ({ images }) => {
  return (
    <div className="flex absolute gap-2.5 top-[320px] left-5 max-md:top-[200px] max-md:left-2">
      {images.map((src, index) => (
        <button
          key={index}
          className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          aria-label={`Action ${index + 1}`}
        >
          {iconComponents[src]}
        </button>
      ))}
    </div>
  );
};

export default ProductActions;
