import React from "react";
import { useGlobalContext } from "../context";

const RefreshBtn = () => {
  const { setError, setRefresh, getNews } = useGlobalContext();

  const fetchAnew = () => {
    setError(false);
    setRefresh(true);
    getNews();
  };

  return (
    <>
      <button className="refresh-btn" onClick={fetchAnew}>
        Refresh
      </button>
    </>
  );
};

export default RefreshBtn;
