import { PropTypes } from "prop-types";
import React, { Component } from "react";

export default class TriggerWithCustomEvents extends Component {
  static propTypes = {
    // functions
    onClickEvent: PropTypes.func,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    // functions
    onClickEvent: () => {},
  };

  render() {
    const { onClickEvent, children } = this.props;
    return React.cloneElement(children, {
      ...children.props,
      onClick: onClickEvent,
    });
  }
}
