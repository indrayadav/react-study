import React from "react";
import ReactDOM from "react-dom";
import SearchResults from "./components/SearchResults";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="page-title">
        Main Page
      </h1>

      <SearchResults />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;
