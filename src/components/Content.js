import React from "react";
import styled from "styled-components";
import contentCards from "../constants/content-cards";

const Content = () => {
  return (
    <Wrapper>
      <div className="content-header">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <section className="content">
        {contentCards.map((card) => {
          const { id, title, desc, image: Image } = card;

          return (
            <div key={id}>
              <Image className="img" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-neutral-2);
  text-align: center;

  h2 {
    margin-bottom: 2rem;
  }

  h3 {
    margin: 2rem 0;
  }

  p {
    line-height: 1.75;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 64px 24px;
  }

  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 656px;

    .content-header {
      margin: 0 50px;
      padding-top: 40px;
      p {
        max-width: 60%;
        margin: 0 auto;
      }
    }

    .content {
      margin: 0 50px;
      display: flex;
      justify-content: space-between;
      div {
        margin: 24px;
        h3 {
          min-width: 150px;
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p {
          text-align: justify;
        }
      }
    }
  }
`;

export default Content;
