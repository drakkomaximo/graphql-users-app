import { gql } from "@apollo/client";

export const CREATE_NEW_USER = gql`
  mutation createNewUser(
    $name: String!
    $email: String!
    $gender: String!
    $status: String!
  ) {
    createUser(
      input: { name: $name, email: $email, gender: $gender, status: $status }
    ) {
      user {
        id
        name
        email
        gender
        status
      }
    }
  }
`;
