import React, { useState } from "react";
import axios from "axios";
import Entry from "./Entry.jsx";

function Guide() {
  const [entry, setEntry] = useState();
  const [submitted, setSubmitted] = useState(false);

  const searchTerm = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/entry", entry)
      .then((response) => console.log(response))
      .then(() => setSubmitted(true))
      .cathc((err) => console.log(err));

    const keywordInput = document.getElementById("keyword");
    keywordInput.value = "";

    const titleInput = document.getElementById("title");
    titleInput.value = "";

    const longitudeInput = document.getElementById("longitude");
    longitudeInput.value = "";

    const latitudeInput = document.getElementById("latitude");
    latitudeInput.value = "";

    const heightInput = document.getElementById("height");
    heightInput.value = "";

    const linksInput = document.getElementById("links");
    linksInput.value = "";

    const guideInput = document.getElementById("guide");
    guideInput.value = "";

    const entryInput = document.getElementById("entry");
    entryInput.value = "";
  };

  return (
    <div>
      <form className="guide" onSubmit={handleSubmit}>
        <div className="whoWhat">what don&apos;t we know?...</div>
        <label>
          keyword:
          <input
            className="input"
            type="text"
            name="keyword"
            id="keyword"
            onChange={searchTerm}
            placeholder="[enter keyword]"
          />
        </label>
        <label>
          title:
          <input
            className="input"
            type="text"
            name="title"
            id="title"
            onChange={searchTerm}
            placeholder="[enter title]"
          />
        </label>
        <div>location:</div>
        <label>
          --longitude:
          <input
            className="input"
            type="text"
            name="longitude"
            id="longitude"
            onChange={searchTerm}
            placeholder="[enter longitude]"
          />
        </label>
        <label>
          --latitude:
          <input
            className="input"
            type="text"
            name="latitude"
            id="latitude"
            onChange={searchTerm}
            placeholder="[enter latitude]"
          />
        </label>
        <label>
          --height:
          <input
            className="input"
            type="text"
            name="height"
            id="height"
            onChange={searchTerm}
            placeholder="[enter height]"
          />
        </label>
        <label>
          links:
          <input
            className="input"
            type="text"
            name="links"
            id="links"
            onChange={searchTerm}
            placeholder="[enter links]"
          />
        </label>
        <label>
          guide:
          <input
            className="input"
            type="text"
            name="guide"
            id="guide"
            onChange={searchTerm}
            placeholder="[enter guide]"
          />
        </label>
        <label>
          entry:
          <textarea
            className="input"
            type="text"
            name="entry"
            id="entry"
            onChange={searchTerm}
            placeholder="[enter entry]"
          />
        </label>
        {entry && (
          <div>
            <input className="submit" type="submit" value="Go!" />
          </div>
        )}
      </form>
      {submitted && (
        <div>
          <div className="console">
            congrats! you are our newest Guide, you&#39;ve worked hard - take a
            lunch break -- then, when you get around to it review your entry
            below:
          </div>
          <div className="console">---------------------------------</div>
          <Entry entry={entry} />
        </div>
      )}
    </div>
  );
}

export default Guide;
