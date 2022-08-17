import React, { useState } from "react";
import styles from "./Articles.module.css";
import Pagination from "./Components/Pagination/Pagination";
import GenericMediumCard from "./Components/GenericMediumCard/GenericMediumCard";

function Articles(props) {
  const items = props.mediaItems.media.items;
  const [page, setPage] = useState(1);

  const pageIndex = 6 * (page - 1);
  const firstColumn = items.slice(page === 1 ? 0 : pageIndex, pageIndex + 3);
  const secondColumn = items.slice(pageIndex + 3, page * 6);
  return (
    <div id="articles">
      <div className={styles.header}>
        <h1>ARTICLES</h1>
        <Pagination
          page={page}
          setPage={setPage}
          mediaItems={props.mediaItems.media.items}
        />
      </div>

      <div className="row">
        {firstColumn.length > 0 && (
          <div className="col">
            {firstColumn.map((item, index) => {
              return (
                <GenericMediumCard key={index} item={item} index={index} />
              );
            })}
          </div>
        )}

        {secondColumn.length > 0 && (
          <div className="col">
            {secondColumn.map((item, index) => {
              return (
                <GenericMediumCard key={index} item={item} index={index} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Articles;
