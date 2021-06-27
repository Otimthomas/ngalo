import React from "react";
import styled from "styled-components";

export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45vh;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img}) center/cover no-repeat;
  padding: 10rem 0;
  .title {
    padding-top: 2rem;
    font-size: 4rem;
    text-transform: uppercase;
    font-family: "roboto";
  }
  @media (max-width: 1024) {
  }

  @media (max-width: 992px) {
    .title {
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 4rem;
  }

  @media (max-width: 576px) {
    padding: 2rem 4rem;
  }
`;
