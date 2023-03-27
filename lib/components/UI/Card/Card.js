import React from 'react';
import classes from './Card.module.css';
const Card = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: `${classes.card} ${props.className}`
  }, props.children);
};
export default Card;