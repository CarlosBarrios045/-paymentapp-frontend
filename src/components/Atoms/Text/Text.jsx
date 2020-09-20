import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const Text = ({
  component: Component,
  className,
  style,
  children,
  theme,
  ...rest
}) => {
  let ComponentRoot;

  if (theme === 'title') {
    ComponentRoot = styled(Component)`
      color: rgba(0, 0, 0, 0.8);
      font-size: 22px;
      font-weight: bold;
    `;
  } else {
    ComponentRoot = styled(Component)`
      color: rgba(0, 0, 0, 0.8);
      font-size: 16px;
    `;
  }

  const classNames = classnames({
    [className]: !!className,
  });

  return (
    <ComponentRoot className={classNames} style={style} {...rest}>
      {children}
    </ComponentRoot>
  );
};

Text.propTypes = {
  component: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

Text.defaultProps = {
  className: '',
  style: {},
  component: 'p',
  theme: '',
};

export default Text;
