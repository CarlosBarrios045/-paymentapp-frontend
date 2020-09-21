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
      id
    }
  }
`;

// Create User
export const SIGNUP = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      name
      lastname
    }
  }
`;

// Update User
export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $input: UserInput) {
    updateUser(id: $id, input: $input) {
      name
      lastname
    }
  }
`;

// Delete User
export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

// Get Users
export const GET_USERS = gql`
  query getUsers {
    getUsers {
      name
      lastname
      id
      email
    }
  }
`;

// Get User
export const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      name
      lastname
      email
      role
      id
    }
  }
`;

// Get Users
export const GET_PAYMENTS = gql`
  query getPayments($idUser: ID!) {
    getPayments(idUser: $idUser) {
      id
      date
      amount
      user
    }
  }
`;

// Create Payment
export const CREATE_PAYMENT = gql`
  mutation createPayment($input: PaymentInput) {
    createPayment(input: $input) {
      amount
    }
  }
`;

// Delete Payment
export const DELETE_PAYMENT = gql`
  mutation deletePayment($id: ID!) {
    deletePayment(id: $id)
  }
`;

// Update Payment
export const UPDATE_PAYMENT = gql`
  mutation updatePayment($id: ID!, $input: PaymentInput) {
    updatePayment(id: $id, input: $input) {
      id
      amount
      user
      date
    }
  }
`;
