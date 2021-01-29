import React from "react";
import PropTypes from "prop-types";
import { CardContext } from "./contexts";

export default class FilledCard extends React.Component {
  static propTypes = {
    /** Components that will be rendered in the Filled Card (CardImage, CardHeader, CardAction, etc.) */
    children: PropTypes.node.isRequired,
    /** Sets Filled Card's colors (mostly background colors) based on the chosen palette.  */
    color: PropTypes.oneOf(["white", "mineral", "teal", "purple"]).isRequired,
    /** Sets the skin of the rendered Filled Card. */
    skin: PropTypes.oneOf(["pale", "vivid"]).isRequired,
    /** Sets horizontal layout. It changes the position of CardImage. */
    isHorizontal: PropTypes.bool,
    /** Reduces paddings and margins on Card layout. */
    isCompact: PropTypes.bool,
  };

  static defaultProps = {
    isHorizontal: false,
    isCompact: false,
  };

  render() {
    const { children, color, skin, isCompact, isHorizontal } = this.props;

    return (
      <CardContext.Provider value={{ color, skin, cardType: "filled" }}>
        <article
          className={`lab-card lab-card--filled lab-card--${color} lab-card--${skin}
          ${isCompact ? " lab-card--compact" : ""}
          ${isHorizontal ? " lab-card--horizontal" : ""}
        `}
        >
          {children}
        </article>
      </CardContext.Provider>
    );
  }
}
