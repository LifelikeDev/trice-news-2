// import { findByTitle } from "@testing-library/react";
import React from "react";

const NewsItem = ({ newsId, newsSource, title, details, link, imageURL }) => {
  return (
    <article className="news-item">
      <div className="image-box">
        <img
          src={
            imageURL ||
            "https://image.freepik.com/free-vector/newspaper-magnifying-glass_1325-124.jpg"
          }
          alt={title}
        />
      </div>
      <div className="content-box">
        <div className="news-title__box">
          <h3 className="news-item__heading">{title}</h3>
          <span className="source">Source: {newsSource || "NewsAPI"}</span>
        </div>
        <p className="news-details">{details}</p>
        <a
          href={link}
          rel="noreferrer"
          target="_blank"
          className="read-more__btn"
        >
          Read More
        </a>
      </div>
    </article>
  );
};

export default NewsItem;
