import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from '@reach/router';

const RouterRoot = ({
  component: Component,
  isAuthenticated,
  isAdmin,
  typeRole,
  type,
  ...routeProps
}) => {
  if (type === 'private') {
    if (isAuthenticated) {
      if (typeRole === 'ADMIN') {
        if (isAdmin) return <Component {...routeProps} />;
        return <Redirect exact from={routeProps.path} to="/" />;
      }

      if (typeRole === 'CLIENT') {
        if (!isAdmin) return <Component {...routeProps} />;
        return <Redirect exact from={routeProps.path} to="/" />;
      }

      // TypeRole === ALL
      return <Component {...routeProps} />;
    }

    return <Redirect exact from={routeProps.path} to="/iniciar-sesion" />;
  }

  if (type === 'restricted') {
    if (isAuthenticated) {
      return <Redirect exact from={routeProps.path} to="/" />;
    }
    return <Component {...routeProps} />;
  }

  // is Public
  return <Component {...routeProps} />;
};

RouterRoot.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool,
  isAdmin: PropTypes.bool,
  type: PropTypes.oneOf(['public', 'private', 'restricted']),
  typeRole: PropTypes.oneOf(['ADMIN', 'CLIENT', 'ALL']),
};

RouterRoot.defaultProps = {
  type: 'public',
  typeRole: 'ALL',
  isAdmin: false,
  isAuthenticated: false,
};

export default RouterRoot;
