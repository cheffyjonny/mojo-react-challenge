import styles from "./GenericSmallWithPicCard.module.css";

function GenericSmallWithPicCard({ item, index }) {
  return (
    <div>
      {index > 0 && <hr />}
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
    </div>
  );
}

export default GenericSmallWithPicCard;
