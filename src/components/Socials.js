import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo-white.svg";
import { navigation, logos } from "../constants/socials-logos";

const Socials = () => {
  return (
    <Wrapper>
      <div className="logo-socials-container">
        <div className="logo">
          <Logo />
        </div>
        <section className="socials">
          {logos.map((singleLogo, index) => {
            const { logo, alt } = singleLogo;
            return <img src={logo} key={index} alt={alt} className="icon" />;
          })}
        </section>
      </div>
      <section className="navigation">
        {navigation.map((singleLink, index) => {
          const { text } = singleLink;
          return <h4 key={index}>{text}</h4>;
        })}
      </section>
      <div className="button-trademark-container">
        <div className="btn">Request invite</div>
        <p>&copy; Easybank. All Rights Reserved</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 24px;
  background-color: var(--color-primary-1);
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo-socials-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      margin: 10px;
    }

    .socials {
      width: 50%;
      max-width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }

  .navigation {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h4 {
      color: white;
      margin: 10px 0;
    }
  }
  .button-trademark-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .btn {
      margin-bottom: 15px;
    }
    p {
      margin: 15px 0 30px 0;
    }
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .logo-socials-container {
      width: 32%;
      align-items: center;
      .socials {
        justify-content: space-around;
        width: 100%;
      }
    }
    .navigation {
      width: 32%;
      flex-direction: row;
      flex-wrap: wrap;
      text-align: center;
      h4 {
        width: 50%;
      }
    }
    .button-trademark-container {
      width: 32%;
      p {
        margin: 0;
      }
      justify-content: center;
    }
  }
`;

export default Socials;
