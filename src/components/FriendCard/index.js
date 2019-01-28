import React from "react";
import "./style.css";

function FriendCard(props) {
  const {image ,name, id , clickedImg} = props
  return (
      <div className="img-container">
        <img alt={name} src={image} onClick={() => clickedImg(id)} className="click" />
      </div>
  );
}

export default FriendCard;
