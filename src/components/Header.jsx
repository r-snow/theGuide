import React, { useState } from "react";

function App({ setHiker, setGuide, setWelcome }) {
  const onHikerClick = () => {
    setHiker(true);
    setWelcome(false);
    setGuide(false);
  };

  const onGuideClick = () => {
    setHiker(false);
    setWelcome(false);
    setGuide(true);
  };

  return (
    <header id="header">
      <h1 onClick={onHikerClick}>hiker-</h1>
      <h1 onClick={onGuideClick}>guide-</h1>
    </header>
  );
}

export default App;
