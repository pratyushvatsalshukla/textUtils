import React from "react";
import { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Please Enter Text Here");
  const handleToUpperCase = () => {
    setText(text.toUpperCase())
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  return (
    <div className="container ">
      <h1>{props.heading}</h1>
      <div className="my-3  ">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleToUpperCase}>Convert To UpperCase</button>
    </div>
  );
};

export default TextForm;
