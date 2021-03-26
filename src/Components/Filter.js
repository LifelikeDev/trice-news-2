import React from "react";
import { category } from "../data";
import { useGlobalContext } from "../context";

const Filter = () => {
  const { setFilteredCategory } = useGlobalContext();

  const triggerFilter = () => {
    const select = document.querySelector("#category").value;
    setFilteredCategory(select);
  };

  return (
    <div className="filter-box">
      <div className="filter-category">
        <label htmlFor="category">Category</label>
        <select name="category" id="category" onChange={triggerFilter}>
          {category.map((categoryItem) => {
            return (
              <option
                key={categoryItem.id}
                value={categoryItem.category}
                placeholder="category"
              >
                {categoryItem.category}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
