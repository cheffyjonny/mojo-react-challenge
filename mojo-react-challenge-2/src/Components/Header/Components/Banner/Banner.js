import styles from "./Banner.module.css";
import ben_crowe_img from "../../Assets/ben_crowe_images.png";

function Header() {
  return (
    <div id="banner">
      <div className={styles.flex}>
        <div className={styles.img_box}>
          <img
            src={ben_crowe_img}
            alt="ben_crowe"
            className={styles.ben_crowe_img}
          />
        </div>
        <div className={styles.text_box}>
          <h1>MOJO IN THE MEDIA</h1>
          <h3>Articles, videos and podcasts about mojo</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
