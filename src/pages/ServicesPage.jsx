import React from "react";
import Hero from "../components/Hero";
import img from "../assets/ngalo-7.jpg";
import ServicePageSection from "../components/ServicePageSection";

function ServicesPage() {
  return (
    <div>
      <Hero title="services" img={img} />
      <ServicePageSection />
    </div>
  );
}

export default ServicesPage;
