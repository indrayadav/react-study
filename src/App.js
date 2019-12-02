import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./components/SearchParams";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="page-title">
        Main Page
      </h1>

      <SearchParams />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;
