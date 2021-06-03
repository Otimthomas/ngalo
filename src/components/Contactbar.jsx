import React from "react";
import styled from "styled-components";
import { FiMail, FiPhone, FiFacebook, FiInstagram } from "react-icons/fi";

function Contactbar() {
  return (
    <ContactWrapper>
      <div className="contactbar__left">
        <div className="contactbar__left-tel">
          <span>
            <FiPhone />
          </span>
          <p>+256 7000000000</p>
        </div>
        <div className="contactbar__left-email">
          <span>
            <FiMail />
          </span>
          <p>totim1992@gmail.com</p>
        </div>
      </div>
      <div className="contactbar__right">
        <a
          href="https://www.facebook.com"
          //   send link to new window
          className="contactbar__right-facebook"
        >
          <FiFacebook />
        </a>
        <a
          href="https://www.instagram.com"
          //   send link to new window
          className="contactbar__right-instagram"
        >
          <FiInstagram />
        </a>
      </div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  background-color: var(--primaryColor);
  background: -webkit-linear-gradient(
    top,
    rgb(110, 110, 110) 0%,
    rgb(63, 63, 63) 50%,
    rgb(61, 63, 65) 51%,
    rgb(36, 37, 37) 100%
  );
  padding: 1rem 8rem;
  color: var(--offWhite);
  display: flex;
  justify-content: space-between;

  .contactbar__left {
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
  }

  .contactbar__left-tel {
    margin-right: 1.5rem;
    display: flex;
  }

  .contactbar__left-email {
    display: flex;
  }

  .contactbar__left-tel span,
  .contactbar__left-email span {
    margin-right: 1rem;
    font-size: 1.8rem;
  }

  .contactbar__left-tel p,
  .contactbar__left-email p {
    margin-bottom: 0 !important;
    align-self: center;
  }

  .contactbar__right {
    display: flex;
  }

  .contactbar__right a {
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--offWhite);
  }

  .contactbar__right-facebook {
    margin-right: 1rem;
  }
`;

export default Contactbar;
