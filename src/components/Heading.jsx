import React from "react";
import styled from "styled-components";

function Heading({ children }) {
  return (
    <HeadingWrapper>
      <h2>
        {children}
        <hr />
      </h2>
    </HeadingWrapper>
  );
}

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 3rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    margin-bottom: 5rem;
    font-size: 3.5rem;
    font-family: "roboto";
    font-weight: 700;
    text-transform: uppercase;
    color: var(--secondaryColor);
  }
  hr {
    height: 3px;
    background-color: var(--secondaryColor);
    width: 50%;
  }

  @media (max-width: 992px) {
    h2 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`;

export default Heading;
