import React from "react";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url('https://placehold.co/1440x446')` }}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
          Questions <br className="block md:hidden" /> & Answers
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-500 max-w-xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics:
        </p>
        <Link
  to="/contactus"
  className="mt-6 inline-block text-sky-500 font-bold relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full"
>
  CONTACT US
</Link>

      </div>
    </section>
  );
};

export default ContactHero;
