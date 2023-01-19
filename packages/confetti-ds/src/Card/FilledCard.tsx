import React from "react";
import PropTypes from "prop-types";

import { CardContext } from "./contexts";
import { filledCardChoices } from "./propTypes";

/**
 *
 * @param children components that will be rendered in the Filled Card (CardImage, CardHeader, CardAction, etc.)
 * @param color sets Filled Card's colors (mostly background colors) based on the chosen palette.
 * @param skin sets the skin of the rendered Filled Card.
 * @param isCompact reduces paddings and margins on Card layout.
 * @param isHorizontal sets horizontal layout. It changes the position of CardImage.
 * @param className add a class name to make custom changes
 * @returns {JSX.Element}
 * @constructor
 */
export default function FilledCard({
  children,
  color,
  skin,
  isCompact,
  isHorizontal,
  className,
}) {
  return (
    <CardContext.Provider value={{ color, skin, cardType: "filled" }}>
      <article
        className={`lab-card lab-card--filled lab-card--${color} lab-card--${skin}
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

FilledCard.propTypes = {
  /** Components that will be rendered in the Filled Card (CardImage, CardHeader, CardAction, etc.) */
  children: PropTypes.node.isRequired,
  /** Sets Filled Card's colors (mostly background colors) based on the chosen palette.  */
  color: PropTypes.oneOf(filledCardChoices.color).isRequired,
  /** Sets the skin of the rendered Filled Card. */
  skin: PropTypes.oneOf(filledCardChoices.skin).isRequired,
  /** Sets horizontal layout. It changes the position of CardImage. */
  isHorizontal: PropTypes.bool,
  /** Reduces paddings and margins on Card layout. */
  isCompact: PropTypes.bool,
  /** Add a class name to make custom changes */
  className: PropTypes.string,
};

FilledCard.defaultProps = {
  isHorizontal: false,
  isCompact: false,
  className: undefined,
};