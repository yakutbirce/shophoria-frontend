import React from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";

const ContactSupport = () => {

  const contactData = [
    {
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      title: "Get Support",
      buttonText: "Submit Request",
      isDark: false,
    },
    {
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      title: "Get Support",
      buttonText: "Submit Request",
      isDark: true,
    },
    {
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      title: "Get Support",
      buttonText: "Submit Request",
      isDark: false,
    },
  ];

  
  const getIcon = (index) => {
    const baseIconProps = "w-10 h-10 text-sky-500";
    if (index === 0) return <Phone className={baseIconProps} />;
    if (index === 1) return <MapPin className={baseIconProps} />;
    if (index === 2)
      return (
        <>
          
          <span className="block md:hidden">
            <Send className={baseIconProps} />
          </span>
          <span className="hidden md:block">
            <Mail className={baseIconProps} />
          </span>
        </>
      );
  };

  return (
    <section className="bg-neutral-50 px-6 py-16 md:py-24 text-center">
      {/* Header */}
      <div className="max-w-xl mx-auto">
        <h2 className="text-sm font-bold text-slate-800 uppercase">
          Visit Our Office
        </h2>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
          We help small businesses with big ideas
        </h1>
      </div>

      {/* Cards */}
      <div className="mt-12 flex flex-col md:flex-row md:justify-center gap-8 items-center">
        {contactData.map((item, idx) => (
          <article
            key={idx}
            className={`flex flex-col items-center p-10 w-[280px] md:w-[327px] ${
              item.isDark ? "bg-slate-800 text-white" : "bg-white"
            }`}
          >
            <div className="mb-4">{getIcon(idx)}</div>
            <div className="mb-4 space-y-1 text-sm font-bold leading-6">
              {item.emails.map((email, i) => (
                <p key={i}>{email}</p>
              ))}
            </div>
            <h3 className="text-base font-bold">{item.title}</h3>
            <button className="mt-4 px-6 py-2 border border-sky-500 text-sky-500 rounded-md font-bold hover:bg-sky-50 transition-all">
              {item.buttonText}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContactSupport;
