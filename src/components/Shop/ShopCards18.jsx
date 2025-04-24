import React from "react";
import { useSelector } from "react-redux";

const ShopCards18 = () => {
  const categories = useSelector((state) => state.product.categories);

  const topCategories = [...categories]
    .filter(c => c.rating !== undefined) // sadece rating olanlar
    .sort((a, b) => b.rating - a.rating)  // büyükten küçüğe sırala
    .slice(0, 5);                         // ilk 5ini al

  return (
    <div className="mt-10 w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {topCategories.map((cat) => (
          <article
            key={cat.id}
            className="relative overflow-hidden aspect-[1.1] bg-white flex items-center justify-center px-8 py-28"
          >
            <img
              src={cat.img || "https://placehold.co/300x300?text=No+Image"}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 text-white text-center">
              <h3 className="text-base font-bold tracking-normal">{cat.title}</h3>
              <p className="mt-2 text-sm tracking-wide leading-6">
                {cat.productCount || cat.itemCount || 5} Items
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ShopCards18;
