import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <CardWrapper>
      <div className="card" style={{ width: "20%" }}>
        <div className="card-body">
          <span className="card__icon">{data.icon}</span>
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.body}</p>
          <Link to="/services" className="btn btn-primary card__button">
            Read More
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  .card {
    width: 95% !important;
    border-radius: 10px;
    margin-bottom: 3rem;
    min-height: 20rem;
    box-shadow: 1px 2px 10px var(--primaryColor);
    padding: 0 1.5rem;
    text-align: center;

    font-family: "roboto";
    letter-spacing: 0.1rem;
  }

  .card__icon {
    font-size: 6rem;
    text-align: center;
    margin-bottom: 1rem;
    display: inline-block;
  }

  .card-title {
    font-size: 2rem;
    text-transform: capitalize;
    color: var(--secondaryColor);
    margin-bottom: 1.5rem;
  }

  .card-text {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  .card__button {
    padding: 1rem;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    border-width: 2.5px;
  }

  .card__button:hover {
    color: var(--secondaryColor);
    background-color: var(--white);
  }

  @media (max-width: 992px) {
    .card {
      width: 100% !important;
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
  }
`;

export default Card;
