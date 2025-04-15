import React from "react";

import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.png";
import logo5 from "../../assets/logos/logo5.png";
import logo6 from "../../assets/logos/logo6.png";

const logos = [
  { src: logo1, width: "150px", aspectRatio: "3" },
  { src: logo2, width: "150px", aspectRatio: "3" },
  { src: logo3, width: "150px", aspectRatio: "3" },
  { src: logo4, width: "150px", aspectRatio: "3" },
  { src: logo5, width: "150px", aspectRatio: "3" },
  { src: logo6, width: "150px", aspectRatio: "3" },
];

const LogoGrid = () => {
  return (
    <section className="flex flex-col items-center py-12 w-full px-4">
      {logos.map((logo, index) => (
        <div key={logo.src} className={index > 0 ? "mt-16" : ""}>
          <figure className="flex flex-col items-center w-full max-w-[150px] px-2"
            style={{ width: logo.width }}
          >
            <img
              src={logo.src}
              alt={`Client logo ${index + 1}`}
              className="object-contain w-full"
              style={{ aspectRatio: logo.aspectRatio }}
            />
          </figure>
        </div>
      ))}
    </section>
  );
};

export default LogoGrid;
