import React from "react";
import ClientLogo from "./ClientLogo";

const DesktopClients = () => {
    const logos = [
        { src: "https://via.placeholder.com/150x50?text=Logo+1", width: "150px", aspectRatio: "3" },
        { src: "https://via.placeholder.com/150x50?text=Logo+2", width: "150px", aspectRatio: "3" },
        { src: "https://via.placeholder.com/150x50?text=Logo+3", width: "150px", aspectRatio: "3" },
        { src: "https://via.placeholder.com/150x50?text=Logo+4", width: "150px", aspectRatio: "3" },
        { src: "https://via.placeholder.com/150x50?text=Logo+5", width: "150px", aspectRatio: "3" },
        { src: "https://via.placeholder.com/150x50?text=Logo+6", width: "150px", aspectRatio: "3" },
      ];
      

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
