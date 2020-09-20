import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import { Link as RouteLink } from '@reach/router';

const ComponentLink = styled(RouteLink)`
  color: #fff;
  font-weight: bold;
`;

const Component = styled.a`
  color: ${({ theme }) => theme.palette.primary};
  font-weight: bold;
`;

const Link = ({ href, to, children, className, disabled, ...rest }) => {
  const classNames = classnames({
    [className]: !!className,
  });

  if (to) {
    return (
      <ComponentLink to={!disabled && to} className={classNames} {...rest}>
        {children}
      </ComponentLink>
    );
  }

  return (
    <Component href={!disabled && href} className={classNames} {...rest}>
      {children}
    </Component>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

Link.defaultProps = {
  disabled: false,
  className: '',
  href: '',
  to: '',
};

export default Link;
