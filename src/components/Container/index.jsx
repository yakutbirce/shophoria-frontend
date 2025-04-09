import React from "react";
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./DesktopContainer";

const Container = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileContainer />
      </div>
      <div className="hidden md:block">
        <DesktopContainer />
      </div>
    </>
  );
};

export default Container;
