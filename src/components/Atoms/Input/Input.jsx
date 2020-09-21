import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const InputWrapper = styled.input`
  border: 2px solid ${({ theme }) => theme.palette.secondary};
  height: 30px;
  border-radius: 6px;
  padding-left: 10px;
  width: 100%;
  font-size: 14px;
  background-color: #e8f0fe;
`;

const SelectWrapper = styled.select`
  border: 2px solid ${({ theme }) => theme.palette.secondary};
  height: 30px;
  border-radius: 6px;
  padding-left: 10px;
  width: 100%;
  font-size: 14px;
  background-color: #e8f0fe;
`;

const Label = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 5px;
  font-weight: bold;
`;

const Div = styled.div`
  width: 100%;
`;

const Input = ({ className, label, styleDiv, type, children, ...rest }) => {
  const classNames = classnames({
    [className]: !!className,
  });

  return (
    <Div style={styleDiv}>
      {label && <Label>{label}</Label>}
      {type === 'select' ? (
        <SelectWrapper className={classNames} {...rest}>
          {children}
        </SelectWrapper>
      ) : (
        <InputWrapper className={classNames} type={type} {...rest} />
      )}
    </Div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  styleDiv: PropTypes.object,
  type: PropTypes.string,
  children: PropTypes.node,
};

Input.defaultProps = {
  className: '',
  label: '',
  styleDiv: {},
  type: 'text',
  children: '',
};

export default Input;
