import React from "react";
import styled from "styled-components";
import CarouselSlide from "./Carousel/Carousel";
import { carouselHomeIm as items } from "../data/data";

function CarouselHomeImg() {
  const newItems = items.filter((item) => item.featured === true);
  return (
    <CarouselWrapper>
      <CarouselSlide>
        {newItems.map((item) => (
          <div className="carousel__item" key={item.name}>
            <img className="carousel__img" src={item.img} alt={item.name} />
          </div>
        ))}
      </CarouselSlide>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  padding: 5rem 10rem;

  .carousel__img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 576px) {
    padding: 3rem 1rem;
  }
`;

export default CarouselHomeImg;
