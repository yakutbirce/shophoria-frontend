
import React from "react";
import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      title: "NEW COLLECTION",
      subtitle: "SUMMER 2020",
      description:
        "We know how large objects will act, but things on a small scale.",
    },
    {
      title: "FRESH LOOKS",
      subtitle: "SPRING 2021",
      description:
        "Design that makes you stand out and shine in the crowd.",
    },
    {
      title: "TRENDING NOW",
      subtitle: "WINTER 2022",
      description:
        "Experience the best styling tips of the season, curated just for you.",
    },
  ];

  return (
    <Slider key={slides.length} {...settings}>

      {slides.map((slide, index) => (
        <div key={index}>
          <article className="flex flex-col gap-6 items-center pt-10 text-center max-w-[394px] mx-auto">
            <p className="text-base font-bold text-sky-600">
              {slide.subtitle}
            </p>
            <h1 className="text-4xl font-bold text-slate-800 leading-[50px]">
              {slide.title}
            </h1>
            <p className="text-xl text-neutral-500 leading-8">
              {slide.description}
            </p>
            <button className="px-10 py-4 mt-4 text-2xl font-bold text-white bg-sky-500 rounded-md">
              SHOP NOW
            </button>
          </article>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
