import React from "react";

const products = [
  {
    image: "https://via.placeholder.com/343x418?text=Product+1",
    title: "Graphic Design",
    category: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/343x418?text=Product+2",
    title: "Graphic Design",
    category: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/343x418?text=Product+3",
    title: "Graphic Design",
    category: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/343x418?text=Product+4",
    title: "Graphic Design",
    category: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/343x418?text=Product+5",
    title: "Graphic Design",
    category: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
];

const MobileProductCards = () => {
  return (
    <section className="flex flex-col items-center py-20 w-full bg-white">
      {/* Başlık */}
      <div className="text-center max-w-[300px] w-full">
        <h2 className="text-2xl font-bold text-slate-800 leading-8">
          BESTSELLER PRODUCTS
        </h2>
        <p className="mt-2.5 text-sm text-neutral-500 leading-5">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Ürün Grid */}
      <div className="flex flex-col items-center mt-6 w-[343px] max-w-full">
        {products.map((product, index) => (
          <div key={index} className={`w-full ${index > 0 ? "mt-8" : ""}`}>
            <article className="overflow-hidden w-full bg-white">
              <div className="w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full aspect-[0.82]"
                />
              </div>
              <div className="flex flex-col items-center px-6 pt-6 pb-9 w-full text-base font-bold text-center">
                <h3 className="text-slate-800">{product.title}</h3>
                <p className="mt-2.5 text-sm text-neutral-500">
                  {product.category}
                </p>
                <div className="flex gap-1.5 mt-2.5">
                  <span className="text-stone-300 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="text-teal-700">
                    ${product.salePrice}
                  </span>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Load More */}
      <button className="px-10 py-4 mt-6 text-sm font-bold text-sky-500 rounded-md border border-sky-500">
        LOAD MORE PRODUCTS
      </button>
    </section>
  );
};

export default MobileProductCards;
