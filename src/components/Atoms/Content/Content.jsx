import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 800px;
  background-color: #fff;
  padding: 2rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

const ContentWrapperTwo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Content = ({ children, theme }) => {
  if (theme === 'secondary')
    return <ContentWrapperTwo>{children}</ContentWrapperTwo>;
  return <ContentWrapper>{children}</ContentWrapper>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

Content.defaultProps = {
  theme: '',
};

export default Content;
