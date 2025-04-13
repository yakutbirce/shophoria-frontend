import React from "react";

const products = {
  featured: {
    image: "https://placehold.co/611x572?text=Featured+Product",
    title: "Top Product Of the Week",
  },
  standard: [
    {
      image: "https://placehold.co/557x280?text=Product+2",
      title: "Top Product Of the Week",
    },
    {
      image: "https://placehold.co/557x280?text=Product+3",
      title: "Top Product Of the Week",
    },
  ],
};

const ProductOverlay = ({ title, paddingClasses, width }) => (
  <div
    className={`flex absolute bottom-0 left-0 flex-col gap-5 bg-cyan-600 bg-opacity-80 ${paddingClasses}`}
    style={{ width }}
  >
    <h2 className="text-xl tracking-wide leading-8 text-white">{title}</h2>
    <button className="px-10 py-4 text-sm font-bold tracking-wide leading-6 text-white rounded-md border border-white w-fit">
      EXPLORE ITEMS
    </button>
  </div>
);

const DesktopShopCards = () => {
  return (
    <section className="flex gap-4 px-32 py-20 mx-auto bg-white max-w-[1440px] max-md:flex-col max-md:px-5 max-md:py-10 max-sm:px-2.5 max-sm:py-5 max-sm:max-w-screen-sm">
      {/* Featured Card */}
      <article className="relative h-[572px] w-[611px] max-md:w-full">
        <img
          src={products.featured.image}
          alt="Featured product"
          className="object-cover w-full h-full"
        />
        <ProductOverlay
          title={products.featured.title}
          paddingClasses="px-16 pt-16 pb-11"
          width="420px"
        />
      </article>

      {/* Standard Cards */}
      <div className="flex flex-col gap-6">
        {products.standard.map((product, index) => (
          <article key={index} className="relative w-[557px] max-md:w-full">
            <img
              src={product.image}
              alt="Standard product"
              className="object-cover w-full h-full"
            />
            <ProductOverlay
              title={product.title}
              paddingClasses="px-9 pt-10 pb-7"
              width="347px"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default DesktopShopCards;
