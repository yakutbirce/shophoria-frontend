import React from "react";
import HeroSlider from "./HeroSlider";

export default function HeroContent() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-[394px] px-4">
        <HeroSlider />
      </div>
    </section>
  );
}
