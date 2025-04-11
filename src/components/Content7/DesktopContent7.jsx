import React from "react";

const DesktopContent7 = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 bg-white max-md:px-5">
      <div className="flex flex-col justify-center py-20 w-full max-w-[1050px]">
        <div className="flex flex-wrap gap-10 items-center w-full">
          {/* Image Gallery */}
          <article className="flex gap-8 w-[424px]">
            <div className="flex gap-5 w-[513px]">
              <div className="w-[44%]">
                <img
                  src="https://via.placeholder.com/217x490?text=Image+1"
                  alt="Gallery image 1"
                  className="object-contain aspect-[0.44] w-full"
                />
              </div>
              <div className="w-[56%]">
                <img
                  src="https://via.placeholder.com/296x528?text=Image+2"
                  alt="Gallery image 2"
                  className="object-contain aspect-[0.56] w-full"
                />
              </div>
            </div>
          </article>

          {/* Text Content */}
          <article className="font-bold tracking-wide w-[358px]">
            <h2 className="text-base text-sky-500">Featured Products</h2>
            <h3 className="mt-4 text-4xl text-slate-800 leading-none">
              We love what we do
            </h3>
            <p className="mt-4 text-sm font-normal leading-5 text-neutral-500">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: <br />
              Newtonian mechanics.
              <br /> <br />
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: <br />
              Newtonian mechanics
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default DesktopContent7;
