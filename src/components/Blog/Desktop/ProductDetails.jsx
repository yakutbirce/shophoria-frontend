import React from "react";
import { Star, Download, AlarmClock, BarChart2 } from "lucide-react";

const ProductDetails = ({
  category,
  rating,
  title,
  description,
  sales,
  prices,
  lessonInfo,
}) => {
  return (
    <article className="flex flex-col p-6 w-full max-w-xs">
      {/* Başlık ve Puan */}
      <div className="flex justify-between items-center w-full mb-2">
        <h6 className="text-sm font-bold text-sky-500">{category}</h6>
        <div className="flex items-center gap-1.5 bg-slate-800 text-white text-xs font-medium px-2 py-1 rounded-full">
          <Star size={14} fill="#FFD700" stroke="none" />
          {rating}
        </div>
      </div>

      <h5 className="text-base font-bold text-slate-800">{title}</h5>

      <p className="text-sm text-neutral-500 mt-2 leading-5 whitespace-pre-line">
        {description}
      </p>

      {/* Sales - Download */}
      <div className="flex items-center gap-2 text-sm font-bold text-neutral-500 mt-2">
        <Download size={16} />
        <span>{sales.count} Sales</span>
      </div>

      {/* Price */}
      <div className="flex gap-2 text-base font-bold mt-2">
        <span className="text-stone-300 line-through">{prices.original}</span>
        <span className="text-teal-700">{prices.discounted}</span>
      </div>

      {/* Colors */}
      <div className="flex gap-2 mt-2">
        {["bg-sky-500", "bg-teal-700", "bg-orange-400", "bg-slate-800"].map((color, index) => (
          <div key={index} className={`w-4 h-4 rounded-full ${color}`} />
        ))}
      </div>

      {/* 3 ikon yanyana */}
      <div className="flex items-center gap-6 text-xs text-neutral-500 mt-4">
        <div className="flex items-center gap-1.5">
          <AlarmClock size={14} className="text-[#23A6F0]" />
          <span>{lessonInfo[0].text}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <BarChart2 size={14} className="text-[#F29C1F]" />
          <span>{lessonInfo[1].text}</span>
        </div>
        <div className="flex items-center gap-1.5">
        <Download size={16} />
          <span>{lessonInfo[2].text}</span>
        </div>
      </div>

      {/* Learn More Butonu */}
      <button className="flex items-center gap-2 border border-sky-500 text-sky-500 font-bold text-sm px-3 py-2 mt-4 rounded-full hover:bg-sky-50 transition w-fit">
  Learn More
  <svg
    width="9"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205Z"
      fill="#23A6F0"
    />
  </svg>
</button>

    </article>
  );
};

export default ProductDetails;
