import React from "react";
import styled from "styled-components";
import services from "../data/services";
import Card from "./Card";
import img from "../assets/ngalo-3.jpg";
import Heading from "./Heading";

function ServicesSection() {
  return (
    <ServicesWrapper>
      <Heading>Some of Our services</Heading>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 cards">
        {services.map((service) => {
          return (
            <div class="col">
              <Card data={service} />
            </div>
          );
        })}
      </div>
    </ServicesWrapper>
  );
}

const ServicesWrapper = styled.div`
  padding: 5rem 10rem;

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 3px solid var(--secondaryColor);

  h3 {
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    padding: 2.5rem 4rem;
    height: 100%;
    padding-bottom: 10rem;
  }

  @media (max-width: 576px) {
    padding: 2rem 4rem;
    height: 100%;
    h3 {
      font-size: 2.5rem;
    }
  }
`;

export default ServicesSection;
