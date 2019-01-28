import React from "react";
import "./style.css";

// By importing the style.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object on the JSX tag

function FriendCard(props) {
  const {image ,name, id , clickedImg} = props
  return (
      <div className="img-container">
        <img alt={name} src={image} onClick={() => clickedImg(id)} className="click" />
      </div>
  );
}
//exporting FriendCard
export default FriendCard;
