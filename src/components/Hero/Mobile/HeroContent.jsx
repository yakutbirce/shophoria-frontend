import React from "react";

export function HeroContent() {
  return (
    <article className="flex flex-col gap-8 items-center pt-20 text-center max-w-[394px] max-md:pt-10 max-md:max-w-full max-sm:gap-6 max-sm:pt-5">
      <p className="text-base font-bold tracking-normal leading-6 text-sky-600">
        SUMMER 2020
      </p>
      <h1 className="text-4xl font-bold tracking-wide leading-[50px] text-slate-800 max-md:text-3xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9">
        NEW
        <br />
        COLLECTION
      </h1>
      <p className="text-xl tracking-wide leading-8 text-neutral-500 max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">
        We know how large objects
        <br />
        will act, but things on a
        <br />
        small scale.
      </p>
      <div>
        <button
          className="px-10 py-4 text-2xl font-bold tracking-normal leading-8 text-white bg-sky-500 rounded-md cursor-pointer max-sm:px-8 max-sm:py-3 max-sm:text-xl"
          aria-label="Shop Now"
        >
          SHOP NOW
        </button>
      </div>
    </article>
  );
}
