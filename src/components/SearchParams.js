import React from "react";
import SearchResults from "./SearchResults";
// import Label from "./Label";

const SearchParams = () => {
  const query_text = "s";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Search Post
        </label>
        <input type="text" id="query" />

        <button>Search</button>
      </form>
      <SearchResults />
    </div>
  );
};

export default SearchParams;
