import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState();

  const searchTerm = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSubmit = () => {};

  return (
    <form className="what" onSubmit={handleSubmit}>
      <label>
        What?...
        <input
          className="input"
          type="text"
          name="what"
          onChange={searchTerm}
        />
      </label>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
}

export default App;
