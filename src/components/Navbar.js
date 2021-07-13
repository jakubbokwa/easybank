import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Hamburger } from "../images/icon-hamburger.svg";
import { navigationShort } from "../constants/socials-logos";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <Logo />
        <Hamburger className="hamburger" />
        <div className="nav-links">
          {navigationShort.map((link, index) => {
            const { text } = link;
            return <span key={index}>{text}</span>;
          })}
        </div>
        <div className="nav-button btn">Request invite</div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background-color: var(--color-neutral-3);
  height: auto;
  padding: 18px 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0px;
  z-index: 999;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .nav-links,
    .nav-button {
      display: none;
    }
  }

  @media screen and (min-width: 769px) {
    .hamburger {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: space-between;
      width: 40%;
    }
    span {
      color: var(--color-neutral-1);
    }
  }
`;

export default Navbar;
