import React from 'react';
import classNames from "classnames";

const Card = (props) => (
  <section
    className={classNames(
      "metaui card",
      props.size,
      props.variation,
      props.className
    )}
  >
    {props.children}
  </section>
);

export default Card;
