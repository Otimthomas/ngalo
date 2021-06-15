import React from "react";
import Hero from "../components/Hero";
import img from "../assets/bicycle2.jpg";
import GallerySection from "../components/GallerySection";

function GalleryPage() {
  return (
    <div>
      <Hero title="gallery" img={img} />
      <GallerySection />
    </div>
  );
}

export default GalleryPage;
