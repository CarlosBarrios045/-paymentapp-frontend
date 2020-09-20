import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.palette.secondary};
  border: none;
  border-radius: 5px;
  padding: 0.6rem 1.5rem;
  cursor: pointer;
  transition: ease 0.6s;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondaryDark};
  }
`;

const Button = ({ className, style, children, color, ...rest }) => {
  const classNames = classnames({
    [className]: !!className,
  });

  return (
    <ButtonWrapper className={classNames} style={style} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  style: {},
  color: 'primary',
};

export default Button;
