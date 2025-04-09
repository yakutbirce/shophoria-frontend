import React from "react";
import SummerCollectionHero from "../Hero/Mobile/SummerCollectionHero";

export default function MobileContainer() {
  return (
    <div className="md:hidden" style={{ backgroundColor: "#ABECD6" }}>
      <SummerCollectionHero />
    </div>
  );
}
