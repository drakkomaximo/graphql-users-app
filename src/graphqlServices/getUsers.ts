import { gql } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      nodes {
        id
        name
        email
        gender
        status
      }
    }
  }
`;

export default GET_USERS;

/* 
query {
    users {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      totalCount
      nodes {
        id
        name
        email
        gender
        status
      }
    }
  }
*/
