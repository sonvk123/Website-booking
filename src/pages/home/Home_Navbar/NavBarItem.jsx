import React from "react";

import styles from "./NavBarItem.module.css";
const NavBarItem = ({ type, icon, active }) => {
  const border = active === true ? "active" : "";
  return (

      <button className={`${styles["btn"]} ${styles[border]}`}>
        <i className={`fa ${icon} ${styles["icon"]}`} /> {type}
      </button>

  );
};
export default NavBarItem;
