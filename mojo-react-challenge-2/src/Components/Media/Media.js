import Body from "./Body/Body";
import "./Media.css";

function Media(props) {
  return (
    <div id="Media">
      <Body mediaItems={props.mediaItems} />
    </div>
  );
}

export default Media;
