import styles from "./Navbar.module.css";
import mojo_logo from "../../Assets/mojo_logo.png";
import ToggleGroup from "./Components/ToggleGroup";

function Header() {
  return (
    <div id="navbar">
      <div className={styles.flex}>
        <img src={mojo_logo} alt="MojoCrowe" className={styles.mojo_logo} />
        <ToggleGroup />
      </div>
    </div>
  );
}

export default Header;
