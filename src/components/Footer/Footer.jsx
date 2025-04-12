"use client";
import React from "react";
import FooterBrand from "./FooterBrand";
import SocialMediaIcons from "./SocialMediaIcons";
import FooterSection from "./FooterSection";
import NewsletterForm from "./NewsletterForm";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  const footerSections = [
    {
      title: "Company Info",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Features",
      links: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ];

  return (
    <footer className="bg-white text-sm text-neutral-500">
      {/* Üst Brand + Sosyal */}
      <div className="flex flex-col md:flex-row justify-between items-center px-5 py-10 bg-neutral-50 max-w-[1050px] mx-auto">
        <FooterBrand />
        <SocialMediaIcons />
      </div>

      {/* Divider */}
      <hr className="border border-neutral-200 my-6 w-full" />

      {/* Link bölümü + newsletter */}
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-between px-5 max-w-[1050px] mx-auto">
        {footerSections.map((section, i) => (
          <FooterSection key={i} title={section.title} links={section.links} />
        ))}
        <NewsletterForm />
      </div>

      {/* Copyright */}
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
