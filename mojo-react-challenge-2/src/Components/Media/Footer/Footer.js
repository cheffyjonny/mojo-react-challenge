import styles from "./Footer.module.css";

function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <ul className="">
        <li className="">
          <a href="#">Terms &#38; Conditions</a>
        </li>

        <li className="">
          <a href="#">Privacy Policy</a>
        </li>

        <li className="">
          <a href="#">&copy; Copyright of Mojo Crowe 2022</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
