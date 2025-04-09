import React from "react";
import ClientLogo from "./ClientLogo";

const LogoGrid = () => {
  const logos = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4609233c1142df78a03616ea64d4d9f034cf5a7?placeholderIfAbsent=true&apiKey=4db2c929a204476ebf73013389315f4b", width: "153px", aspectRatio: "2.98" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/df62df2803ef2d1c9eaec3ea0282b5a06e5248ab?placeholderIfAbsent=true&apiKey=4db2c929a204476ebf73013389315f4b", width: "146px", aspectRatio: "1.4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bef620ca8c250f816183f753f49c657cfc1e74f6?placeholderIfAbsent=true&apiKey=4db2c929a204476ebf73013389315f4b", width: "152px", aspectRatio: "1.37" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b78b671e4e1277e51681dbbdc0bfb7e12a520b6?placeholderIfAbsent=true&apiKey=4db2c929a204476ebf73013389315f4b", width: "149px", aspectRatio: "2.48" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/093a0f37d1f5dd487f0f16bb78c75c8847df7805?placeholderIfAbsent=true&apiKey=4db2c929a204476ebf73013389315f4b", width: "151px", aspectRatio: "1.66" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cbc950d12ae6434cc12e9b3f975e9a1a394d04eb?placeholderIfAbsent=true&apiKey=4db2c929a204476ebf73013389315f4b", width: "151px", aspectRatio: "1.05" },
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center py-12 w-full">
      {logos.map((logo, index) => (
        <div key={logo.src} className={index > 0 ? "mt-16" : ""}>
          <ClientLogo {...logo} />
        </div>
      ))}
    </section>
  );
};

export default LogoGrid;
