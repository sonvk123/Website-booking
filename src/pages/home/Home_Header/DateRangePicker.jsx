import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "./DateRangePicker.module.css";

const DateRangePicker = (props) => {
  
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setRange([ranges.selection]);
    props.date(ranges.selection);

  };

  return (
    <div className={`${styles["Modal"]}`}>
      <DateRange
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        className={`${styles["date"]}`}
        minDate={new Date()}
        onChange={handleSelect}
        ranges={range}
      />
    </div>
  );
};

export default DateRangePicker;
