import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import BaseComponent, { publicProps } from "../BaseComponent";

const Checkbox = props => (
  <label className={classNames(
    "metaui checkbox",
    props.size,
    props.variation,
    props.className,
    props.isInline ? 'inline': '',
  )}>
    {!props.label ? props.children : props.label}
    <input
      type="checkbox"
      checked={props.checked}
      {...publicProps(props, ['type', 'checked', 'children', 'isInline'])}
    />
    <span className="checkmark"></span>
  </label>
);

Checkbox.propTypes = Object.assign({}, BaseComponent.propTypes, {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  isInline: PropTypes.bool,
  onChange: PropTypes.func,
});

Checkbox.defaultProps = Object.assign({}, BaseComponent.defaultProps, {
  name: null,
  value: '',
  label: '',
  autoFocus: null,
  disabled: null,
  required: null,
  checked: false,
  isInline: true,
  onChange: () => {}
});

export default Checkbox;
