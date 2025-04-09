import React from "react";
import MobileShopCards from "./MobileShopCards";
import DesktopShopCards from "./DesktopShopCards";

const ShopCards = () => {
  return (
    <>
      {/* Mobil görünüm */}
      <div className="md:hidden">
        <MobileShopCards />
      </div>

      {/* Desktop görünüm */}
      <div className="hidden md:block">
        <DesktopShopCards />
      </div>
    </>
  );
};

export default ShopCards;
