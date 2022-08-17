import React from "react";
import PropTypes from "prop-types";

export default function Tooltip({ id, text, children, placement }) {
  if (text.length > 180) {
    // eslint-disable-next-line no-console
    console.warn(
      `Tooltip with id='${id}' has ${text.length} characters. It shouldn't be longer than 180 characters`
    );
  }
  return (
    <span className="lab-tooltip">
      {children}
      <span className={`lab-tooltip__text lab-tooltip--${placement}`} id={id}>
        {text}
      </span>
    </span>
  );
}

Tooltip.propTypes = {
  /** Text that will serve as unique identifier. It's also an important accessibility tool. */
  id: PropTypes.string.isRequired,
  /** Text that will be rendered inside the Tooltip. */
  text: PropTypes.string.isRequired,
  /** Defines the Tooltip's relative position from the target. */
  placement: PropTypes.oneOf([
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "left-start",
    "left",
    "left-end",
    "bottom-start",
    "bottom",
    "bottom-end",
  ]),
  /** Target component to which the Tooltip should be applied upon. */
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  placement: "top",
};
// export default class Tooltip extends React.Component {
//
//   constructor(props) {
//     super(props);
//
//   }

// render() {
//   const  = this.props;

//   }
// }
