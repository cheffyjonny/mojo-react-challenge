import styles from "./Footer.module.css";

function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <ul>
        <li>
          <a href="#">Terms &#38; Conditions</a>
        </li>

        <li>
          <a href="#">Privacy Policy</a>
        </li>

        <li>
          <a href="#">&copy; Copyright of Mojo Crowe 2022</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
