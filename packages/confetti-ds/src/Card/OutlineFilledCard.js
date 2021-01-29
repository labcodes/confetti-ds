import React from "react";
import PropTypes from "prop-types";

import { CardContext } from "./contexts";

export default class OutlineFilledCard extends React.Component {
  static propTypes = {
    /** Components that will be rendered in the Outline Filled Card (CardImage, CardHeader, CardAction, etc.) */
    children: PropTypes.node.isRequired,
    /** Sets Outline Filled Card's colors based on the chosen palette.  */
    color: PropTypes.oneOf(["mineral", "teal", "purple"]).isRequired,
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
    const { children, color, isCompact, isHorizontal } = this.props;

    return (
      <CardContext.Provider value={{ color, cardType: "outlineFilled" }}>
        <article
          className={`lab-card lab-card--outline lab-card--filled lab-card--${color}
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
