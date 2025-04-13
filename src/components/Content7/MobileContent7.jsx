import React from "react";

const MobileContent7 = () => {
  return (
    <article className="flex flex-col justify-center items-center py-20">
      <div className="flex flex-col items-center w-full max-w-[373px]">
        {/* Başlık ve Açıklama */}
        <section className="font-bold tracking-wide text-left w-[280px]">
          <h3 className="text-base tracking-normal text-sky-500">
            Featured Products
          </h3>
          <h2 className="mt-4 text-4xl leading-[50px] text-slate-800">
            We love what we do
          </h2>
          <p className="mt-4 text-sm font-normal leading-5 text-neutral-500">
            Problems trying to resolve the conflict between the two major realms of
            Classical physics: <br />
            Newtonian mechanics <br />
            <br />
            Problems trying to resolve the conflict between the two major realms of
            Classical physics: <br />
            Newtonian mechanics
          </p>
        </section>

        {/* Görsel Galeri */}
        <section className="flex gap-6 items-start mt-12 w-full max-w-[375px]">
          <div className="flex gap-3 px-px w-[374px]">
            <img
              src="https://placehold.co/157x360?text=Image+1"
              alt="Featured product 1"
              className="object-contain aspect-[0.43] w-[157px]"
            />
            <img
              src="https://placehold.co/204x360?text=Image+2"
              alt="Featured product 2"
              className="object-contain aspect-[0.56] w-[204px]"
            />
          </div>
        </section>
      </div>
    </article>
  );
};

export default MobileContent7;
