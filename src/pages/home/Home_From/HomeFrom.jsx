import React, { useState } from "react";

import styles from "./HomeFrom.module.css";

const HomeFrom = (props) => {
  const [text, setText] = useState("Your email");
  const click = (e) => {
    setText(e.target.value);
    console.log(e.target.value);  
  };
  return (
    <div className={`${styles[`HomeFrom`]}`}>
      <h1>Save time, save money!</h1>
      <h2>Sign up and we'll send the best deals to you</h2>
      <input placeholder="Your email" onChange={click}></input>
      <button type="submit">Subscribe</button>
    </div>
  );
};

export default HomeFrom;
