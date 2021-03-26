import React from "react";
import NewsList from "../Components/NewsList";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import { useGlobalContext } from "../context";

const Home = () => {
  const { loading, error } = useGlobalContext();

  if (error) {
    return (
      <main className="homepage">
        <h2 className="fore-heading">Your No.1 newsfeed provider</h2>
        <h4>News from around the globe delivered to you with ease</h4>
        <section className="content-section">
          <Error />
        </section>
      </main>
    );
  }

  return (
    <main className="homepage">
      <h2 className="fore-heading">Your No.1 newsfeed provider</h2>
      <h4>News from around the globe delivered to you with ease</h4>
      <section className="content-section">
        {loading ? <Loading /> : <NewsList />}
      </section>
    </main>
  );
};

export default Home;
