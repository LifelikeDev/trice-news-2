import React, { useState, useEffect, useContext, useCallback } from "react";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=35ea905e4b0c4fe8843c07a54d1b1cf1";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [headlines, setHeadlines] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // fetching news initially...
  const getNews = useCallback(async () => {
    let categoryParameter = `&category=${filteredCategory}`;
    let searchParameter = `&q=${searchItem}`;
    setLoading(true);
    try {
      if (filteredCategory === "") {
        return (categoryParameter = null);
      }

      if (searchItem === "") {
        return (searchParameter = null);
      }

      const response = refresh
        ? await fetch(url)
        : await fetch(`${url}${categoryParameter}${searchParameter}`);
      const data = await response.json();
      const { articles } = data;

      if (articles) {
        const newsItem = articles.map((article) => {
          const {
            source: { id: newsId },
            source: { id: newsSource },
            title,
            description,
            url,
            urlToImage,
          } = article;
          //   console.log(article);

          return {
            newsId,
            newsSource,
            title,
            details: description,
            link: url,
            imageURL: urlToImage,
          };
        });
        setLoading(false);
        setRefresh(false);
        setHeadlines(newsItem);
      } else {
        setLoading(false);
        setRefresh(false);
        setHeadlines([]);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }, [filteredCategory, searchItem, refresh]);

  useEffect(() => {
    getNews();
  }, [getNews, filteredCategory, searchItem]);

  // useEffect(() => {
  //   fetchAnew();
  // }, []);

  //   useEffect(() => {
  //     changeCategory();
  //     return () => {
  //       setHeadlines([]);
  //     };
  //   }, []);

  return (
    <AppContext.Provider
      value={{
        getNews,
        setFilteredCategory,
        setSearchItem,
        setRefresh,
        setError,
        headlines,
        loading,
        error,
      }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};

// Define custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
