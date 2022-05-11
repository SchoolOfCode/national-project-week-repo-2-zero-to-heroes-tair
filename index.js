import "./App.css";
import React, { useState } from "react";
import buttonImage from "./Button.png";
import Energisers from "./src/components/Energisers";
import Quotes from "./src/components/Quotes";
import Reminders from "./src/components/Reminders";
import Button from "./src/components/Button";

import Title from "./src/components/Title";

function App() {
  const [id, setId] = useState(1);

  function handleClick() {
    const number = Math.ceil(Math.random() * 10);
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
            {/* <button onClick={handleClick}>
              <img src={buttonImage} alt="title" />
            </button> */}
            <Button handleClick={handleClick} buttonImage={buttonImage} text="Zen"/>
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
