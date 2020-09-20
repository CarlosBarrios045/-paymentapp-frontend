import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = ({ children }) => {
  const ContentWrapper = styled.div`
    width: 800px;
    background-color: #fff;
    padding: 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
  `;

  return <ContentWrapper>{children}</ContentWrapper>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
