import React from "react";

const Loading = () => {
  return (
    <section>
      <div className="loading-box">
        <div className="loader"></div>
      </div>
      <h4 className="loading-note">Fetching News...</h4>
    </section>
  );
};

export default Loading;
