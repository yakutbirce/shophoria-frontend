import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const ProductDescriptionSection = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const tabs = [
    "Description",
    "Additional Information",
    <>
      Reviews <span className="text-emerald-600">(0)</span>
    </>,
  ];
  

  return (
    <section className="bg-white py-12 px-4 md:px-6">
      {/* TAB MENU */}
      <div className="flex justify-center gap-6 mb-10 text-base font-semibold">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer transition-all duration-200 ${
              activeTab === tab
                ? "text-gray-900 underline underline-offset-4"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row md:items-start gap-12 max-w-[1050px] mx-auto">
        {/* LEFT: IMAGE */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <div className="bg-gray-300 w-full h-[300px] md:h-[400px] rounded-md" />
        </div>

        {/* CENTER: HEADING + TEXTS */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
            the quick fox jumps over
          </h2>
          <div className="space-y-5 text-gray-500 text-sm leading-6">
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door <strong>ENIM RELIT</strong> Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door <strong>ENIM RELIT</strong> Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door <strong>ENIM RELIT</strong> Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>

        {/* RIGHT: BULLETS */}
        <div className="w-full md:w-1/3 space-y-10">
          {/* Bullet Group 1 */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              the quick fox jumps over
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              {[...Array(4)].map((_, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-1 text-gray-500" />
                  the quick fox jumps over the lazy dog
                </li>
              ))}
            </ul>
          </div>

          {/* Bullet Group 2 */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              the quick fox jumps over
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              {[...Array(3)].map((_, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-1 text-gray-500" />
                  the quick fox jumps over the lazy dog
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescriptionSection;
