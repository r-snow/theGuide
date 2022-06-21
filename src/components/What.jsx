import React, { useState } from "react";
import What from "./components/what";

function App() {
  const [welcome, setWelcome] = useState(true);

  const handleWelcomeClick = () => setWelcome(false);

  const handleWelcomeKeyPress = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      setWelcome(false);
    }
  };

  return (
    <div>
      {welcome ? (
        <div
          className="dont-panic"
          onClick={handleWelcomeClick}
          onKeyPress={handleWelcomeKeyPress}
          role="button"
          tabIndex={0}
        >
          <p>DON&apos;T PANIC</p>
        </div>
      ) : (
        <What />
      )}
    </div>
  );
}

export default App;
