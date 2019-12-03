import React from "react";
import ReactDOM from "react-dom";
import SearchResults from "./components/SearchResults";

import SayHello from "./components/SayHello";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="page-title">
        Main Page
      </h1>
      <SayHello />
      <SearchResults />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;
