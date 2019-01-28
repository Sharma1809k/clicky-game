import React from "react";
import "./style.css";

// By importing the style.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object on the JSX tag

function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}
//Exporting title

export default Title;
