import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

const ContextAuth = createContext({});

export const ContextAuthProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    user: {},
  };
  const [userAuthenticated, setUserAuthenticated] = useState(initialState);

  const signIn = (userData) => {
    setUserAuthenticated({
      isAuthenticated: true,
      user: userData,
    });
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setUserAuthenticated(initialState);
    navigate('/iniciar-sesion');
  };

  return (
    <ContextAuth.Provider
      value={{
        userAuthenticated,
        signIn,
        logOut,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};

ContextAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextAuth;
