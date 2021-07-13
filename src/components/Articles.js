import React from "react";
import styled from "styled-components";
import articles from "../constants/articles";

const Articles = () => {
  return (
    <Wrapper>
      <h2>Latest Articles</h2>
      <section>
        {articles.map((article) => {
          const { id, author, title, desc, image } = article;
          return (
            <div className="card" key={id}>
              <img src={image} alt={title} />
              <div className="card-body">
                <p className="author">{author}</p>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-neutral-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 64px 24px;

  .card {
    background-color: var(--color-neutral-2);
    border-radius: 2%;
    overflow: hidden;
    max-width: 500px;
    margin-top: 30px;
    img {
      width: 100%;
      height: 50%;
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 31px 24px;

    h4 {
      margin-bottom: 8px;
    }
    p {
      line-height: 1.5;
      font-size: 1.3rem;
    }
    .author {
      font-size: 1rem;
      margin-bottom: 8px;
    }
  }

  h2 {
    max-width: 85%;
    text-align: center;
  }

  @media screen and (min-width: 769px) {
    padding: 80px 85px;
    section {
      display: flex;
      justify-content: space-between;
    }
    .card {
      max-width: 23%;
      img {
        object-fit: cover;
      }
    }
  }
`;

export default Articles;
