import React from "react";
import Reason from "./Reason";
import styled from "styled-components";
import Heading from "./Heading";

function ReasonSection() {
  return (
    <ReasonWrapper>
      <Heading>Why Choose us?</Heading>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <div className="col">
          <Reason />
        </div>
        <div className="col">
          <Reason />
        </div>
        <div className="col">
          <Reason />
        </div>
        <div className="col">
          <Reason />
        </div>
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

  @media (max-width: 576px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export default ReasonSection;
