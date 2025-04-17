import React from "react";
import ClientLogo from "./ClientLogo";


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

const DesktopClients = () => {
  return (
    <main className="flex overflow-hidden justify-center self-stretch py-28 mx-auto w-full bg-white max-w-[1200px]">
      <div className="flex flex-row justify-center items-center gap-12 w-full">
        {logos.map((logo) => (
          <ClientLogo key={logo.src} {...logo} />
        ))}
      </div>
    </main>
  );
};

export default DesktopClients;
