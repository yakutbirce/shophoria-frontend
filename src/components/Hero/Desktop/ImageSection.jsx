import React from "react";

const ImageSection = () => {
  return (
    <div className="flex relative justify-center items-center h-[619px] w-[697px] max-md:w-full max-md:h-[400px] max-sm:w-full max-sm:h-[300px]">
      <div className="relative w-full h-full">
        <svg
          width="696"
          height="619"
          viewBox="0 0 696 619"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="absolute left-[6px] top-[-70px] w-full h-full"
        >
          <circle cx="378.42" cy="237.941" r="249.941" fill="white" />
          <circle cx="108.135" cy="40.3132" r="39.9615" fill="white" />
          <rect x="0.5" y="-55" width="696" height="699" fill="url(#pattern0)" />
          <circle cx="656.333" cy="259.375" r="15.6213" fill="white" />
          <circle cx="671.591" cy="121.326" r="7.62901" fill="#977DF4" />
          <circle cx="100.505" cy="417.767" r="7.62901" fill="#977DF4" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0" transform="matrix(0.00060904 0 0 0.000606392 -0.113276 0.164681)" />
            </pattern>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ImageSection;
