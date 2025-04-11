import React from "react";
import MobileContent7 from "./MobileContent7";
import DesktopContent7 from "./DesktopContent7";

const Content7 = () => {
  return (
    <>
      {/* Mobil */}
      <div className="md:hidden">
        <MobileContent7 />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopContent7 />
      </div>
    </>
  );
};

export default Content7;
