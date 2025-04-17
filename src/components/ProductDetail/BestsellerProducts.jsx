import React from "react";

const products = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  image: `https://placehold.co/348x427?text=Product+${i + 1}`,
  title: "Graphic Design",
  subtitle: "English Department",
  oldPrice: "$16.48",
  newPrice: "$6.48",
}));

const BestsellerProducts = () => {
  return (
    <section className="bg-neutral-50 py-12 px-4 md:px-6">
      {/* Başlık */}
      <div className="max-w-[1050px] mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6 text-center md:text-left">
  BESTSELLER PRODUCTS
</h2>


        {/* Ürün Listesi */}
        <div className="flex flex-col gap-10 items-center md:grid md:grid-cols-4 md:gap-x-6 md:gap-y-10">
          {products.map((product) => (
            <div key={product.id} className="w-full max-w-[348px] md:max-w-[239px]">
              {/* Ürün Görseli */}
              <img
                src={`https://placehold.co/${
                  typeof window !== "undefined" && window.innerWidth >= 768 ? "239x280" : "348x427"
                }?text=Product+${product.id + 1}`}
                alt={product.title}
                className="w-full object-cover"
              />

              {/* Ürün Bilgileri */}
              <div className="bg-white p-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.subtitle}</p>
                <div className="flex gap-2 text-sm font-semibold">
                  <span className="line-through text-gray-400">{product.oldPrice}</span>
                  <span className="text-green-600">{product.newPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerProducts;
