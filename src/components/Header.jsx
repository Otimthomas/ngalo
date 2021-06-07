import React from "react";
import styled from "styled-components";
import img from "../assets/bicycle.jpg";

function Header() {
  return (
    <HeaderWrapper>
      <h1>Ngalo Mobile Cycling Services</h1>
      <h1>& Repair.</h1>
      <p>Your Convinience is our Priority.</p>
      <button className="btn btn-primary">Get In Touch</button>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  font-size: 4rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-size: cover;
  background-position-y: -5rem;
  color: var(--offWhite);
  height: 100vh;
  padding: 4rem 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  h1 {
    font-size: 6rem;
    text-align: right;
    font-weight: bold;
    text-shadow: 2px 4px 8px var(--black);
    line-height: 10rem;
    /* margin-top: -15px; */
  }

  p {
    font-size: 2.5rem;
    text-align: right;
    text-shadow: 2px 4px 8px var(--black);
  }

  button {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 3rem;
    padding: 2rem 4rem;
    border-radius: 10px;
  }
`;

export default Header;
