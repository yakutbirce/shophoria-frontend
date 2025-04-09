import React from "react";
import TextContent from "./TextContent";
import ImageSection from "./ImageSection";

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center px-52 w-full max-md:flex-col max-md:px-12 max-sm:flex-col max-sm:px-5">
      <TextContent />
      <ImageSection />
    </section>
  );
};

export default HeroSection;
