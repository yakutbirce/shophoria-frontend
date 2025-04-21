import React from "react";

const teamMembers = [
  {
    name: "Emre Şahiner",
    role: "Project Manager",
    image: "https://placehold.co/96x96?text=Emre",
  },
  {
    name: "Birçe Yakut",
    role: "Full Stack Developer",
    image: "https://placehold.co/96x96?text=Birçe",
  },
  {
    name: "Marvin McKinney",
    role: "Marketing",
    image: "https://placehold.co/96x96?text=MM",
  },
  {
    name: "Ronald Richards",
    role: "Marketing",
    image: "https://placehold.co/96x96?text=RR",
  },
  {
    name: "Kathryn Murphy",
    role: "Marketing",
    image: "https://placehold.co/96x96?text=KM",
  },
  {
    name: "Floyd Miles",
    role: "Marketing",
    image: "https://placehold.co/96x96?text=FM",
  },
  {
    name: "Dianne Russell",
    role: "Marketing",
    image: "https://placehold.co/96x96?text=DR",
  },
  {
    name: "Eleanor Pena",
    role: "Marketing",
    image: "https://placehold.co/96x96?text=EP",
  },
  {
    name: "Jenny Wilson",
    role: "Marketing",
    image: "https://placehold.co/96x96?text=JW",
  },

];

const TeamPage = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
      <p className="text-neutral-500 max-w-xl mx-auto mb-12">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>

      <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-3 md:gap-10 md:items-start">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-3">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover shadow-md"
            />
            <h3 className="font-semibold text-slate-700">{member.name}</h3>
            <p className="text-sm text-neutral-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
