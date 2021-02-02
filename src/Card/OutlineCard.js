import React from "react";
import PropTypes from "prop-types";

import { CardContext } from "./contexts";
import { outlineCardChoices } from "./propTypes";

export default class OutlineCard extends React.Component {
  static propTypes = {
    /** Components that will be rendered in the Outline Card (CardImage, CardHeader, CardAction, etc.) */
    children: PropTypes.node.isRequired,
    /** Sets Outline Card's colors (mostly border colors) based on the chosen palette.  */
    color: PropTypes.oneOf(outlineCardChoices.color).isRequired,
    /** Sets the skin of the rendered Outline Card. */
    skin: PropTypes.oneOf(outlineCardChoices.skin).isRequired,
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
      <CardContext.Provider value={{ color, skin, cardType: "outline" }}>
        <article
          className={`lab-card lab-card--outline lab-card--${color} lab-card--${skin}
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
