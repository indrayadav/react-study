import React, { useState } from "react";

const MouseHoverEventHandler = () => {
  const [
    btncolor,
    setBtnColor
  ] = useState("red");

  function ChangeButtonColor(
    btncolor,
    color
  ) {
    //alert(`Hello, ${btncolor}`);
    const element = document.getElementById(
      "btn_name"
    );
    element.style.background = `${btncolor}`;
    element.style.color = `${color}`;
    element.style.padding = `10px`;
  }

  return (
    <button
      id="btn_name"
      onMouseOver={() =>
        ChangeButtonColor(
          "blue",
          "white"
        )
      }
    >
      Change Color
    </button>
  );
};

export default MouseHoverEventHandler;
