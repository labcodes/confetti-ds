import React from "react";
import PropTypes from "prop-types";

export default class Footer extends React.Component {
  static propTypes = {
    /** Components that will be rendered in the Footer. */
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children } = this.props;
    return <div className="lab-narrow-sidebar__footer">{children}</div>;
  }
}
