import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardActionsWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 1px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardActions = ({ children }) => {
  return <CardActionsWrapper>{children}</CardActionsWrapper>;
};

CardActions.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

CardActions.defaultProps = {
  theme: '',
};

export default CardActions;
