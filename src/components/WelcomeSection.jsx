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
