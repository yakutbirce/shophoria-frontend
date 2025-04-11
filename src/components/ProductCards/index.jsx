import React from "react";
import MobileProductCards from "./MobileProductCards";
import DesktopProductCards from "./DesktopProductCards";

const ProductCards = () => {
  return (
    <>
      {/* Mobil görünüm */}
      <div className="md:hidden">
        <MobileProductCards />
      </div>

      {/* Desktop görünüm */}
      <div className="hidden md:block">
        <DesktopProductCards />
      </div>
    </>
  );
};

export default ProductCards;
