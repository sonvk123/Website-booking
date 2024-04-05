import React from "react";

import styles from "./SearchList.module.css";

const SearchInfo = (props) => {

  const content_1 = props.free_cancel === true ? "Free cancellation" : "";
  const content_2 =
    props.free_cancel === true
      ? "You can cancal latter, so lock in this great proce today!"
      : "";
  return (
    <div className={`${styles[`items`]}`}>
      <img src={props.image_url} alt="" className={`${styles[`image`]}`} />
      <div className={`${styles[`text`]}`}>
        <p className={`${styles[`name`]}`}>{props.name}</p>
        <p className={`${styles[`distance`]}`}>{props.distance} from center</p>
        <p className={`${styles[`tag`]}`}>{props.tag}</p>
        <p className={`${styles[`description`]}`}>{props.description}</p>
        <p className={`${styles[`type`]}`}>{props.type}</p>
        <p className={`${styles[`content_1`]}`}>{content_1}</p>
        <p className={`${styles[`content_2`]}`}>{content_2}</p>
        <p className={`${styles[`price`]}`}>${props.price}</p>
        <p className={`${styles[`rate`]}`}>{props.rate}</p>
        <p className={`${styles[`rate_text`]}`}>{props.rate_text}</p>
        <p className={`${styles[`content_3`]}`}>includes taxes and fees</p>
      </div>
      <button className={`${styles[`btn`]}`} >
        See avalilability
      </button>
    </div>
  );
};

export default SearchInfo;
