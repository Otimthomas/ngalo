import React from "react";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";

function ScrollButton() {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <ScrollButtonwrapper>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </ScrollButtonwrapper>
  );
}

const ScrollButtonwrapper = styled.div`
  font-size: 4rem;
  color: var(--secondaryColor);
  cursor: pointer;
  display: inline-block;

  position: fixed;
  /* width: 100%; */
  right: 5px;
  bottom: 40px;
  height: 20px;
  z-index: 1;
`;

export default ScrollButton;
