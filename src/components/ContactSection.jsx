import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <ContactWrapper>
      <div className="contactform">
        <ContactForm />
      </div>
      <div className="contactsocial">
        <h3>Contact Us on Social Media</h3>
        <span className="contactsocial-fb">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </span>
        <span className="contactsocial-ig">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </span>
      </div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  padding: 5rem 10rem;
  display: flex;
  justify-content: center;
  background: white;
  .contactform {
    border-right: 4px solid var(--secondaryColor);
    padding: 0 3rem;
  }
  .contactsocial {
    background-color: var(--white);
    justify-self: center;
    padding: 0 3rem;
    text-align: center;
  }
  .contactsocial h3 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .contactsocial span {
    font-size: 3rem;
    cursor: pointer;
  }

  .contactsocial a {
    color: var(--primaryColor);
  }

  .contactsocial a:hover {
    color: var(--secondaryColor);
  }

  .contactsocial-fb {
    margin-right: 1.5rem;
  }

  @media (max-width: 992px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column-reverse;

    .contactform {
      border-right: none;
    }

    .contactsocial {
      margin: 4rem 0;
    }

    .contactsocial h3 {
      font-size: 2rem;
    }

    .contactsocial span {
      font-size: 2.5rem;
      cursor: pointer;
    }
  }

  @media (max-width: 576px) {
    padding: 1rem;

    .contactsocial h3 {
      font-size: 1.6rem;
    }
  }
`;

export default ContactSection;
