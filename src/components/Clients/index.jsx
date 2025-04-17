import React from "react";
import MobileClients from "./MobileClients";
import DesktopClients from "./DesktopClients";

const Clients = () => {
  return (
    <>
      {/* Mobil: md breakpoint altındayken */}
      <div className="md:hidden">
        <MobileClients />
      </div>
      {/* Desktop: md ve üzeri */}
      <div className="hidden md:block bg-white">
        <DesktopClients />
      </div>
    </>
  );
};

export default Clients;
