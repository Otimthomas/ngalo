import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(true);
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <NavWrapper>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" exact to="/">
          Ngalo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          isOpen={isOpen}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                onClick={closeNav}
                className="nav-link active"
                activeClassName="selected"
                aria-current="page"
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
                About
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
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="selected"
                to="/contact"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  padding: 0 10rem;
  background-color: var(--offWhite) !important;
  box-shadow: 0 2px 10px var(--black);
  border-bottom: 4px solid var(--secondaryColor);

  .navbar {
    font-size: 2rem;
    background-color: var(--offWhite) !important;
  }
  .navbar-nav ul {
    font-size: 1.6rem;
  }

  .nav-item a {
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.2rem;
    color: var(--primaryColor);
  }

  .nav-item a:hover {
    color: var(--black) !important;
  }

  .nav-item:not(:last-child) {
    padding-right: 2rem;
  }

  .selected {
    color: var(--secondaryColor) !important;
  }

  @media (max-width: 992px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 4rem;
  }

  @media (max-width: 576px) {
    padding: 1rem 4rem;
    .navbar-nav ul {
      font-size: 1.4rem;
    }
  }
`;

export default Navbar;
