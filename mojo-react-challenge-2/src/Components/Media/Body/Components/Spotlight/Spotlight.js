import styles from "./Spotlight.module.css";
import GenericLargeCard from "./Components/GenericLargeCard/GenericLargeCard";
import GenericMediumCard from "../Articles/Components/GenericMediumCard/GenericMediumCard";
import GenericSmallCard from "./Components/GenericSmallCard/GenericSmallCard";
import GenericSmallWithPicCard from "./Components/GenericSmallWithPicCard/GenericSmallWithPicCard";

function Spotlight(props) {
  const featuredItem = props.mediaItems.media.items.filter(
    (item) => item.featured
  );

  //You can adjust the number of articles displayed.
  const firstColumn = featuredItem.slice(0, 1);
  const secondColumn = featuredItem.slice(1, 5);
  const thirdColumn = featuredItem.slice(5, 11);

  //John's note : I've implement a small rule into how to diplay media.
  //              Number of media 1-2  => 2 * columns, 1 * big | 0-1 * big
  //                               3   => 2 * columns, 1 * big |  2  * medium
  //                              4-5  => 2 * columns, 1 * big | 3-4 * small
  //                              6-11 => 3 * columns, 1 * big |  4  * small  |  1-6 * small w/ pic

  return (
    <div id="spotlight">
      <div className={styles.header}>
        <h1>SPOTLIGHT</h1>
      </div>

      <div className="row ">
        {firstColumn.length > 0 && (
          <div className="col-6">
            <GenericLargeCard item={firstColumn} />
          </div>
        )}

        {secondColumn.length > 0 && <hr className={styles.vertical} />}

        {secondColumn.length !== 1 ? (
          secondColumn.length >= 3 ? (
            <div className={[styles.column_flex, "col"].join(" ")}>
              {secondColumn.map((item, index) => {
                return (
                  <GenericSmallCard key={index} item={item} index={index} />
                );
              })}
            </div>
          ) : (
            <div className={[styles.column_flex, "col"].join(" ")}>
              {secondColumn.map((item, index) => {
                return (
                  <GenericMediumCard key={index} item={item} index={index} />
                );
              })}
            </div>
          )
        ) : (
          <div className="col">
            <GenericLargeCard item={secondColumn} />
          </div>
        )}

        {thirdColumn.length > 0 && <hr className={styles.vertical} />}

        {thirdColumn.length > 0 && (
          <div className={[styles.column_flex, "col"].join(" ")}>
            {thirdColumn.map((item, index) => {
              return (
                <GenericSmallWithPicCard
                  key={index}
                  item={item}
                  index={index}
                />
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
