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
    <section className="flex flex-col justify-center items-center px-4 md:px-20 bg-white overflow-x-hidden">
      <div className="flex flex-col items-center py-20 w-full max-w-screen-xl">
        <SectionHeader />
        <div className="flex flex-wrap gap-8 items-center mt-24 max-md:mt-10 max-md:max-w-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full max-w-[508px]"

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
