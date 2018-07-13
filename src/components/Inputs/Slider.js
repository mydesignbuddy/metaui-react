import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseComponent, { publicProps } from "../BaseComponent";

const Slider = (props) => (
    <label className="metaui">
      <div className="metaui label">{!props.label ? props.children : props.label}</div>
      <input
        className={classNames(
          "metaui",
          props.isVertical ? 'vertical' : '',
          props.size,
          props.variation,
          props.className
        )}
        type="range"
        name={props.name}
        min={props.min}
        max={props.max}
        {...publicProps(props, ['children', 'isVertical'])}
      />
    </label>
);

Slider.propTypes = Object.assign({}, BaseComponent.propTypes, {
  label: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  isVertical: PropTypes.bool,
});

Slider.defaultProps = Object.assign({}, BaseComponent.defaultProps, {
  label: '',
  name: '',
  min: null,
  max: null,
  isVertical: false,
});

export default Slider;
