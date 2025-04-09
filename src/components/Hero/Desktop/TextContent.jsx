import React from "react";
import ShopButton from "./ShopButton";

const TextContent = () => {
  return (
    <article className="flex flex-col gap-8 justify-center items-start py-12 max-w-[548px] max-md:items-center max-md:text-center max-sm:items-center max-sm:text-center">
      <p className="text-base font-bold tracking-normal leading-6 text-sky-600">
        SUMMER 2020
      </p>
      <h1 className="text-6xl font-bold tracking-wide leading-[80px] text-slate-800 max-md:text-5xl max-md:leading-[60px] max-sm:text-4xl max-sm:leading-10">
        NEW COLLECTION
      </h1>
      <p className="text-xl tracking-wide leading-8 text-neutral-500 max-md:text-lg max-sm:text-base">
        We know how large objects will act, but things on a small scale.
      </p>
      <ShopButton />
    </article>
  );
};

export default TextContent;
