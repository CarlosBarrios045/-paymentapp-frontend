import { gql } from '@apollo/client';

// Login
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

// Get user logged
export const GET_USER_LOGGED = gql`
  mutation {
    getUserLogged {
      name
      lastname
      email
      role
    }
  }
`;
