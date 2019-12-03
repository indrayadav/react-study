import React from "react";

const SayHello = () => {
  function HelloWorld(name) {
    alert(`Hello,  ${name}`);
  }

  return (
    <button
      onClick={() =>
        HelloWorld("Indra")
      }
    >
      Say Hello
    </button>
  );
};

export default SayHello;
