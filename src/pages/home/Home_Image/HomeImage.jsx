import React from "react";

import styles from "./HomeImage.module.css";

import ImageCity from './Image_city/ImageCity';
import ImageInfo from "./Image_info/ImageInfo";
import ImageType from "./Image_type/ImageType";


const cityes = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];
const types = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];
const hotel_list = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const HomeImage = (props) => {
  return (
    <div className={`${styles["HomeImage"]}`}>
      <div className={`${[styles["cityes"]]}`}>
        {cityes.map((city) => (
          <ImageCity
            // className={`${styles["PageCity"]}`}
            key={city.name}
            name={city.name}
            subText={city.subText}
            image={city.image}
          />
        ))}
      </div>
      <h1>Browse by property type</h1>
      <div className={`${styles["type"]}`}>
        {types.map((type) => (
          <ImageType
            // className={`${styles["PageType"]}`}
            key={type.name}
            name={type.name}
            count={type.count}
            image={type.image}
          />
        ))}
      </div>
      <h1>Homes guests love</h1>
      <div className={`${styles["info"]}`}>
        {hotel_list.map((hotel) => (
          <ImageInfo
            // className={`${styles["PageInfo"]}`}
            key={hotel.name}
            name={hotel.name}
            city={hotel.city}
            price={hotel.price}
            rate={hotel.rate}
            type={hotel.type}
            image_url={hotel.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeImage;
