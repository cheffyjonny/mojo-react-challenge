import { gql, useQuery } from "@apollo/client";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Media from "./Components/Media/Media";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./Components/Sidebar/Sidebar.css";

const GET_MEDIA = gql`
  query GetMedia {
    media {
      items {
        thumbnailUri
        featured
        source
        title
        url
        description
        publishedAt
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_MEDIA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :&#40;</p>;

  //John's note : The NavBar in the Header and Sidebar doesn't route to anywhere at this stage :)
  //              If I implement router for this project, I'd implement router view where Media component is.

  return (
    <div>
      <Sidebar />
      <Header />
      <Media mediaItems={data} />
      <Footer />
    </div>
  );
}

export default App;
