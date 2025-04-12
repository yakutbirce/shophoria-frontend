import React from "react";
import SectionHeader from "../Common/SectionHeader";
import ProductCard from "./ProductCard";

const DesktopBlog2 = () => {
  const products = [
    {
      imageUrl: "/images/product-1.jpg", 
      actionImages: [
        "/icons/favorite.svg",
        "/icons/search.svg",
        "/icons/eye.svg",
      ],
      productDetails: {
        category: "English Department",
        rating: "4.9",
        title: "Graphic Design",
        description:
          "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        sales: {
          icon: "/icons/shopping-cart.svg",
          count: "15",
        },
        prices: {
          original: "$16.48",
          discounted: "$6.48",
        },
        lessonInfo: [
          { icon: "clock", text: "22h..." },
          { icon: "list", text: "64 Lessons" },
          { icon: "download", text: "Progress" },
        ],
      },
    },
    {
      imageUrl: "/images/product-2.jpg",
      actionImages: [
        "/icons/favorite.svg",
        "/icons/search.svg",
        "/icons/eye.svg",
      ],
      productDetails: {
        category: "English Department",
        rating: "4.9",
        title: "Graphic Design",
        description:
          "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        sales: {
          icon: "/icons/shopping-cart.svg",
          count: "15",
        },
        prices: {
          original: "$16.48",
          discounted: "$6.48",
        },
        lessonInfo: [
          { icon: "clock", text: "22h..." },
          { icon: "list", text: "64 Lessons" },
          { icon: "download", text: "Progress" },
        ],
      },
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 bg-white max-md:px-5">
      <div className="flex overflow-hidden flex-col items-center py-20 w-full max-w-[1050px] max-md:max-w-full">
        <SectionHeader />
        <div className="flex flex-wrap gap-8 items-center mt-24 max-md:mt-10 max-md:max-w-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center self-stretch my-auto min-w-60 w-[508px] max-md:max-w-full"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopBlog2;
