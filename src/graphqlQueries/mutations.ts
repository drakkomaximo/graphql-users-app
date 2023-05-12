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

export const UPDATE_OLD_USER = gql`
  mutation updateOldUser(
    $id: Int!
    $name: String!
    $email: String!
    $gender: String!
    $status: String!
  ) {
    updateUser(
      input: { id: $id, name: $name, email: $email, gender: $gender, status: $status }
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

export const DELETE_USER = gql`
  mutation deleteOldUser(
    $id: Int!
  ) {
    deleteUser(
      input: { id: $id }
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
