import React from "react";
import PropTypes from "prop-types";

import { CardContext } from "./contexts";
import { outlineCardChoices } from "./propTypes";

/**
 * @param children are components that will be rendered in the Outline Card (CardImage, CardHeader, CardAction, etc.)
 * @param color sets Outline Card's colors (mostly border colors) based on the chosen palette.
 * @param skin sets the skin of the rendered Outline Card.
 * @param isCompact reduces paddings and margins on Card layout.
 * @param isHorizontal sets horizontal layout. It changes the position of CardImage.
 * @param className adds a class name to make custom changes
 * @returns {JSX.Element}
 * @constructor
 */
export default function OutlineCard({
  children,
  color,
  skin,
  isCompact,
  isHorizontal,
  className,
}) {
  return (
    <CardContext.Provider value={{ color, skin, cardType: "outline" }}>
      <article
        className={`lab-card lab-card--outline lab-card--${color} lab-card--${skin}
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

OutlineCard.propTypes = {
  /** They are components that will be rendered in the Outline Card (CardImage, CardHeader, CardAction, etc.) */
  children: PropTypes.node.isRequired,
  /** Sets Outline Card's colors (mostly border colors) based on the chosen palette.  */
  color: PropTypes.oneOf(outlineCardChoices.color).isRequired,
  /** Sets the skin of the rendered Outline Card. */
  skin: PropTypes.oneOf(outlineCardChoices.skin).isRequired,
  /** Sets horizontal layout. It changes the position of CardImage. */
  isHorizontal: PropTypes.bool,
  /** Reduces paddings and margins on Card layout. */
  isCompact: PropTypes.bool,
  /** Add a class name to make custom changes */
  className: PropTypes.string,
};

OutlineCard.defaultProps = {
  isHorizontal: false,
  isCompact: false,
  className: undefined,
};
