import styles from "./GenericSmallWithPicCard.module.css";

function GenericSmallWithPicCard({ item, index }) {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(item.url);
    return false;
  };
  return (
    <div className={styles.generic_small_with_pic_card}>
      {index > 0 && <hr />}
      <button onClick={handleClick}>
        <div
          key={index}
          className={[styles.flex_align_items_center, styles.third_column].join(
            " "
          )}
        >
          <img
            alt="article_img"
            src={item.thumbnailUri}
            className={styles.third_column_img}
          />
          <h3>{item.title}</h3>
        </div>
      </button>
    </div>
  );
}

export default GenericSmallWithPicCard;
