import styles from "./GenericSmallCard.module.css";

function GenericSmallCard({ item, index }) {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(item.url);
    return false;
  };
  return (
    <div className={styles.generic_small_card} key={index}>
      <button onClick={handleClick}>
        {index > 0 && <hr />}
        <h3>{item.title}</h3>
        <p>
          {item.description.length < 200
            ? item.description
            : item.description.slice(0, 200) + "..."}
        </p>
      </button>
    </div>
  );
}

export default GenericSmallCard;
