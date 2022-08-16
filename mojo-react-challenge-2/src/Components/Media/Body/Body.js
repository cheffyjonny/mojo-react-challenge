import styles from "./Body.module.css";
import Spotlight from "./Components/Spotlight/Spotlight";

function Body(props) {
  return (
    <div id={styles.body}>
      <Spotlight mediaItems={props.mediaItems} />
    </div>
  );
}

export default Body;
