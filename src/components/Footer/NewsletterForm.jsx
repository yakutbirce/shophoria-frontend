
import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail(""); 
  };

  return (
    <section className="w-full max-w-[321px] flex flex-col gap-4">
      <h3 className="text-base font-bold text-slate-800">Get In Touch</h3>
      <form
  onSubmit={handleSubscribe}
  className="flex w-full"
>


<input
  type="email"
  placeholder="Your Email"
  value={email}
  required
  onChange={(e) => setEmail(e.target.value)}
  className="flex-grow px-5 py-4 text-sm border border-neutral-200 bg-stone-50 text-neutral-500 rounded-l-md outline-none"
  
/>


<button
  type="submit"
  className="px-6 py-4 text-sm text-white bg-sky-500 hover:bg-sky-600 transition rounded-r-md"
>
  Subscribe
</button>


      </form>
      <p className="text-xs text-neutral-500">Lore imp sum dolor Amit</p>
    </section>
  );
};

export default NewsletterForm;
