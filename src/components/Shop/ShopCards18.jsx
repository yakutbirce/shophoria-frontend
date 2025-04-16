import React from "react";

const cards = [
  {
    id: 1,
    imageUrl: "https://placehold.co/300x300?text=CLOTHS+1",
    title: "CLOTHS",
    itemCount: 5,
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/300x300?text=CLOTHS+2",
    title: "CLOTHS",
    itemCount: 5,
  },
  {
    id: 3,
    imageUrl: "https://placehold.co/300x300?text=CLOTHS+3",
    title: "CLOTHS",
    itemCount: 5,
  },
  {
    id: 4,
    imageUrl: "https://placehold.co/300x300?text=CLOTHS+4",
    title: "CLOTHS",
    itemCount: 5,
  },
  {
    id: 5,
    imageUrl: "https://placehold.co/300x300?text=CLOTHS+5",
    title: "CLOTHS",
    itemCount: 5,
  },
];

const ShopCards18 = () => {
  return (
    <div className="mt-10 w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((card) => (
          <article
            key={card.id}
            className="relative overflow-hidden aspect-[1.1] bg-white flex items-center justify-center px-8 py-28"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 text-white text-center">
              <h3 className="text-base font-bold tracking-normal">{card.title}</h3>
              <p className="mt-2 text-sm tracking-wide leading-6">{card.itemCount} Items</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ShopCards18;
