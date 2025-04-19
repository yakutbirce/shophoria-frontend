import React from "react";
import ContactRow from "./ContactRow";
import ContactSupport from "./ContactSupport";
import ContactCTA from "./ContactCTA";

const ContactUsPage = () => {
  return (
    <main className="bg-white">
      <ContactRow />
      <ContactSupport />
      <ContactCTA />
    </main>
  );
};

export default ContactUsPage;
