import React from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

function WelcomeSection() {
  return (
    <WelcomeWrapper>
      <div className="title">
        <div className="icons">
          <span>
            <FaAngleRight />
          </span>
          <span>
            <FaAngleRight />
          </span>
          <span>
            <FaAngleRight />
          </span>
        </div>
        <h2>Welcome</h2>
      </div>
      <div className="welcome__content">
        <p>
          Ngalo hub is an organisation dealing in mobile bike services such as
          bicycle repairs & maintenance for both locally & internationally. We
          have a variety of professional mechanics who are ready to travel and
          provide mobile bike services to clients at the comfort of their homes,
          offices, or any convenient location. We have the learn to ride cyling
          classes which can be conducted from your home or from our safe riding
          arears. Cycling is culture that is growing at a high speed in Uganda,
          and this inspired us to come up with a repair & service solution to
          the cyclists where you do not have to actually move but rather call us
          and allow us to find you.
        </p>
        <p>
          We know you hate traffic and so do we. We are here to keep you on the
          road whether you are an Mtb rider, commutor or road cyclist, our
          services are at your convenience.
        </p>
      </div>
      <button className="btn btn-primary">
        Read More
        <span>
          <BsArrowRight />
        </span>
      </button>
    </WelcomeWrapper>
  );
}

const WelcomeWrapper = styled.div`
  padding: 5rem 10rem;
  background-color: var(--white);
  font-family: "roboto";
  border-bottom: 3px solid var(--secondaryColor);
  border-top: 3px solid var(--secondaryColor);

  .title {
    display: flex;
    align-items: center;
  }

  .icons span {
    display: inline-flex;
    flex-direction: column;
    font-size: 2rem;
    letter-spacing: 1px;
    padding: 0;
    color: var(--primaryColor);
  }

  h2 {
    font-size: 4rem;
    font-weight: 700;
    font-family: "roboto";
    margin-left: 2rem;
    color: var(--secondaryColor);
    text-shadow: 1px 0.1px 2px var(--primaryColor);
  }

  .welcome__content {
    margin-top: 1.5rem;
    font-size: 1.6rem;
    font-family: "roboto";
    letter-spacing: 0.2rem;
    word-spacing: 0.5rem;
    color: var(--primaryColor);
    line-height: 2.5rem;
  }

  .welcome__content p:not(:first-child) {
    margin-top: 2.5rem;
  }

  button {
    font-size: 1.6rem;
    font-family: "roboto";
    padding: 1rem 4rem;
    margin-top: 2.5rem;
    border-radius: 1rem;
    transition: all 0.2s;
  }

  button:active {
    outline: none !important;
    border: none !important;
  }

  button span {
    margin-left: 1rem;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    padding: 2.5rem 4rem;

    .icons span {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 3rem;
      margin-left: 1rem;
    }
  }

  @media (max-width: 576px) {
    padding: 2rem 4rem;
  }
`;

export default WelcomeSection;
