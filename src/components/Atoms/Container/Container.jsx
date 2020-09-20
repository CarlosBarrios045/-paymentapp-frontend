import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  margin-top: 70px;
  padding: 0 20px;
`;

const Container = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
