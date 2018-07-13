import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import BaseComponent from "../BaseComponent";

const Window = props => (
  <div
    className={classNames(
      "metaui-window",
      props.size,
      props.variation,
      props.className
    )}
  >
    <div className="titlebar">
      <div className="icon" />
      <div className="title">{props.title}</div>
      <div className="actions">
        {props.onMinimize !== null &&
        <div
          className="titlebar-button minimize"
          onClick={props.onMinimize}
        />
        }
        {props.onMaximize !== null &&
        <div
          className="titlebar-button maximize"
          onClick={props.onMaximize}
        />
        }
        {props.onClose !== null &&
        <div
          className="titlebar-button close"
          onClick={props.onClose}
        />
        }
      </div>
    </div>
    <div className="metaui-content">{props.children}</div>
  </div>
);

Window.propTypes = Object.assign({}, BaseComponent.propTypes, {
  title: PropTypes.string,
  onMinimize: PropTypes.func,
  onMaximize: PropTypes.func,
  onClose: PropTypes.func,
});
Window.defaultProps = Object.assign({}, BaseComponent.defaultProps, {
  title: '',
  onMinimize: null,
  onMaximize: null,
  onClose: null,
});

export default Window;
