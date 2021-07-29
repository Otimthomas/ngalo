import React from "react";
import Header from "../components/Header";
import ReasonSection from "../components/ReasonSection";
import ServicesSection from "../components/ServicesSection";
import WelcomeSection from "../components/WelcomeSection";
// import ReviewSection from "../components/ReviewSection";
import CarouselHomeIm from "../components/CarouselHomeImg";

function HomePage() {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <ServicesSection />
      <ReasonSection />
      {/* <ReviewSection /> */}
      <CarouselHomeIm />
    </div>
  );
}

export default HomePage;
