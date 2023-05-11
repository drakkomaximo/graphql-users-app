import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  /* uri: process.env.REACT_APP_GRAPHQL_ENDPOINT, */
  uri: 'https://gorest.co.in/public/v2/graphql',
  cache: new InMemoryCache(),
});

export default client;