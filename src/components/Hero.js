import React from "react";
import styled from "styled-components";
import mobileBackgroundAccent from "../images/bg-intro-mobile.svg";
import desktopBackgroundAccent from "../images/bg-intro-desktop.svg";
import mockups from "../images/image-mockups.png";

const Hero = () => {
  return (
    <Wrapper>
      <section className="image-container">
        <div className="bgr-mobile">
          <img
            src={mobileBackgroundAccent}
            alt="mobile background"
            className="accent-mobile"
          />
          <img
            className="mockups-mobile"
            src={mockups}
            alt="Mockup mobile app presentation"
          />
        </div>
        <div className="bgr-desktop">
          <img
            src={desktopBackgroundAccent}
            alt="desktop background"
            className="accent-desktop"
          />
          <img
            className="mockups-desktop"
            src={mockups}
            alt="Mockup mobile app presentation"
          />
        </div>
      </section>

      <section className="text-container">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="btn">Request invite</div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-neutral-3);

  .bgr-mobile {
    position: relative;
    height: 60vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    .accent-mobile {
      width: 100%;
      padding-bottom: 56.25%;
      position: absolute;
      top: -30px;
    }
    .mockups-mobile {
      position: absolute;
      width: 100%;
      max-width: 500px;
      padding-bottom: 56.25%;
      top: -135px;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 24px 0 64px;

    h1 {
      margin-bottom: 2rem;
      max-width: 85%;
    }

    p {
      color: var(--color-neutral-1);
      text-align: center;
      margin-bottom: 2rem;
      max-width: 85%;
    }
  }

  @media screen and (max-width: 768px) {
    .bgr-desktop {
      display: none;
    }
  }

  @media screen and (min-width: 769px) {
    .bgr-mobile {
      display: none;
    }

    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    overflow: hidden;

    .bgr-desktop {
      position: relative;
      width: 60vw;
      height: 656px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .accent-desktop {
        position: absolute;
        left: 220px;
        top: -150px;
        z-index: 1;
        transform: scaleX(1.5) scaleY(1.2);
      }
      .mockups-desktop {
        z-index: 2;
        position: absolute;
        max-width: 700px;
        padding-bottom: 56.25%;
        top: -185px;
      }
    }
    .text-container {
      background-color: var(--color-neutral-3);
      position: relative;
      z-index: 5;
      width: 30vw;
      justify-content: center;
      align-items: flex-start;
      h1,
      p {
        text-align: left;
      }
      p {
        max-width: 80%;
      }
    }
  }
`;

export default Hero;
