import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";


const ContactRow = () => {
  return (
    <section className="w-full bg-white px-4 md:px-20 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto gap-10">
        {/* LEFT: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Heading */}
          <h2 className="text-base font-bold text-slate-800 mb-4">CONTACT US</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight mb-6">
            Get in touch <br className="hidden md:block" /> today!
          </h1>

          {/* Description */}
          <p className="text-xl text-neutral-500 leading-8 mb-6">
            We know how large objects will act, <br className="hidden md:block" />
            but things on a small scale
          </p>

          {/* Contact Info */}
          <address className="not-italic text-2xl font-bold text-slate-800 mb-6">
            <p>Phone : +451 215 215</p>
            <p className="mt-5">Fax : +451 215 215</p>
          </address>

         {/* Social Icons */}
<div className="flex gap-4 mt-8 ">
 
  <div className="bg-[#252B42] p-2 rounded-full cursor-pointer">
    <Twitter className="w-5 h-5 text-white" />
  </div>

  
  <div className="bg-[#252B42] p-2 rounded cursor-pointer">
    <Facebook className="w-5 h-5 text-white" />
  </div>


  <div className="border border-[#252B42] p-2 rounded cursor-pointer">
    <Instagram className="w-5 h-5 text-[#252B42]" />
  </div>


  <div className="bg-[#252B42] p-2 rounded cursor-pointer">
    <Linkedin className="w-5 h-5 text-white " />
  </div>
</div>


        </div>

        {/* RIGHT: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://placehold.co/414x468?text=Contact+Image"
            alt="Contact"
            className="w-full max-w-[387px] md:max-w-full md:h-[446px] object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactRow;
