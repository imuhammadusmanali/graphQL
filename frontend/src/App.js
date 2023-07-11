import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from '@apollo/client';
import { DisplayData } from './DisplayData';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    url: 'http://localhost:4000/',
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>List of Users:</h1>
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
