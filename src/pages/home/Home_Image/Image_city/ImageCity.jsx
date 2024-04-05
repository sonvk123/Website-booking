import React from "react";

import styles from "./ImageCity.module.css";
const ImageCity = (props) => {
  return (
    <div className={`${styles['items']}`}>
      <img src={props.image} alt='' className={`${styles['image']}`}/>
      <p className={`${styles['name']}`}>{props.name}</p>
      <p className={`${styles['subText']}`}>{props.subText}</p>
    </div>
  );
};

export default ImageCity;
