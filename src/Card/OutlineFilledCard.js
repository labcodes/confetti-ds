import React from "react";
import PropTypes from "prop-types";

import { CardContext } from "./contexts";
import { outlineFilledCardChoices } from "./propTypes";

/**
 * @param children components that will be rendered in the Outline Filled Card (CardImage, CardHeader, CardAction, etc.)
 * @param color sets the Outline Filled Card's colors based on the chosen palette.
 * @param isCompact reduces paddings and margins on Card layout.
 * @param isHorizontal sets horizontal layout. It changes the position of CardImage.
 * @param className adds a class name to make custom changes
 * @returns {JSX.Element}
 * @constructor
 */
export default function OutlineFilledCard({
  children,
  color,
  isCompact,
  isHorizontal,
  className,
}) {
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

OutlineFilledCard.propTypes = {
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

OutlineFilledCard.defaultProps = {
  isHorizontal: false,
  isCompact: false,
  className: undefined,
};
