import React from "react";
import { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Please Enter Text Here");
  const handleToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container ">
        <h1>{props.heading}</h1>
        <div className="my-3 mx-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-3" onClick={handleToUpperCase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleToLowerCase}>
          Convert To LowerCase
        </button>
      </div>
      <div className="container">
        <h2>
            Your Content Summary : 
        </h2>
        <p>{text.split(' ').length} Words and {text.length} characters </p>
        <p>You can read the content in {text.split(' ').length*0.008 } minutes</p>
      </div>
    </>
  );
};

export default TextForm;
