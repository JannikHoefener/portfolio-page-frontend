import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `http://localhost:1337/graphql`
});
const apolloClient = new ApolloClient({
link,
  cache
});

export default apolloClient;