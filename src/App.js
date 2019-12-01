import React from "react";
import ReactDOM from "react-dom";
//import SearchParams from "/components/SearchParams.js";

import "./App.css";

const name = "sanjeev";

const App = () => (
  <div>
    {" "}
    My First App by{" "}
    {(function() {
      return `I am ${name}`;
    })()}{" "}
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;
