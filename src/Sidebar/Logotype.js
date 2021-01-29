import React from "react";
import PropTypes from "prop-types";

export default class Logotype extends React.Component {
  static propTypes = {
    /** Source of the logo to be rendered. */
    logoSrc: PropTypes.string.isRequired,
    /** Text that will specify the HTML alt attribute of an <img> element. */
    altText: PropTypes.string.isRequired,
  };

  render() {
    const { logoSrc, altText } = this.props;
    return (
      <div className="lab-narrow-sidebar__logo">
        <img src={logoSrc} alt={altText} />
      </div>
    );
  }
}
