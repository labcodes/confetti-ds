import React from "react";
import PropTypes from "prop-types";

import { CardContext } from "./contexts";
import { outlineFilledCardChoices } from "./propTypes";

export default class OutlineFilledCard extends React.Component {
  static propTypes = {
    /** Components that will be rendered in the Outline Filled Card (CardImage, CardHeader, CardAction, etc.) */
    children: PropTypes.node.isRequired,
    /** Sets Outline Filled Card's colors based on the chosen palette.  */
    color: PropTypes.oneOf(outlineFilledCardChoices.color).isRequired,
    /** Sets horizontal layout. It changes the position of CardImage. */
    isHorizontal: PropTypes.bool,
    /** Reduces paddings and margins on Card layout. */
    isCompact: PropTypes.bool,
    /** Add a class name to make custom changes */
    className: PropTypes.string,
  };

  static defaultProps = {
    isHorizontal: false,
    isCompact: false,
    className: undefined,
  };

  render() {
    const { children, color, isCompact, isHorizontal, className } = this.props;

    return (
      <CardContext.Provider value={{ color, cardType: "outlineFilled" }}>
        <article
          className={`lab-card lab-card--outline lab-card--filled lab-card--${color}
          ${isCompact ? " lab-card--compact" : ""}
          ${isHorizontal ? " lab-card--horizontal" : ""}
          ${className ? ` ${className}` : ""}
        `}
        >
          {children}
        </article>
      </CardContext.Provider>
    );
  }
}
