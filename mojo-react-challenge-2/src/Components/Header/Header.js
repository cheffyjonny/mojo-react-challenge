import styles from "./Header.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";

function Header() {
  return (
    <div id="header" className={styles.header}>
      <Navbar />
      <Banner />
    </div>
  );
}

export default Header;
