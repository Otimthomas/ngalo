import React from "react";
import Hero from "../components/Hero";
import img from "../assets/ngalo-5.jpg";
import ContactSection from "../components/ContactSection";

function ContactPage() {
  return (
    <div>
      <Hero title="Contact Us" img={img} />
      <ContactSection />
    </div>
  );
}

export default ContactPage;
