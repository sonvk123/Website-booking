import React from "react";

import Navbar from "../home/Home_Navbar/Navbar";
import HomeFrom from "../home/Home_From/HomeFrom";
import HomeFooter from "../home/Home_Footer/HomeFooter";
import styles from "./detail.module.css";

const detail = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const Detail = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles[`Detail`]}`}>
        <div className={`${styles[`Detail_1`]}`}>
          <h1 className={`${styles[`name`]}`}>{detail.name}</h1>
          <p className={`${styles[`address`]}`}>{detail.address}</p>
          <p className={`${styles[`distance`]}`}>{detail.distance}</p>
          <p className={`${styles[`price`]}`}>{detail.price}</p>
          <div>
            {detail.photos.map((img) => (
              <img className={`${styles[`image`]}`} alt="" src={img} />
            ))}
          </div>
          <button className={`${styles[`btn-Detail_1`]}`}>
            Reserve or Book Now!
          </button>
        </div>
        <div className={`${styles[`Detail_2`]}`}>
          <div className={`${styles[`left`]}`}>
            <h1 className={`${styles[`title`]}`}>{detail.title}</h1>
            <p className={`${styles[`description`]}`}>{detail.description}</p>
          </div>
          <div className={`${styles[`right`]}`}>
            <h2>Perfect for a 9-night stay!</h2>

            <p className={`${styles[`text`]}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              rem ad, exercitationem eaque at vero!
            </p>
            <p className={`${styles[`nine_night_price`]}`}>
              <span>${detail.nine_night_price}</span> (9 nights)
            </p>
            <button className={`${styles[`btn-Detail_2`]}`}>
              Reserve or Book Now!
            </button>
          </div>
        </div>
      </div>
      <HomeFrom />
      <HomeFooter />
    </>
  );
};

export default Detail;
