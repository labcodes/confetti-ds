import React from "react";
import PropTypes from "prop-types";

export default class Tooltip extends React.Component {
  static propTypes = {
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
      "bottom-start",
      "left-start",
      "left",
      "left-end",
      "bottom",
      "bottom-end",
    ]),
    /** Target component to which the Tooltip should be applied upon. */
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    placement: "top",
  };

  constructor(props) {
    super(props);
    if (props.text.length > 180) {
      // eslint-disable-next-line no-console
      console.warn(
        `Tooltip with id='${props.id}' has ${props.text.length} characters. It shouldn't be longer than 180 characters`
      );
    }
  }

  render() {
    const { id, text, children, placement } = this.props;

    return (
      <span className="lab-tooltip">
        {children}
        <span className={`lab-tooltip__text lab-tooltip--${placement}`} id={id}>
          {text}
        </span>
      </span>
    );
  }
}
