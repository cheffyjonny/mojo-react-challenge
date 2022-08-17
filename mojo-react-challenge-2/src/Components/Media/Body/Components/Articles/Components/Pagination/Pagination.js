import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ setPage, mediaItems, page }) {
  const items = mediaItems;
  const lastPageNum = Math.round(items.length / 6);

  return (
    <div className={styles.pagination}>
      <button
        className={page !== 1 ? styles.active : ""}
        onClick={() =>
          page >= 2 ? setPage(page - 1) : alert("This is the first page :)")
        }
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      <button
        className={
          (page === 1 || page !== 1) && page !== lastPageNum
            ? styles.active
            : ""
        }
        onClick={() =>
          page !== lastPageNum
            ? setPage(page + 1)
            : alert("This is the last page :)")
        }
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
