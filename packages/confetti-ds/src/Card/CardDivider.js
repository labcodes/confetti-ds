import React from "react";
import PropTypes from "prop-types";

export default class CardDivider extends React.Component {
  static propTypes = {
    /** Sets whether the divider has the card's full width. */
    isOverflowed: PropTypes.bool,
  };

  static defaultProps = {
    isOverflowed: false,
  };

  render() {
    const { isOverflowed } = this.props;

    return (
      <hr
        className={`lab-card-divider
          ${isOverflowed ? " lab-card-divider--overflowed" : ""}
        `}
      />
    );
  }
}
