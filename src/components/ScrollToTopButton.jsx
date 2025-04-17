import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
<button
  onClick={scrollToTop}
  className={`fixed bottom-6 right-6 z-50 p-3 bg-sky-500 text-white rounded-full shadow-lg 
    transition-all duration-300 transform hover:scale-110 hover:bg-sky-600 focus:outline-none ${
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  aria-label="Scroll to top"
>
  <ChevronUp className="w-6 h-6" />
</button>

  );
};

export default ScrollToTopButton;
