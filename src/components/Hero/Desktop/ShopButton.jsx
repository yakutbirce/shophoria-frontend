import React from "react";

const ShopButton = () => {
  return (
    <div className="flex items-start">
      <button
        className="px-10 py-4 text-2xl font-bold tracking-normal leading-8 text-center text-white bg-sky-500 rounded-md duration-300 cursor-pointer hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 max-md:text-xl max-sm:text-lg"
        aria-label="Shop Now"
      >
        SHOP NOW
      </button>
    </div>
  );
};

export default ShopButton;
