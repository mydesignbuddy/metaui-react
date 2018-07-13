import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import BaseComponent, { publicProps } from "../BaseComponent";

const _validTypes = type => {
  const validTypes = [
    "date",
    "datetime-local",
    "email",
    "hidden",
    "month",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "time",
    "url",
    "week"
  ];
  return validTypes.indexOf(type) >= 0 ? type : "text";
};

const Text = (props) => (
    <label className="metaui">
      {!props.label ? props.children : props.label}
      <input
        {...publicProps(props, ['children'])}
        type={_validTypes(props.type)}
        className={classNames(
          "metaui",
          props.size,
          props.variation,
          props.className
        )}
      />
    </label>
);

Text.propTypes = Object.assign({}, BaseComponent.propTypes, {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  max: PropTypes.string,
  maxLength: PropTypes.number,
  min: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  step: PropTypes.number,
  onChange: PropTypes.func
});

Text.defaultProps = Object.assign({}, BaseComponent.defaultProps, {
  label: '',
  value: '',
  type: 'text',
  name: null,
  alt: null,
  autoComplete: null,
  autoFocus: null,
  disabled: null,
  max: null,
  maxLength: null,
  min: null,
  pattern: null,
  placeholder: null,
  readOnly: null,
  required: null,
  step: null,
  onChange: () => {}
});

export default Text;
