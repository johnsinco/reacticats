import React from "react";
import { render } from "react-dom";
import ReactiCats from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Random Cats for your React Site!</h1>
      <ReactiCats></ReactiCats>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
