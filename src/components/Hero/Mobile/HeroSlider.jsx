import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
      subtitle: "SUMMER 2025",
      description:
        "Step into summer with styles that shine brighter.",
    },
    {
      title: "NEW SEASON, NEW STYLE",
      subtitle: "SPRING 2025",
      description: "Fresh colors, bold cuts, and looks that speak.",
    }
    ,
    {
      title: "STAY WARM, LOOK COOL",
      subtitle: "WINTER 2025",
      description: "Cozy layers made for cold days and hot looks.",
    }
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
            <Link to="/shop">
  <button className="px-10 py-4 mt-4 text-2xl font-bold text-white bg-sky-500 rounded-md">
    SHOP NOW
  </button>
</Link>
          </article>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;