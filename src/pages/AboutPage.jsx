import React from "react";
import Hero from "../components/Hero";
import img from "../assets/ngalo-6.jpg";
import CarouselHomeImg from "../components/CarouselHomeImg";
import AboutSection from "../components/AboutSection";

function AboutPage() {
  return (
    <div>
      <Hero img={img} title="about" />
      <AboutSection />
      <CarouselHomeImg />
    </div>
  );
}

export default AboutPage;
