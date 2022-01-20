import "./App.css";
import React, { useState } from "react";
import buttonImage from "./Button.png"
import Energisers from "../Energisers";
import Quotes from "../Quotes";
import Reminders from "../Reminders";

import Title from "../Title";

function App() {
  const [id, setId] = useState();
  // const [idQ, setIdQ] = useState(1);
  // const [idR, setIdR] = useState(1);
  // const URL = "http://localhost:3001";
  // useEffect(() => {
  //   fetch(`${URL}/energisers/${idE}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data.message);
  //     });
  // }, [idE]);

    
  function handleClick() {
    const number = Math.ceil(Math.random() * 3);
    if (number !== id) {
      setId(number);
    }

  }

  // async function fetchData(idE) {
  //   const response = await fetch(`${URL}/energisers/${idE}`);
  //   const data = await response.json();
  //   console.log(data);
  // }
  // function zenButton(event) {
  //   const randomId = Math.ceil(Math.random() * 3);
  //   console.log(randomId);
  //   setIdE(randomId);
  //   async function fetchData(id) {
  //     const response = await fetch(`${URL}/energisers/${id}`);
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   fetchData(randomId);
  // }
  // useEffect(() => {
  //   fetch({ URL })
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, [idQ]);
  // useEffect(() => {
  //   fetch({ URL })
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, [idR]);
  //write all 3 functions in here
  // console.log(randomId);

  // useEffect(() => {
  //   fetchData();
  // });
  return (
    <main>
    {/* <button onClick={handleClick}>pls click me</button> */}
    <div>
      <Title> </Title>
      <div id="button1"> <button onClick={handleClick}><img src={buttonImage} alt="title"/></button></div>
      <Energisers text="Energise!" id={id}></Energisers>
      <Quotes text="Your daily good vibes!" id={id}></Quotes>
      <Reminders text="Remember!" id={id}></Reminders>

      {/* <button onClick={handleClick} text="Zen-Time">
        Click
      </button>
      <Energisers id={id}></Energisers>
      <Quotes id={id}></Quotes>
      <Reminders id={id}></Reminders> */}
    </div>
    </main>
  );
}
export default App;
