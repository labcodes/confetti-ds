import React, { Component } from "react";
import { PropTypes } from "prop-types";

export default class DropdownSectionTitle extends Component {
  static propTypes = {
    /** This is DropdownSectionTitle's title */
    text: PropTypes.node.isRequired,
    /** This is DropdownSectionTitle's color. The color is inherit from dropdown color  */
    color: PropTypes.string,
  };

  static defaultProps = {
    color: "teal",
  };

  render() {
    const { text, color } = this.props;
    return (
      <span
        className={`lab-dropdown__section-title lab-dropdown__section-title--color-${color}`}
      >
        {text}
      </span>
    );
  }
}
