import React from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import img from "../assets/aboutside.jpg";

function AboutSection() {
  return (
    <AboutWrapper>
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
          The word Ngalo refers to "hands" in the local Luganda language. Many
          of the bicycles mechanics around the world use their hands to attend
          and treat customers bicycles and this inspired us to come up with the
          name Ngalo mobile cycling services.
        </p>
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
      </div>
      <div className="objectives">
        <h3>Objectives</h3>
        <div className="objectives__content">
          <ul>
            <li>Ease the bicycle repair experience for all cyclists.</li>
            <li>
              Export mechanics to different countries both in Africa and Europe.
            </li>
            <li>Create employment for the youth.</li>
            <li>Promote tourism through cycling.</li>
            <li>Encourage the youth to join the cycling community.</li>
            <li>
              Give back 10% of the sales to less privileged communities after
              every quarter.
            </li>
            <li>Attract the biggest online market in the cycling world.</li>
          </ul>
          <img src={img} alt="image_objectives" />
        </div>
      </div>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  padding: 5rem 10rem;
  background-color: var(--white);
  font-family: "roboto";
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

  .objectives {
    margin: 3rem;
    margin-top: 3.5rem;
  }

  .objectives h3 {
    font-size: 2.5rem;
    color: var(--secondaryColor);
  }

  .objectives__content {
    display: flex;
    border: 2px solid var(--seconaryColor);
  }

  .objectives__content img {
    width: 60rem;
    height: 55rem;
    margin: 0 3rem;
    box-shadow: 4px 6px 10px var(--black);
  }

  ul {
    padding: 2rem;
    font-size: 1.6rem;
    font-family: "roboto";
    letter-spacing: 0.2rem;
    word-spacing: 0.5rem;
    color: var(--primaryColor);
    line-height: 2.5rem;
  }

  ul li {
    padding-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    padding: 3.5rem 4rem;

    .objectives__content img {
      width: 40rem;
    }
  }

  @media (max-width: 992px) {
    padding: 3rem 4rem;
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

    .objectives {
      margin: 0;
      margin-top: 3.5rem;
    }

    .objectives__content {
      flex-direction: column;
    }

    .objectives__content img {
      height: 40rem;
      margin: 0 3rem;
      box-shadow: 4px 6px 10px var(--black);
    }

    .objectives ul {
      margin-bottom: 3rem;
    }

    .objectives img {
      margin: 0;
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    padding: 2rem 4rem;
  }
`;

export default AboutSection;
