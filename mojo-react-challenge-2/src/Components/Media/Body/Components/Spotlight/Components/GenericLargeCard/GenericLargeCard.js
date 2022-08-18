import styles from "./GenericLargeCard.module.css";

function GenericLargeCard({ item }) {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(item[0].url);
    return false;
  };
  return (
    <div className={styles.generic_large_card}>
      <button onClick={handleClick}>
        <img
          alt="article_img"
          src={item[0].thumbnailUri}
          className={styles.img}
        />
        <h2>{item[0].title}</h2>
        <p>
          {item[0].description.length < 250
            ? item[0].description
            : item[0].description.slice(0, 250) + "..."}
        </p>
      </button>
    </div>
  );
}

export default GenericLargeCard;
