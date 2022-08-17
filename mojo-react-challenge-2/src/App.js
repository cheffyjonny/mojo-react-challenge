import { gql, useQuery } from "@apollo/client";
import Media from "./Components/Media/Media";

const GET_MEDIA = gql`
  query GetMedia {
    media {
      items {
        thumbnailUri
        featured
        id
        source
        title
        type
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

  return (
    <div>
      <Media mediaItems={data} />
    </div>
  );
}

export default App;
