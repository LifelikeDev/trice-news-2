import { queryByAttribute } from "@testing-library/react";
import { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchBar = () => {
  const { setSearchItem } = useGlobalContext();
  const searchText = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchItem(searchText.current.value);
  };

  return (
    <div className="filter-box">
      <form className="filter-category" onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input type="text" name="search" id="search" ref={searchText} />
      </form>
    </div>
  );
};

export default SearchBar;
