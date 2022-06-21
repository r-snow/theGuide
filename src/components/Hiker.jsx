import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState();

  const searchTerm = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSubmit = () => {
    // axios get for entry
  };

  return (
    <form className="what" onSubmit={handleSubmit}>
      <div>who- what- where- when- why...</div>
      <label>
        <input
          className="input"
          type="text"
          name="what"
          onChange={searchTerm}
        />
      </label>
      <input className="submit" type="submit" value="Go!" />
    </form>
  );
}

export default App;
