import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Hiker from "./components/Hiker.jsx";
import Guide from "./components/Guide.jsx";

function App() {
  const [welcome, setWelcome] = useState(true);
  const [hiker, setHiker] = useState(false);
  const [guide, setGuide] = useState(false);

  const handleWelcomeClick = () => {
    setWelcome(false);
    setHiker(true);
  };

  return (
    <div>
      <Header setHiker={setHiker} setGuide={setGuide} setWelcome={setWelcome} />
      {welcome && (
        <div className="dont-panic">
          <p onClick={handleWelcomeClick}>DON&apos;T PANIC</p>
        </div>
      )}
      {hiker && (
        <Hiker
          setHiker={setHiker}
          setGuide={setGuide}
          setWelcome={setWelcome}
        />
      )}
      {guide && <Guide />}
    </div>
  );
}

export default App;
