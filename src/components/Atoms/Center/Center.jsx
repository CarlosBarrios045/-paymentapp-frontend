import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Center = ({ children }) => {
  const CenterWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <CenterWrapper>{children}</CenterWrapper>;
};

Center.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Center;
