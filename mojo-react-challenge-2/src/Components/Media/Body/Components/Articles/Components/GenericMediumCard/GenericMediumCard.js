import React from "react";
import styles from "./GenericMediumCard.module.css";

const DataFormatter = (input) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(input);
  const output =
    date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

  return output;
};

function GenericMediumCard({ item, index }) {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(item.url);
    return false;
  };
  return (
    <div key={index} className={styles.generic_medium_card}>
      {index > 0 && <hr />}
      <button onClick={handleClick}>
        <p className={styles.date}>{DataFormatter(item.publishedAt)}</p>
        <div className={styles.flex}>
          <div>
            <h2>{item.title}</h2>
            <p>
              {item.description.length < 200
                ? item.description
                : item.description.slice(0, 200) + "..."}
            </p>
            <p className={styles.publicBy}>{item.source}</p>
          </div>
          <img
            alt="article_img"
            src={item.thumbnailUri}
            className={styles.column_img}
          />
        </div>
      </button>
    </div>
  );
}

export default GenericMediumCard;
