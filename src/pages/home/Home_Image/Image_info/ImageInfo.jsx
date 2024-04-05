import React from "react";

import styles from "./ImageInfo.module.css";

const ImageInfo = (props) => {
  const click = (e) => {
    console.log("aaaaaaaaaa");
  };

  return (
    <div className={`${styles["items"]}`}>
      <img src={props.image_url} alt="" className={`${styles["image"]}`} />
      <a
        className={`${styles["name"]}`}
        href="http://localhost:3000/detail"
        onClick={click}
      >
        {props.name}
      </a>
      <p className={`${styles["city"]}`}>{props.city}</p>
      <p className={`${styles["price"]}`}>
        <span>Startig from</span> ${props.price}
      </p>
      <div className={`${styles["div"]}`}>
        <p className={`${styles["rate"]}`}>{props.rate}</p>
        <p>{props.type}</p>
      </div>
    </div>
  );
};

export default ImageInfo;
