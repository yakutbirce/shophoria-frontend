import React from 'react';
import { AlarmClock, ChartArea } from 'lucide-react';

const PostCard = ({ image, date, comments, tags, title, description }) => {
  return (
    <article className="flex flex-col bg-white shadow-sm w-[328px]">
      <div className="relative h-[300px]">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <div className="absolute top-5 left-5 px-2.5 py-0 text-sm font-bold leading-6 text-white bg-red-500 rounded shadow-sm">
          NEW
        </div>
      </div>

      <div className="flex flex-col gap-2.5 px-6 pt-6 pb-9">
        <div className="flex gap-4 items-center">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs tracking-wide leading-4">{tag}</span>
          ))}
        </div>

        <h3 className="text-xl tracking-wide leading-8 text-slate-800">{title}</h3>
        <p className="text-sm tracking-wide leading-5 text-neutral-500">{description}</p>

        <div className="flex justify-between items-center py-4">
          <div className="flex gap-1.5 items-center text-neutral-500 text-xs">
            <AlarmClock size={14} className="text-sky-500" />
            <time>{date}</time>
          </div>
          <div className="flex gap-1.5 items-center text-neutral-500 text-xs">
            <ChartArea size={14} className="text-emerald-700" />
            <span>{comments} comments</span>
          </div>
        </div>

        <button className="flex gap-2.5 items-center text-left cursor-pointer text-sm font-bold tracking-wide leading-6 text-neutral-500">
          Learn More
          <svg
            width="9"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205Z"
              fill="#23A6F0"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default PostCard;
