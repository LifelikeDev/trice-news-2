import React from "react";

const About = () => {
  return (
    <main>
      <h2 className="fore-heading">TriceNews</h2>;<h4>About</h4>
      <p className="descriptive-paragraph">
        An online newsfeed provider serving the world with top headlines news
        content from all over the world. TriceNews provides instant news
        headlines gathered from several renowed sources as soon as they happen.
      </p>
      <h4>Service</h4>
      <p className="descriptive-paragraph">
        We don't own any rights to the information we provide. We source our
        news content from{" "}
        <a href="https://www.newsapi.org" target="_blank" rel="noreferrer">
          NewsAPI
        </a>
        , a reliable and massive source of global news. We spice the whole
        experience up by giving you the opportunity to sort out the content
        based on several categories. We hope you enjoy our services.
      </p>
    </main>
  );
};

export default About;
