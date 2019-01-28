import React from "react";
import "./style.css";

function  Navbar(props) {
  return <div className="navbar">{props.children}</div>;
}

export default Navbar;
