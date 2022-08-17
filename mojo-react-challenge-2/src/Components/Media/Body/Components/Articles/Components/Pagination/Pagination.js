import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ setPage, mediaItems, page }) {
  const items = mediaItems;
  const lastPageNum = items ? Math.round(items.length / 6) : 1;

  return (
    <div className={styles.pagination}>
      <button
        data-testid="media"
        className={page !== 1 ? styles.active : ""}
        onClick={() => (page >= 2 ? setPage(page - 1) : "")}
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      <button
        className={
          (page === 1 || page !== 1) && page !== lastPageNum
            ? styles.active
            : ""
        }
        onClick={() => (page !== lastPageNum ? setPage(page + 1) : "")}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
