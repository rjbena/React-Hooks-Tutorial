import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {

    fetchAdvice();
  });

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;


        setAdvice(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <div className="cart">
        <h1 className="heading">{advice}</h1>
        <button onClick={() => fetchAdvice()}>Get advice</button>
      </div>
    </div>
  );
};

export default App;
