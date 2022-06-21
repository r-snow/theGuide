import React, { useState } from "react";
import axios from "axios";

function App() {
  const [entry, setEntry] = useState({});

  const searchTerm = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
    console.log(entry);
  };

  const handleSubmit = () => {
    axios
      .post("/entry", entry)
      .then((response) => console.log(response))
      .cathc((err) => console.log(err));
  };

  return (
    <form className="guide" onSubmit={handleSubmit}>
      <div>what don&apos;t we know?...</div>
      <label>
        keyword:
        <input
          className="input"
          type="text"
          name="keyword"
          onChange={searchTerm}
        />
      </label>
      <label>
        title:
        <input
          className="input"
          type="text"
          name="title"
          onChange={searchTerm}
        />
      </label>
      <div>location:</div>
      <label>
        longitude:
        <input
          className="input"
          type="text"
          name="longitude"
          onChange={searchTerm}
        />
      </label>
      <label>
        latitude:
        <input
          className="input"
          type="text"
          name="latitude"
          onChange={searchTerm}
        />
      </label>
      <label>
        height:
        <input
          className="input"
          type="text"
          name="height"
          onChange={searchTerm}
        />
      </label>
      <label>
        links:
        <input
          className="input"
          type="text"
          name="links"
          onChange={searchTerm}
        />
      </label>
      <label>
        guide:
        <input
          className="input"
          type="text"
          name="guide"
          onChange={searchTerm}
        />
      </label>
      <input className="submit" type="submit" value="Go!" />
    </form>
  );
}

export default App;
