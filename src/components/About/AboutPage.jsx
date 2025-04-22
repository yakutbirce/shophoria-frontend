import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Clients from "../Clients";


const DecorativeBlob = () => {
  return (
    <div className="absolute -top-12 right-0 z-0 opacity-60 pointer-events-none max-md:hidden">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="280" cy="200" r="160" fill="#FEEAE6" />
        <circle cx="370" cy="130" r="5" fill="#977DF4" />
        <circle cx="240" cy="330" r="7" fill="#977DF4" />
      </svg>
    </div>
  );
};

// Takım Üyesi Kartı
const TeamMemberCard = () => {
  return (
    <div className="flex flex-col items-center text-center bg-white shadow-md p-6 rounded-md">
      <img
        src="https://placehold.co/300x220"
        alt="Team member"
        className="w-full rounded-md object-cover aspect-[1.4]"
      />
      <h3 className="mt-4 text-lg font-semibold text-slate-800">Username</h3>
      <p className="text-sm font-medium text-neutral-500">Profession</p>
      <div className="flex gap-3 mt-3 text-sky-500">
        <Facebook size={20} />
        <Twitter size={20} />
        <Instagram size={20} />
      </div>
    </div>
  );
};

//Sayfa
const AboutPage = () => {
  return (
    <main className="w-full bg-white relative overflow-hidden">
     
      <DecorativeBlob />

      {/* HEADER */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 relative z-10">
        <div className="max-w-xl text-center md:text-left">
          <h5 className="text-sm font-bold text-sky-500">ABOUT COMPANY</h5>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-slate-800">ABOUT US</h1>
          <p className="mt-6 text-neutral-500 text-base md:text-lg">
            We know how large objects will act, but things on a small scale...
          </p>
          <button className="mt-6 px-8 py-3 bg-sky-500 text-white text-sm font-semibold rounded-md">
            Get Quote Now
          </button>
        </div>
        <img
          src="https://placehold.co/450x280"
          alt="About"
          className="w-full md:w-[40%] mb-10 md:mb-0 z-10"
        />
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-20 text-center py-16">
        <p className="text-sm text-red-500">Problems trying</p>
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-800 max-w-2xl mx-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h2>
        <p className="mt-6 text-sm text-neutral-500 max-w-lg mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </section>

      {/* STATS */}
      <section className="bg-white py-20 px-6 md:px-20 text-center font-bold">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { num: "15K", label: "Happy Customers" },
            { num: "150K", label: "Monthly Visitors" },
            { num: "15", label: "Countries Worldwide" },
            { num: "100+", label: "Top Partners" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl text-slate-800">{item.num}</h3>
              <p className="text-base font-normal text-neutral-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="px-6 md:px-20 py-20">
        <img
          src="https://placehold.co/900x400"
          alt="Video thumbnail"
          className="w-full object-cover"
        />
      </section>

      {/* TEAM */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-slate-800">Meet Our Team</h2>
        <p className="mt-2.5 text-sm text-neutral-500 max-w-xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-neutral-50 py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-slate-800">Big Companies Are Here</h2>
        <p className="mt-4 text-sm text-neutral-500 max-w-xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="mt-12">
          <Clients />
        </div>
      </section>

      {/* WORK WITH US */}
      <section className="bg-sky-600 text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="max-w-xl">
          <h5 className="text-sm font-bold">WORK WITH US</h5>
          <h2 className="mt-6 text-4xl font-bold">Now Let's grow Yours</h2>
          <p className="mt-6 text-sm">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century...
          </p>
          <button className="mt-6 px-10 py-4 bg-white text-sky-600 font-bold rounded-md">
            Button
          </button>
        </div>
        <img
          src="https://placehold.co/500x400"
          alt="Grow With Us"
          className="w-full md:w-[40%]"
        />
      </section>
    </main>
  );
};

export default AboutPage;
