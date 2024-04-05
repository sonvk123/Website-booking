import React from "react";

import styles from "./ImageType.module.css";
const ImageType = (props) => {
    return (
      <div className={`${styles['items']}`}>
        <img src={props.image} alt='' className={`${styles['image']}`}/>
        <p className={`${styles['name']}`}>{props.name}</p>
        <p className={`${styles['count']}`}>{props.count} hotels</p>
      </div>
    );
};

export default ImageType;
