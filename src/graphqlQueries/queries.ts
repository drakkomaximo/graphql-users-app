import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query ($userId: Int!) {
    user(id: $userId) {
      id
      name
      email
      gender
      status
    }
  }
`;

export const GET_USERS = gql`
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
