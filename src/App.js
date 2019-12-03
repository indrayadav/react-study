import React from "react";
import ReactDOM from "react-dom";
import SearchResults from "./components/Search/SearchResults";

import SayHello from "./components/Search/SayHello";
import MouseHoverEventHandler from "./components/Search/MouseHoverEventHandler";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="page-title">
        Main Page
      </h1>
      <SayHello />
      <MouseHoverEventHandler />
      <SearchResults />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;
