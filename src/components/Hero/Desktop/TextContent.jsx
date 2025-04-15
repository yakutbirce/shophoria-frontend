import React from "react";
import Slider from "react-slick";
import ShopButton from "./ShopButton";

const TextContent = () => {
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
      subtitle: "SUMMER 2025",
      title: "NEW COLLECTION",
      description: "We know how large objects will act, but things on a small scale.",
    },
    {
      subtitle: "SPRING 2021",
      title: "FRESH LOOKS",
      description: "Design that makes you stand out and shine in the crowd.",
    },
    {
      subtitle: "WINTER 2022",
      title: "TRENDING NOW",
      description: "Experience the best styling tips of the season, curated just for you.",
    },
  ];

  return (
    <div className="w-full max-w-[548px]">
      <Slider key={slides.length} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <article className="flex flex-col gap-8 justify-center items-start py-12 max-md:items-center max-md:text-center">
              <p className="text-base font-bold tracking-normal leading-6 text-sky-600">
                {slide.subtitle}
              </p>
              <h1 className="text-6xl font-bold tracking-wide leading-[80px] text-slate-800 max-md:text-5xl max-md:leading-[60px]">
                {slide.title}
              </h1>
              <p className="text-xl tracking-wide leading-8 text-neutral-500 max-md:text-lg">
                {slide.description}
              </p>
              <ShopButton />
            </article>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TextContent;
