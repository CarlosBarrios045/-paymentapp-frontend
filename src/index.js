import React from 'react';
import { render } from 'react-dom';
// Apollo Client
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Context Auth
import { ContextAuthProvider } from './context/contextAuth';

import App from './App';

// Authorization Apollo
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

// Config Apollo
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

const wrapper = document.getElementById('app');
render(
  <ApolloProvider client={client}>
    <ContextAuthProvider>
      <App />
    </ContextAuthProvider>
  </ApolloProvider>,
  wrapper
);
