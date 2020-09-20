import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const InputWrapper = styled.input`
  border: 2px solid ${({ theme }) => theme.palette.secondary};
  height: 30px;
  border-radius: 6px;
  padding-left: 10px;
  width: 400px;
  font-size: 14px;
  background-color: #e8f0fe;
`;

const Label = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = ({ className, label, styleDiv, ...rest }) => {
  const classNames = classnames({
    [className]: !!className,
  });

  return (
    <div style={styleDiv}>
      {label && <Label>{label}</Label>}
      <InputWrapper className={classNames} {...rest} />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  styleDiv: PropTypes.object,
};

Input.defaultProps = {
  className: '',
  label: '',
  styleDiv: {},
};

export default Input;
