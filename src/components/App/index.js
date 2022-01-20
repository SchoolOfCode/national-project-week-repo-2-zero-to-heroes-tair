import "./App.css";
import React, { useState } from "react";
import buttonImage from "./Button.png";
import Energisers from "../Energisers";
import Quotes from "../Quotes";
import Reminders from "../Reminders";

import Title from "../Title";

function App() {
  const [id, setId] = useState();

  function handleClick() {
    const number = Math.ceil(Math.random() * 3);
    if (number !== id) {
      setId(number);
    }
  }

  return (
    <main>
      {/* <button onClick={handleClick}>pls click me</button> */}
      {/* <div>
        <Title> </Title>
        <div id="button1">
          {" "}
          <button onClick={handleClick}>
            <img src={buttonImage} alt="title" />
          </button>
        </div>
        <Energisers text="Energise!" id={id}></Energisers>
        <Quotes text="Your daily good vibes!" id={id}></Quotes>
        <Reminders text="Remember!" id={id}></Reminders>
      </div> */}
      <div class="topcontainer">
        <div class="leftcolumn">
          <Reminders text="Remember!" id={id}></Reminders>
        </div>
        <div class="centrecolumn">
          <Title> </Title>
          <div id="button1">
            {" "}
            <button onClick={handleClick}>
              <img src={buttonImage} alt="title" />
            </button>
          </div>
          <Energisers text="Energise!" id={id}></Energisers>
        </div>
        <div class="rightcolumn">
          <Quotes text="Your daily good vibes!" id={id}></Quotes>
        </div>
      </div>
    </main>
  );
}
export default App;
