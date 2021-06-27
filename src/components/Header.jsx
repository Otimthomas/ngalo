import React from "react";
import styled from "styled-components";
import img from "../assets/ngalo-8.jpg";

function Header() {
  return (
    <HeaderWrapper>
      <h1 className="heading-1">Ngalo Mobile Cycling Services</h1>
      <p>With Convinience.</p>
      <button className="btn btn-primary">Get In Touch</button>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  font-size: 4rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-size: cover;
  background-position: center;
  color: var(--offWhite);
  height: 90vh;
  padding: 4rem 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  .heading-1,
  .heading-2 {
    font-size: 6rem;
    text-align: right;
    font-weight: bold;
    text-shadow: 2px 4px 8px var(--black);
    line-height: 10rem;
  }

  p {
    font-size: 3rem;
    font-style: italic;
    text-align: right;
    text-transform: uppercase;
    text-shadow: 2px 4px 8px var(--black);
  }

  button {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 3rem;
    padding: 1rem 4rem;
    border-radius: 10px;
    outline: none;
    border: 2px solid transparent;
  }

  button:hover,
  button:active {
    outline: none !important;
    border: 2px solid blue !important;
    color: var(--secondaryColor);
    background-color: var(--offWhite);
  }

  button:focus {
    outline: none !important;
  }

  @media (max-width: 1024px) {
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 0;
    height: 50vh;
    .heading-1,
    .heading-2 {
      font-size: 4.5rem;
      line-height: 6rem;
    }
  }

  @media (max-width: 992px) {
    height: 45vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 0;

    .heading-1,
    .heading-2 {
      font-size: 4rem;
      font-family: "roboto";
      /* text-align: center; */
      font-weight: bold;
      text-shadow: 2px 4px 8px var(--black);
      line-height: 6rem;
    }

    p {
      font-size: 2rem;
      margin-top: 1rem;
      font-style: italic;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 4rem;
  }

  @media (max-width: 576px) {
    padding: 1rem 4rem;
    height: 40vh;
    align-items: center;

    .heading-1,
    .heading-2 {
      font-size: 2.5rem;
      line-height: 3rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      margin-top: 2rem;
    }
  }
`;

export default Header;
