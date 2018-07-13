import React from 'react';
import BaseComponent, { publicProps } from '../BaseComponent';

const Button = (props) => (
  <button {...publicProps(props)}>{props.children}</button>
);

Button.propTypes = Object.assign({}, BaseComponent.propTypes);
Button.defaultProps = Object.assign({}, BaseComponent.defaultProps);

export default Button;
