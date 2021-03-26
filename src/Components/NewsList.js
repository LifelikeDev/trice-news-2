import React from "react";
import NewsItem from "./NewsItem";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { useGlobalContext } from "../context";

const NewsList = () => {
  const { headlines } = useGlobalContext();

  if (headlines.length < 1) {
    return (
      <section className="error-section">
        <h4 className="error-note">No match found!</h4>
        <h5 className="loading-subnote">Refresh your browser and try again</h5>
      </section>
    );
  }

  return (
    <section>
      <div className="settings">
        <h2 className="fore-heading">Top Headlines</h2>
        <div className="news-filter__wrapper">
          <h3>Filter results</h3>
          <div className="news-filter">
            <Filter />
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="news-box">
        {headlines.map((headline, index) => {
          return <NewsItem key={index} {...headline} />;
        })}
      </div>
    </section>
  );
};

export default NewsList;
