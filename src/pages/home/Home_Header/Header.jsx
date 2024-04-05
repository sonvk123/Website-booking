import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";

import DateRangePicker from "./DateRangePicker";
import styles from "./Header.module.css";

const Header = (props) => {
  var date_now = format(new Date(), "dd/MM/yyyy");

  const refCalen = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  // Tạo state để lưu giá trị ngày tháng năm hiện tại


  useEffect(() => {
    const currentDate = date_now;
    // Cập nhật giá trị ngày tháng năm hiện tại vào state
    setStartTime(currentDate);
    setEndTime(currentDate);
  }, []);

  const khiNhanBenNgoai = (e) => {
    if (refCalen.current && !refCalen.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const khiNhanESC = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", khiNhanBenNgoai, true);
    document.addEventListener("keydown", khiNhanESC, true);

    return () => {
      document.removeEventListener("click", khiNhanBenNgoai, true);
      document.removeEventListener("keydown", khiNhanESC, true);
    };
  }, []);

  // khi nhấn chuột vào input time
  const click = () => {
    setIsOpen(true);
  };

  // Thay thế URL hiện tại bằng URL mới
  const handleRedirect = () => {
    window.location.replace("http://localhost:3000/search");
  };

  // Lấy dữ liệu ngày tháng được chọn bằng DateRangePicker
  const dataTime = (e) => {
    setStartTime(format(e.startDate, "dd/MM/yyyy"))
    setEndTime(format(e.endDate, "dd/MM/yyyy"))
  };

  return (
    <div className={`${styles["Header"]}`}>
      <div className={`${styles["div"]}`}>
        <h1>A lifetime of discounts? It's Genius.</h1>
        <h2>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </h2>
        <button className={`${styles["btn"]}`}>Sign in/ Register</button>
        <div className={`${styles["input"]}`}>
          <i className="fa fa-user"></i>
          <input
            className={`${styles["where"]}`}
            type="text"
            placeholder="where are you going?"
            onChange={click}
          />
          <input
            className={styles["date"]}
            placeholder={`${StartTime} to ${EndTime}`}
            onChange={click}
            onClick={click}
          />
          <div ref={refCalen}>
            {isOpen === true ? <DateRangePicker date={dataTime} /> : "nul"}
            {/* <DateRangePicker /> */}
          </div>
          <input
            className={`${styles["room"]}`}
            type="text"
            placeholder="1 adult 0 children 1 room"
            onChange={click}
          ></input>
          <button className={`${styles["Search"]}`} onClick={handleRedirect}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
