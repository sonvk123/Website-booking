import React from "react";

import SearchFrom from "./SearchPopup";
import SearchInfo from "./SearchList";

import Navbar from "../home/Home_Navbar/Navbar";
import HomeFrom from '../home/Home_From/HomeFrom';
import HomeFooter from "../home/Home_Footer/HomeFooter";


import styles from "./Search.module.css";

const datas = [
  {
    name: "Tower Street Apartments",
    distance: "500m",
    tag: "Free airport taxi",
    type: "Entire studio • 1 bathroom • 21m² 1 full bed",
    description: "Studio Apartment with Air conditioning",
    free_cancel: true,
    price: 112,
    rate: 8.9,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    distance: "200m",
    tag: "Free Breakfast",
    type: "Entire studio • 2 bathroom • 100m² 2 full bed",
    description: "Studio Apartment",
    free_cancel: true,
    price: 140,
    rate: 9.3,
    rate_text: "Exceptional",
    image_url: "./images/hotel_search_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    distance: "100m",
    tag: "Free Parking",
    type: "1 bathroom • 51m² 2 full bed",
    description: "Hotel in Lisbon",
    free_cancel: false,
    price: 99,
    rate: 8.8,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_3.jpg",
  },
];
const Search = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles[`Search`]}`}>
        <SearchFrom />
        <div className={`${styles[`Info`]}`}>
          {datas.map((data) => (
            <SearchInfo
              name={data.name}
              distance={data.distance}
              tag={data.tag}
              type={data.type}
              description={data.description}
              free_cancel={data.free_cancel}
              price={data.price}
              rate={data.rate}
              rate_text={data.rate_text}
              image_url={data.image_url}
            />
          ))}
        </div>
      </div>
      <HomeFrom />
      <HomeFooter />
    </>
  );
};

export default Search;
