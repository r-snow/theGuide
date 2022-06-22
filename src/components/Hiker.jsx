import React, { useState } from "react";
import axios from "axios";
import Entry from "./Entry.jsx";

function Hiker({ setHiker, setGuide, setWelcome }) {
  const [search, setSearch] = useState();
  const [entry, setEntry] = useState();

  const searchTerm = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/entry/${search}`)
      .then((response) => setEntry(response.data))
      .catch((err) => console.log(err));
    const whatInput = document.getElementById("what");
    whatInput.value = "";
  };

  return (
    <div>
      <form className="hiker" onSubmit={handleSubmit}>
        <div className="whoWhat">
          who-
          <br /> what-
          <br /> where-
          <br /> when-
          <br /> why...
        </div>
        <label>
          <input
            className="input"
            type="text"
            name="what"
            onChange={searchTerm}
            placeholder="[search]"
            id="what"
          />
        </label>
        <input className="submit" type="submit" value="Go!" />
      </form>
      {entry && (
        <div>
          <div className="console">---------------------------------</div>
          <Entry entry={entry} />
        </div>
      )}
    </div>
  );
}

export default Hiker;
