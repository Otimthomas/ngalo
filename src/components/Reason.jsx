import React from "react";
import styled from "styled-components";

function Reason({ data }) {
  return (
    <ReasonWrapper>
      <p className="reason__number">{data.index}</p>
      <div className="reason__divider"></div>
      <div className="reason__content">
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
      <br />
    </ReasonWrapper>
  );
}

const ReasonWrapper = styled.div`
  display: flex;
  font-family: "roboto";
  width: 100%;
  min-height: 25rem;
  background-color: var(--white);
  padding: 2rem;
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
    line-height: 18px !important;
  }

  .reason__content h3 {
    line-height: 18px !important;
    padding-bottom: 1rem;
  }

  br {
    width: 100%;
    height: 3px;
    background-color: var(--secondaryColor);
  }
`;

export default Reason;
