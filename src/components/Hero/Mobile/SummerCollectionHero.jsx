import React from "react";

import { HeroImage } from "./HeroImage";
import HeroContent from "./HeroContent";

export default function SummerCollectionHero() {
  return (
    <section className="flex flex-col justify-center items-center p-5 mx-auto max-w-none min-h-screen rounded-3xl max-md:px-5 max-md:py-10 max-md:max-w-[991px] max-sm:p-5 max-sm:max-w-screen-sm">
      <HeroContent />
      <HeroImage />
    </section>
  );
}
