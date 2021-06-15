import React from "react";
import styled from "styled-components";
import { FiUser } from "react-icons/fi";
import Heading from "./Heading";

function ReviewSection() {
  return (
    <ReviewWrapper>
      <Heading>What clients are saying.</Heading>
      <div className="reviews">
        <h4 className="review__icon">
          <FiUser />
        </h4>
        <p className="review__comment">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi illo
          consectetur ducimus nihil optio ex alias delectus exercitationem in?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi illo
          consectetur ducimus nihil optio ex alias delectus exercitationem in?
        </p>
      </div>
      <div className="reviews">
        <h4 className="review__icon">
          <FiUser />
        </h4>
        <p className="review__comment">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi illo
          consectetur ducimus nihil optio ex alias delectus exercitationem in?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi illo
          consectetur ducimus nihil optio ex alias delectus exercitationem in?
        </p>
      </div>
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.div`
  padding: 5rem 10rem;
  background-color: var(--white);
  border-bottom: 3px solid var(--secondaryColor);

  h3 {
    text-align: center;
    color: var(--secondaryColor);
    font-size: 3rem;
    font-weight: 700;
    font-family: "roboto";
  }

  .reviews {
    display: flex;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    margin-top: 4rem;
    box-shadow: 1px 2px 8px var(--black);
    padding: 3rem 4rem;
    border-radius: 1rem;
  }

  .review__icon {
    font-size: 4rem;
    background-color: var(--secondaryColor);
    display: inline-block;
    padding: 2rem;
    border-radius: 50%;
    color: var(--white);
    margin-right: 3rem;
  }

  .review__comment {
    font-size: 1.6rem;
    font-family: "roboto";
    letter-spacing: normal;
  }

  @media (max-width: 992px) {
    .reviews {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .reviews {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    padding-right: 4rem;
    padding-left: 4rem;
    .reviews {
      flex-direction: column;
      width: 100%;
      text-align: center;
    }

    .review__icon {
      margin-bottom: 2rem;
      margin-right: 0;
    }
  }
`;

export default ReviewSection;
