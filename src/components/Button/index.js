import "./styles.css";
import React from "react";
//import buttonImage from "./Button.png"


export default function Button({ handleClick,buttonImage}) {
  return (
    <div id="button1">
      <button onClick={handleClick}><img src={buttonImage} alt="title"/>{text}</button>
    </div>
  );
}
