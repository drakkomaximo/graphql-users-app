import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      contentType: "application/json",
      acccept: "application/json",
    },
  };
});

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
