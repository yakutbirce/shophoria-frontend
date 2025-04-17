import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Heart, ShoppingCart, Eye, ChevronRight, ChevronLeft, Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const SampleNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 rounded-full p-1"
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 rounded-full p-1"
    onClick={onClick}
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </div>
);

const ProductDetailContent = () => {
    const images = [
        "https://placehold.co/506x450?text=Image+1",
        "https://placehold.co/506x450?text=Image+2",
      ];
      

  const thumbnails = [
    "https://placehold.co/100x75?text=Thumb+1",
    "https://placehold.co/100x75?text=Thumb+2",
  ];

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [selectedThumbIndex, setSelectedThumbIndex] = useState(0);

  return (
    <section className="bg-neutral-50 py-12">
      <div className="max-w-[1050px] mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-12">
        {/* LEFT - Slider & Thumbnails */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-full max-w-[348px] md:max-w-[506px]">
          <Slider ref={sliderRef} {...sliderSettings}>
              {images.map((src, index) => (
                <div key={index}>
                  <img
                    src={src}
                    alt={`Product ${index + 1}`}
                    className="w-full h-auto object-cover "
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="w-full max-w-[348px] md:max-w-[506px] flex gap-4 mt-6 self-start">
  {thumbnails.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Thumbnail ${index + 1}`}
      onClick={() => {
        setSelectedThumbIndex(index);
        sliderRef.current?.slickGoTo(index);
      }}
      
      className={`w-[100px] h-[75px] object-cover border cursor-pointer transition-opacity duration-200 ${
        selectedThumbIndex === index ? "opacity-100" : "opacity-50"
      }`}
    />
  ))}
</div>


        </div>

        {/* RIGHT - Product Info */}
        <div className="w-full md:w-1/2 flex flex-col px-2">
          <h1 className="text-xl tracking-wide text-slate-800">Floating Phone</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <Star key={i} fill="#FACC15" stroke="#FACC15" className="w-5 h-5" />
              ))}
              <Star className="w-5 h-5 text-gray-300" />
            </div>
            <span className="text-sm font-bold text-neutral-500">10 Reviews</span>
          </div>

          {/* Price */}
          <h2 className="mt-5 text-2xl font-bold text-slate-800">$1,139.33</h2>

          {/* Availability */}
          <div className="flex gap-1.5 items-center mt-2 text-sm font-bold">
            <span className="text-neutral-500">Availability :</span>
            <span className="text-sky-500">In Stock</span>
          </div>

          {/* Description */}
          <p className="mt-8 text-sm text-zinc-500 leading-6">
            Met minim Mollie non desert <br />
            Alamo est sit cliquey dolor do <br />
            met sent. RELIT official consequent <br />
            door ENIM RELIT Mollie. Excitation <br />
            venial consequent sent nostrum met.
          </p>

          <hr className="mt-4 w-full h-px bg-stone-300 border-0" />

          {/* Color Options */}
          <div className="flex gap-2.5 items-center mt-5">
            {["bg-sky-500", "bg-green-500", "bg-orange-400", "bg-slate-800"].map((color, i) => (
              <button
                key={i}
                className={`w-[30px] h-[30px] rounded-full ${color}`}
                aria-label={`Color ${i}`}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2.5 items-center mt-8">
            <button className="px-5 py-2.5 bg-sky-500 text-white rounded-md font-bold">
              Select Options
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-full border">
              <Heart className="w-5 h-5 text-slate-700" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border">
              <ShoppingCart className="w-5 h-5 text-slate-700" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border">
              <Eye className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailContent;
