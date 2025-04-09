import React from "react";

const products = [
  {
    id: 1,
    title: "Top Product Of the Week",
    image:
      "https://via.placeholder.com/400x556?text=Product+1", // 👈 Builder link yerine placeholder
    height: "556px",
  },
  {
    id: 2,
    title: "Top Product Of the Week",
    image:
      "https://via.placeholder.com/400x398?text=Product+2",
    height: "398px",
  },
  {
    id: 3,
    title: "Top Product Of the Week",
    image:
      "https://via.placeholder.com/400x398?text=Product+3",
    height: "398px",
  },
];

const MobileShopCards = () => {
  return (
    <main className="flex flex-col items-center px-7 w-full bg-white">
      <div className="flex flex-col gap-4 items-start py-6 w-full max-w-[1200px]">
        {products.map((product) => (
          <section
            key={product.id}
            className="flex relative flex-col justify-center items-center w-full"
            style={{ height: product.height }}
          >
            <div className="w-full bg-white" style={{ height: product.height }}>
              <div className="relative w-full h-full">
                <img
                  src={product.image}
                  alt="Featured product"
                  className="w-full h-full object-cover"
                />
                <div className="flex absolute bottom-0 left-0 flex-col gap-7 justify-end items-start px-10 pt-16 pb-9 w-full bg-cyan-600 bg-opacity-80">
                  <h2 className="text-2xl font-bold text-white max-w-48">
                    {product.title}
                  </h2>
                  <button
                    className="px-10 py-4 text-sm font-bold tracking-wide leading-6 text-white rounded-md border border-white border-solid"
                    aria-label="Explore Items"
                  >
                    EXPLORE ITEMS
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default MobileShopCards;
