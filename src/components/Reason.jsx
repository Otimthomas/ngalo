import React from "react";
import styled from "styled-components";

function Reason() {
  return (
    <ReasonWrapper>
      <p className="reason__number">01</p>
      <div className="reason__divider"></div>
      <div className="reason__content">
        <h3>title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam saepe
          obcaecati illo. Quisquam, est nobis?
        </p>
      </div>
      <br />
    </ReasonWrapper>
  );
}

const ReasonWrapper = styled.div`
  display: flex;
  font-family: "roboto";
  width: 100%;
  background-color: var(--white);
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 1px 2px 10px var(--primaryColor);
  margin-bottom: 2.5rem;

  .reason__number {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .reason__divider {
    width: 3rem;
    height: 3px;
    margin: 0 1rem;
    margin-top: 0.6rem;
    background-color: var(--secondaryColor);
  }

  .reason__content {
    width: 25rem;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
  }

  br {
    width: 100%;
    height: 3px;
    background-color: var(--secondaryColor);
  }
`;

export default Reason;