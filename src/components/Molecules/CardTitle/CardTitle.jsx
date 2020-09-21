import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardTitleWrapper = styled.div`
  width: 80%;
  background-color: #fff;
  margin: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
`;

const CardTitle = ({ children }) => {
  return <CardTitleWrapper>{children}</CardTitleWrapper>;
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

CardTitle.defaultProps = {
  theme: '',
};

export default CardTitle;
