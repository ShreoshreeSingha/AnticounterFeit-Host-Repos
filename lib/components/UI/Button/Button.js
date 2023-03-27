import React from 'react';
import classes from './Button.module.css';
const Button = props => {
  return /*#__PURE__*/React.createElement("button", {
    type: props.type || 'button',
    className: `${classes.button} ${props.className}`,
    onClick: props.onClick,
    disabled: props.disabled
  }, props.children);
};
export default Button;