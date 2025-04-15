import React from "react";
import iconEasyWins from "../../assets/logos/icon-easywins.png";
import iconConcrete from "../../assets/logos/icon-concrete.png";
import iconHackGrowth from "../../assets/logos/icon-hackgrowth.png";


const Features12 = () => {
  const features = [
    {
      imageSrc: iconEasyWins,
      title: "Easy Wins",
      description: "Get your best looking smile now!",
    },
    {
      imageSrc: iconConcrete,
      title: "Concrete",
      description:
        "Defalcate is most focused in helping you discover your most beautiful smile",
    },
    {
      imageSrc: iconHackGrowth,
      title: "Hack Growth",
      description: "Overcame any hurdle or any other problem.",
    },
  ];
  

  return (
    <section className="flex flex-col justify-center items-center px-20 pb-4 text-center bg-white max-md:px-5">
      <div className="flex flex-col items-center py-20 w-full max-w-[1050px]">
        {/* Header */}
        <header className="flex flex-col items-center tracking-wide text-neutral-500 max-w-full w-[692px]">
          <h2 className="text-xl">Featured Products</h2>
          <h3 className="mt-2.5 text-2xl font-bold text-slate-800">
            THE BEST SERVICES
          </h3>
          <p className="mt-2.5 text-sm leading-none">
            Problems trying to resolve the conflict between
          </p>
        </header>

        {/* Cards */}
        <div className="flex flex-wrap gap-8 justify-center items-start mt-20 max-md:mt-10">
          {features.map((feature, index) => (
            <article
              key={index}
              className="flex flex-col items-center min-w-60 w-[328px]"
            >
              <div className="flex flex-col items-center px-10 py-9 w-full max-w-full max-md:px-5">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="object-contain aspect-square w-[72px]"
                />
                <h3 className="mt-5 text-2xl font-bold text-slate-800">
                  {feature.title}
                </h3>
                <p className="mt-5 text-sm leading-5 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features12;
