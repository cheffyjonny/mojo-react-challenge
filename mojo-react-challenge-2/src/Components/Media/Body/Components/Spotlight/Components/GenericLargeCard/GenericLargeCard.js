import styles from "./GenericLargeCard.module.css";

function GenericLargeCard({ item }) {
  return (
    <div className={styles.large_card}>
      <img
        alt="article_img"
        src={item[0].thumbnailUri}
        className={styles.img}
      />
      <h3>{item[0].title}</h3>
      <p>
        {item[0].description.length < 250
          ? item[0].description
          : item[0].description.slice(0, 250) + "..."}
      </p>
    </div>
  );
}

export default GenericLargeCard;
