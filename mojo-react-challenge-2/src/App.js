import { gql, useQuery } from '@apollo/client';

const GetMedia = gql`
  query GetMedia {
    media {
      items {
        id
      }
    }
  }
`;

function App() {
  const { data } = useQuery(GetMedia);
  console.log(data)
  return (
    <div>
      App
    </div>
  );
}

export default App;
