import React from "react";
import RefreshBtn from "./RefreshBtn";

const Error = () => {
  return (
    <section className="error-section">
      <h4 className="error-note">No results! Unable to fetch news</h4>
      <h5 className="error-subnote">Check your internet settings and click Refresh</h5>
      <RefreshBtn />
    </section>
  );
};

export default Error;
