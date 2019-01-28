import React from "react";
import "./style.css";


// By importing the style.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object on the JSX tag
function  Navbar(props) {
  return <div className="navbar">{props.children}</div>;
}
// exporting Navbar
export default Navbar;
