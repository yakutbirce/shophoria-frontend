import React from "react";

const products = [
  {
    image: "https://via.placeholder.com/183x238?text=Product+1",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/183x238?text=Product+2",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/183x238?text=Product+3",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/183x238?text=Product+4",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/183x238?text=Product+5",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/183x238?text=Product+6",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/183x238?text=Product+7",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/183x238?text=Product+8",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/183x238?text=Product+9",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
  {
    image: "https://via.placeholder.com/183x238?text=Product+10",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    salePrice: "6.48",
  },
];

const DesktopProductCards = () => {
  return (
    <section className="flex flex-col items-center px-48 py-20 mx-auto w-full bg-white max-md:px-10 max-md:py-16 max-md:max-w-[991px] max-sm:px-5 max-sm:py-10 max-sm:max-w-screen-sm">
      {/* Başlıklar */}
      <header className="flex flex-col gap-2.5 items-center mb-6 text-center">
        <p className="text-xl tracking-wide leading-8 text-neutral-500">
          Featured Products
        </p>
        <h2 className="text-2xl font-bold text-slate-800 leading-8">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-sm tracking-wide leading-5 text-neutral-500">
          Problems trying to resolve the conflict between
        </p>
      </header>

      {/* Grid */}
      <div className="grid gap-8 mb-6 grid-cols-[repeat(5,1fr)] max-md:grid-cols-[repeat(3,1fr)] max-sm:grid-cols-[repeat(2,1fr)] max-sm:gap-5">
        {products.map((product, index) => (
          <article
            key={index}
            className="flex flex-col bg-white w-[183px] max-sm:w-full"
          >
            <img
              src={product.image}
              alt={product.title}
              className="object-cover h-[238px] w-[183px] max-sm:w-full"
            />
            <div className="flex flex-col gap-2.5 items-center px-6 pt-6 pb-9">
              <h3 className="text-base font-bold text-slate-800 leading-6">
                {product.title}
              </h3>
              <p className="text-sm font-bold text-neutral-500 leading-6">
                {product.department}
              </p>
              <div className="flex gap-1.5">
                <span className="text-base font-bold text-stone-300 line-through">
                  ${product.originalPrice}
                </span>
                <span className="text-base font-bold text-teal-700">
                  ${product.salePrice}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <button className="px-10 py-4 text-sm font-bold text-sky-500 rounded-md border border-sky-500">
        LOAD MORE PRODUCTS
      </button>
    </section>
  );
};

export default DesktopProductCards;
