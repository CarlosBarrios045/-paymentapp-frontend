import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = ({ children, ...rest }) => {
  return <FormWrapper {...rest}>{children}</FormWrapper>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
