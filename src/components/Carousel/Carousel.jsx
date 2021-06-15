import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function CarouselSlide({ children }) {
  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <CarouselSlideWrapper className="App">
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={3000}
          enableSwipe
          enableMouseSwipe
        >
          {children}
        </Carousel>
      </div>
    </CarouselSlideWrapper>
  );
}

const CarouselSlideWrapper = styled.div`
  .carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;
    color: #fff;
    margin: 15px;
    font-size: 4em;
  }

  .App {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 8rem;
  }

  .seperator {
    width: 100%;
  }

  .controls-wrapper {
    width: 100%;
  }

  .carousel-wrapper {
    width: 100%;
  }

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 0px green;
  }

  .rec-arrow {
    /* background-color: green !important; */
    background: transparent !important;
  }

  .rec-dot_active {
    background-color: var(--secondaryColor) !important;
  }

  .rec-dot:hover,
  .rec-dot_active,
  .rec-dot:focus {
    box-shadow: 0 0 1px 3px var(--secondaryColor) !important;
  }

  @media (max-width: 576px) {
    .rec-arrow {
      display: none;
    }
  }
`;
