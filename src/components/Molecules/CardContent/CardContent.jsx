import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContentWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContent = ({ children }) => {
  return <CardContentWrapper>{children}</CardContentWrapper>;
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

CardContent.defaultProps = {
  theme: '',
};

export default CardContent;
