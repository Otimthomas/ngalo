import React from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import img from "../assets/bicycle.jpg";

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
          Once installed, the simple laravel new command will create a fresh
          Laravel installation in the directory you specify. For instance,
          laravel new blog would create a directory named blog containing a
          fresh Laravel installation with all dependencies installed. This
          method of installation is much faster than installing via Composer.
          Once installed, the simple laravel new command will create a fresh
          Laravel installation in the directory you specify. For instance,
          laravel new blog would create a directory named blog containing a
          fresh Laravel installation with all dependencies installed. This
          method of installation is much faster than installing via Composer.
        </p>
        <p>
          Once installed, the simple laravel new command will create a fresh
          Laravel installation in the directory you specify. For instance,
          laravel new blog would create a directory named blog containing a
          fresh Laravel installation with all dependencies installed. This
          method of installation is much faster than installing via Composer.
          Once installed, the simple laravel new command will create a fresh
          Laravel installation in the directory you specify. For instance,
          laravel new blog would create a directory named blog containing a
          fresh Laravel installation with all dependencies installed. This
          method of installation is much faster than installing via Composer.
        </p>
      </div>
      <div className="objectives">
        <h3>Objectives</h3>
        <div className="objectives__content">
          <ul>
            <li>
              Export mechanics to different countries both in Africa and Europe
            </li>
            <li>Create Employment for the youth</li>
            <li>Promote tourism</li>
            <li>Enthuse the youth to join the cycling community</li>
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
    width: 50rem;
    margin: 0 3rem;
    box-shadow: 2px 4px 8px var(--primaryColor);
  }

  ul {
    margin-top: 1.5rem;
    font-size: 1.6rem;
    font-family: "roboto";
    letter-spacing: 0.2rem;
    word-spacing: 0.5rem;
    color: var(--primaryColor);
    line-height: 2.5rem;
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

    .objectives__content {
      flex-direction: column;
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
