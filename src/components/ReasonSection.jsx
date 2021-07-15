import React from "react";
import Reason from "./Reason";
import styled from "styled-components";
import Heading from "./Heading";
import { reasons } from "../data/reason";

function ReasonSection() {
  return (
    <ReasonWrapper>
      <Heading>Why Choose us?</Heading>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
        {reasons.map((reason) => {
          return (
            <div className="col" key={reason.index}>
              <Reason data={reason} />
            </div>
          );
        })}
      </div>
    </ReasonWrapper>
  );
}

const ReasonWrapper = styled.div`
  padding: 5rem 10rem;
  border-bottom: 3px solid var(--secondaryColor);

  .reason__title {
    text-align: center;
    font-size: 3rem;
    font-family: "roboto";
    font-weight: 700;
    color: var(--secondaryColor);
    margin-bottom: 5rem;
  }

  @media (max-width: 1024px) {
    padding: 2rem;

    .reason__title {
      font-size: 1.6rem;
      font-family: "roboto";
      font-weight: 500;
      color: var(--secondaryColor);
    }
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export default ReasonSection;
