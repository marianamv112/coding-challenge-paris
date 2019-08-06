import React, { useState } from "react";

export default function CustomizeImage() {
  const [size, setSize] = useState(33);
  const [url, setUrl] = useState("");

  function handleImage(e) {
    setUrl(e.target.value);
  }

  function handleRange(e) {
    setSize(e.target.value);
  }

  return (
    <div className="containerPage">
      <div className="containerCustom">
        <h1>Customize Image</h1>
        <input
          type="text"
          className="form-control"
          id="exampleInput"
          onChange={handleImage}
        />
        <br />
        <input
          type="range"
          className="form-control-range"
          id="exampleRangeInput"
          min="0"
          max="200"
          onChange={handleRange}
        />
        <br />
        <p>
          {size} x {size} px
        </p>
        <br />
        {url && <img src={url} width={size} height={size} />}
      </div>
    </div>
  );
}
