import React from "react";
import styled from "styled-components";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <FooterWrapper className="footer">
      <div className="footer__upperSection d-flex justify-content-between">
        {/* <div className="footer__logo">
          <img src="" alt="logo" />
        </div> */}
        <div className="footer__info">
          <div className="footer__socialmedia d-flex justify-content-center">
            <span>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FiFacebook />
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FiInstagram />
              </a>
            </span>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="selected"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="selected"
                to="/about"
              >
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="selected"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="selected"
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer__lowerSection text-center">
        <p>
          Copyright&nbsp;{new Date().getFullYear()} Ngalo. All Rights Reserved.
          Design by Kubwa Design.
        </p>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  font-size: 1.6rem;
  padding: 1rem 10rem;
  background-color: var(--secondaryColor);
  color: var(--white);

  .footer__info {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  .nav-item a {
    color: var(--white);
  }

  .nav-item a:hover {
    color: var(--primaryColor);
  }

  .selected {
    color: var(--primaryColor) !important;
    font-weight: 700;
  }

  .footer__socialmedia {
    margin-bottom: 2rem;
  }

  .footer__socialmedia span a {
    font-size: 2.2rem;
    color: var(--white);
  }

  .footer__socialmedia span a:not(first-child) {
    margin-left: 1rem;
  }

  hr {
    margin: 2rem 0;
  }

  @media (max-width: 992px) {
    .footer__lowerSection {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 4rem;

    .footer__lowerSection {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 576px) {
    padding: 2rem 4rem;

    .footer__socialmedia span {
      font-size: 2rem;
    }

    .footer__lowerSection {
      font-size: 1rem;
    }

    .nav-item a {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
`;

export default Footer;
