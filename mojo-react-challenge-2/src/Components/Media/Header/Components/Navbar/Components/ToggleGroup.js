import React, { useState } from "react";
import styles from "./ToggleGroup.module.css";

function ToggleGroup() {
  const menuItems = ["Home", "Course & App", "Media", "Shop"];
  const [activeLanguage, setActiveLanguage] = useState("Media");
  const handleChange = (language) => {
    setActiveLanguage(language);
  };
  const getClass = (languageCode) => {
    return languageCode === activeLanguage ? styles.active : "";
  };
  return (
    <div>
      <ul className={styles.selector}>
        {menuItems.map((item) => (
          <li key={item}>
            <button
              className={getClass(item)}
              onClick={() => handleChange(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToggleGroup;
