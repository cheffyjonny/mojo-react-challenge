import styles from "./Spotlight.module.css";

function Spotlight(props) {
  console.log(props.mediaItems.media.items);
  const featuredItem = props.mediaItems.media.items.filter(
    (item) => item.featured
  );
  console.log(featuredItem);

  const firstColumn = featuredItem.slice(0, 1);
  const secondColumn = featuredItem.slice(1, 3);
  const thirdColumn = featuredItem.slice(3, 4);

  return (
    <div id="spotlight">
      <div className={styles.header}>
        <h1>SPOTLIGHT</h1>
      </div>

      <div className="row">
        {firstColumn.length > 0 && (
          <div className={[styles.first_column, "col-5"].join(" ")}>
            <img
              alt="article_img"
              src={firstColumn[0].thumbnailUri}
              className={styles.first_column_img}
            />
            <h3>{firstColumn[0].title}</h3>
            <p>
              {firstColumn[0].description.length < 250
                ? firstColumn[0].description
                : firstColumn[0].description.slice(0, 250) + "..."}
            </p>
          </div>
        )}

        <hr className={styles.vertical} />

        {secondColumn.length > 0 && (
          <div className="col-3">
            {secondColumn.map((item, index) => {
              return (
                <div key={index}>
                  {index > 0 && <hr />}
                  <h3>{item.title}</h3>
                  <p>
                    {item.description.length < 200
                      ? item.description
                      : item.description.slice(0, 200) + "..."}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <hr className={styles.vertical} />

        {thirdColumn.length > 0 && (
          <div className={[styles.third_column, "col-3"].join(" ")}>
            {thirdColumn.map((item, index) => {
              return (
                <div key={index} className={styles.flex_align_items_center}>
                  {index > 0 && <hr />}
                  <img
                    alt="article_img"
                    src={item.thumbnailUri}
                    className={styles.third_column_img}
                  />
                  <h3>{item.title}</h3>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className={styles.flex_justify_content_center}>
        <hr className={styles.short_parallel} />
      </div>
    </div>
  );
}

export default Spotlight;
