import React from "react";

import styles from "./Navbar.module.css";

import NavBarItem from "./NavBarItem";
const datas = [
  { type: "Stays", icon: "fa-bed", active: true },
  { type: "Flights", icon: "fa-plane", active: false },
  { type: "Car rentals", icon: "fa-car", active: false },
  { type: "Attractions", icon: "fa-bed", active: false },
  { type: "Airport taxis", icon: "fa-taxi", active: false },
];

const Navbar = (props) => {
  // Thay thế URL hiện tại bằng URL mới
  const handleRedirect = () => {
    window.location.replace("http://localhost:3000");
  };

  return (
    <div className={`${styles["nav_bar"]}`}>
      <div className={`${styles["div"]}`}>
        <h1 onClick={handleRedirect}>Booking Website</h1>
        <button className={`${styles["btn"]} ${styles["btn-Register"]}`}>
          Register
        </button>
        <button className={`${styles["btn"]} ${styles["btn-Login"]}`}>
          Login
        </button>
      </div>
      <div className={`${styles["div"]}`}>
        {datas.map((data, index) => (
          <NavBarItem
            key={index}
            type={data.type}
            icon={data.icon}
            active={data.active}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
