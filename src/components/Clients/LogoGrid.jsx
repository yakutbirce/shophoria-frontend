import React from "react";
import ClientLogo from "./ClientLogo";

const LogoGrid = () => {
    const logos = [
        { src: "https://via.placeholder.com/150x50?text=Logo+1", width: "150px", aspectRatio: "3" },
        { src: "https://via.placeholder.com/150x50?text=Logo+2", width: "150px", aspectRatio: "3" },
        { src: "https://via.placeholder.com/150x50?text=Logo+3", width: "150px", aspectRatio: "3" },
        { src: "https://via.placeholder.com/150x50?text=Logo+4", width: "150px", aspectRatio: "3" },
        { src: "https://via.placeholder.com/150x50?text=Logo+5", width: "150px", aspectRatio: "3" },
        { src: "https://via.placeholder.com/150x50?text=Logo+6", width: "150px", aspectRatio: "3" },
      ];
      

  return (
    <section className="flex overflow-hidden flex-col items-center py-12 w-full">
      {logos.map((logo, index) => (
        <div key={logo.src} className={index > 0 ? "mt-16" : ""}>
          <ClientLogo {...logo} />
        </div>
      ))}
    </section>
  );
};

export default LogoGrid;
