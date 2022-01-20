import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import motivationImage from "./Motivation.png"


function Quotes({ id }) {
  const [quote, setQuote] = useState("");
  const URL = "http://localhost:3001/quotes";

  async function fetchQuote() {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    // console.log(data.payload[0]);
    setQuote({
      quote: data.payload[0].quotation,
    });
    // console.log(quote.quote);
  }

  useEffect(() => {
    fetchQuote();
  }, [id]);
  
return <div id="quotes1"><img src={motivationImage} alt="title"/><p id="quotesText">{quote.quote}</p></div>;
  // return <div>{quote.quote}</div>;
}

export default Quotes;
