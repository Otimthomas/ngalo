import React from "react";
import styled from "styled-components";
import { carouselHomeIm as items } from "../data/data";

function GallerySection() {
  return (
    <GalleryWrapper>
      {items.map((item) => (
        <img src={item.img} alt={`img ${item.name}`} />
      ))}
    </GalleryWrapper>
  );
}

const GalleryWrapper = styled.div`
  padding: 5rem 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
  column-gap: 2rem;
  img {
    width: 100%;
    height: 100%;
    box-shadow: 1px 4px 8px var(--primaryColor);
  }
  @media (max-width: 1024) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    /* img {
      width: 100%;
    } */
  }

  @media (max-width: 768px) {
    padding: 2.5rem 4rem;
    grid-template-columns: 1fr 1fr;

    img {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    padding: 2rem 4rem;
    grid-template-columns: 1fr;
  }
`;

export default GallerySection;
