import styles from "./GenericSmallCard.module.css";

function GenericSmallCard({ item, index }) {
  return (
    <div className={styles.large_card} key={index}>
      {index > 0 && <hr />}
      <h3>{item.title}</h3>
      <p>
        {item.description.length < 200
          ? item.description
          : item.description.slice(0, 200) + "..."}
      </p>
    </div>
  );
}

export default GenericSmallCard;
