import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Media.css";

function Media(props) {
  return (
    <div id="Media">
      <Header />
      <Body mediaItems={props.mediaItems} />
      <Footer />
    </div>
  );
}

export default Media;
