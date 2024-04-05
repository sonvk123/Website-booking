import React from "react";

import styles from "./SearchPopup.module.css";

const SearchFrom = (props) => {
  return (
    <div className={`${styles[`From`]}`}>
      <div className={`${styles[`Search`]}`}>
        <h1>Search</h1>
        <div>
          <label>Destination</label>
          <input></input>
        </div>
        <div>
          <label>Check-in Date</label>
          <input></input>
        </div>
      </div>
      <div className={`${styles[`Optons`]}`}>
        <h2>Optons</h2>
        <div>
          <label>Min price per night</label>
          <input></input>
        </div>
        <div>
          <label>Max price per night</label>
          <input></input>
        </div>
        <div>
          <label>adult</label>
          <input></input>
        </div>
        <div>
          <label>Children</label>
          <input></input>
        </div>
        <div>
          <label>Room</label>
          <input></input>
        </div>
      </div>
      <div className={`${styles[`btn`]}`}>
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default SearchFrom;
