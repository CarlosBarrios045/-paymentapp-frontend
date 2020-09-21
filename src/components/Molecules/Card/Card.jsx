import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary};
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
`;

const Card = ({ children, theme }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

Card.defaultProps = {
  theme: '',
};

export default Card;
