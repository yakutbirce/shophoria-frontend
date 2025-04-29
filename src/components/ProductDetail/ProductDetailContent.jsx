import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/reducers/cartReducer";
import { addProductToCart } from "../../hooks/utils/cartUtils";

import Slider from "react-slick";
import {
  Heart,
  ShoppingCart,
  Eye,
  ChevronRight,
  ChevronLeft,
  Star,
} from "lucide-react";
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

const ProductDetailContent = ({ product }) => {
  const sliderRef = useRef(null);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);


  const handleAddToCart = () => {
    const updatedCart = addProductToCart(cart, product);
    dispatch(setCart(updatedCart));
  };
  
  

  const [selectedThumbIndex, setSelectedThumbIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_, next) => setSelectedThumbIndex(next),
  };

  const images = product?.images?.map((img) => img.url) || [];

  return (
    <section className="bg-neutral-50 py-12">
      
      <style>{`.slick-slide.slick-cloned { display: none !important; }`}</style>

      <div className="max-w-[1050px] mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-12">
        {/* LEFT - Slider & Thumbnails */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="relative w-full max-w-[348px] md:max-w-[506px]">
          <Slider ref={sliderRef} {...sliderSettings}>
  {(product.images.length === 1
    ? [product.images[0], product.images[0]] 
    : product.images
  ).map((img, index) => (
    <div key={index}>
      <img
        src={img.url}
        alt={`Product ${index + 1}`}
        className="w-full h-auto object-cover"
      />
    </div>
  ))}
</Slider>



          </div>

          <div className="w-full max-w-[348px] md:max-w-[506px] flex gap-4 mt-6">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => {
                  setSelectedThumbIndex(index);
                  sliderRef.current?.slickGoTo(index);
                }}
                className={`w-[100px] h-[75px] object-cover border cursor-pointer transition-opacity duration-200 ${
                  selectedThumbIndex === index
                    ? "opacity-100"
                    : "opacity-50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - Product Info */}
        <div className="w-full md:w-1/2 flex flex-col px-2 items-center md:items-start">
          <div className="w-full max-w-[348px] md:max-w-[506px] mx-auto md:mx-0">
            <h1 className="text-xl tracking-wide text-slate-800">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(Math.round(product.rating || 0))].map((_, i) => (
                  <Star
                    key={i}
                    fill="#FACC15"
                    stroke="#FACC15"
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-neutral-500">
                {product.rating?.toFixed(2)} / 5
              </span>
            </div>

            {/* Price */}
            <h2 className="mt-5 text-2xl font-bold text-slate-800">
              ${product.price}
            </h2>

            {/* Availability */}
            <div className="flex gap-1.5 items-center mt-2 text-sm font-bold">
              <span className="text-neutral-500">Availability :</span>
              <span className="text-sky-500">
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Description */}
            <p className="mt-8 text-sm text-zinc-500 leading-6">
              {product.description}
            </p>

            <hr className="mt-4 w-full h-px bg-stone-300 border-0" />

            {/* Color Options */}
            <div className="flex gap-2.5 items-center mt-5">
              {["bg-sky-500", "bg-green-500", "bg-orange-400", "bg-slate-800"].map(
                (color, i) => (
                  <button
                    key={i}
                    className={`w-[30px] h-[30px] rounded-full ${color}`}
                    aria-label={`Color ${i}`}
                  />
                )
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2.5 items-center mt-8">
              <button className="px-5 py-2.5 bg-sky-500 text-white rounded-md font-bold">
                Select Options
              </button>

              <button className="w-10 h-10 flex items-center justify-center rounded-full border">
                <Heart className="w-5 h-5 text-slate-700" />
              </button>
              <button
  onClick={handleAddToCart}
  className="w-10 h-10 flex items-center justify-center rounded-full border"
>
  <ShoppingCart className="w-5 h-5 text-slate-700" />
</button>

              <button className="w-10 h-10 flex items-center justify-center rounded-full border">
                <Eye className="w-5 h-5 text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailContent;
