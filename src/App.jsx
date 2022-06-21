import React, { useState } from "react";
import Header from "./components/Header.jsx";
import What from "./components/What.jsx";
import Guide from "./components/Guide.jsx";

function App() {
  const [welcome, setWelcome] = useState(true);
  const [hiker, setHiker] = useState(false);
  const [guide, setGuide] = useState(false);

  const handleWelcomeClick = () => {
    setWelcome(false);
    setHiker(true);
  };

  const handleWelcomeKeyPress = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      setWelcome(false);
      setHiker(true);
    }
  };

  return (
    <div>
      <Header setHiker={setHiker} setGuide={setGuide} setWelcome={setWelcome} />
      {welcome && (
        <div className="dont-panic">
          <p
            onClick={handleWelcomeClick}
            onKeyPress={handleWelcomeKeyPress}
            role="button"
            tabIndex={0}
          >
            DON&apos;T PANIC
          </p>
        </div>
      )}
      {hiker && <What />}
      {guide && <Guide />}
    </div>
  );
}

export default App;
