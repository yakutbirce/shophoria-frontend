import React from "react";
import LogoGrid from "./LogoGrid";

const MobileClients = () => {
  return (
    <main className="flex overflow-hidden flex-col justify-center self-stretch py-28 mx-auto w-full bg-white max-w-[480px]">
      <div className="overflow-hidden w-full">
        <LogoGrid />
      </div>
    </main>
  );
};

export default MobileClients;
