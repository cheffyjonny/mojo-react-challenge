import styles from "./Body.module.css";
import Spotlight from "./Components/Spotlight/Spotlight";
import Articles from "./Components/Articles/Articles";

function Body(props) {
  return (
    <div id="body" className={styles.body}>
      <Spotlight mediaItems={props.mediaItems} />
      <Articles mediaItems={props.mediaItems} />
    </div>
  );
}

export default Body;
