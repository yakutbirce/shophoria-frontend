import CircleDecoration from "./CircleDecoration";

function SummerCollection() {
  return (
    <section className="flex flex-col justify-center items-center rounded-3xl bg-[linear-gradient(90deg,#96E9FB_0%,#ABECD6_100%)] h-[902px] max-md:py-16 max-md:h-auto max-sm:py-10">
      <div className="flex flex-col gap-16 items-center pt-20 w-[388px] max-md:pt-10 max-md:w-[90%] max-sm:gap-10 max-sm:pt-5">
        <div className="flex flex-col gap-8 items-center w-[394px] max-md:w-full">
          <h2 className="text-base font-bold tracking-normal leading-6 text-sky-600">
            SUMMER 2025
          </h2>
          <h1 className="text-4xl font-bold tracking-wide text-center leading-[50px] text-slate-800 max-md:text-3xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9">
            NEW COLLECTION
          </h1>
          <p className="text-xl tracking-wide leading-8 text-center text-neutral-500 max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex gap-2.5 items-center">
            <button
              className="px-10 py-4 text-2xl font-bold tracking-normal leading-8 text-center text-white bg-sky-500 rounded-md max-md:text-xl max-sm:w-full max-sm:text-lg"
              aria-label="Shop now for summer 2020 collection"
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-[453px] max-md:h-auto">
          <CircleDecoration />
        </div>
      </div>
    </section>
  );
}

export default SummerCollection;
