import React from "react";

export function HeroImage() {
  return (
    <figure className="flex justify-center items-center mt-16 h-[453px] max-md:mt-10 max-md:h-auto">
      <div>
        <svg
          width="387"
          height="376"
          viewBox="0 0 387 376"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="decorative-image"
          style={{ width: "384px", height: "372px" }}
          role="img"
          aria-label="Decorative summer collection illustration"
        >
          <circle cx="184.531" cy="180.949" r="147.182" fill="white" />
          <circle cx="25.3686" cy="64.5729" r="23.532" fill="white" />
          <rect
            x="-29.0001"
            width="410"
            height="433"
            fill="url(#pattern0_1_860)"
          />
          <circle cx="348.185" cy="193.571" r="9.19888" fill="white" />
          <circle cx="357.17" cy="112.279" r="4.49248" fill="#977DF4" />
          <circle cx="20.8761" cy="286.844" r="4.49248" fill="#977DF4" />
          <defs>
            <pattern
              id="pattern0_1_860"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1_860"
                transform="matrix(0.00060904 0 0 0.000606392 -0.113276 0.164681)"
              />
            </pattern>
          </defs>
        </svg>
      </div>
    </figure>
  );
}
