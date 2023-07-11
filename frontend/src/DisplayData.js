import { useQuery, gql } from '@apollo/client';

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      username
      age
    }
  }
`;

export const DisplayData = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data &&
        data.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
            </div>
          );
        })}
    </div>
  );
};
