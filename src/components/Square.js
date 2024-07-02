import React from "react";

function Square({ handleClick, value, id }) {
  return (
    <button className={"square"} onClick={handleClick} id={id}>
      {value}
    </button>
  );
}

export default Square;
