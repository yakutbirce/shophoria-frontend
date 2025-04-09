import React from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  return (
    <>
      {/* Mobil görünümde: md ve üstü için gizli */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      {/* Desktop görünümde: md altı için gizli */}
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
    </>
  );
};

export default Navbar;
