import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { Button, OutlineButton, TextButton } from "../Button";
import { CardContext } from "./contexts";

/**
 *
 * @param actionsProps sets button's attributes: label, action to be executed when the button is clicked, whether it is disabled/ariaDisabled or not, and the icon.
 * @param size sets buttons' height. Small = 32px, Normal = 40px, Large = 48px.
 * @param isText sets buttons to be Text Buttons.
 * @param isHorizontal sets whether buttons will pile on top of each other or be on the same line.
 * @returns {JSX.Element}
 * @constructor
 */

export default function DoubleAction({
  actionsProps,
  size,
  isText,
  isHorizontal,
}) {
  const cardContext = useContext(CardContext);
  const getButtonSkinFromCardContext = (context) => {
    const { color, skin, cardType } = context;
    if (cardType === "filled" && skin === "vivid" && color !== "white") {
      return "light";
    }

    if (
      cardType !== "outline" &&
      skin === "pale" &&
      (color === "purple" || color === "mineral")
    ) {
      return "dark";
    }
    return null;
  };

  const checkActionsPropsLength = (actionsPropsList) => {
    if (actionsPropsList.length !== 2) {
      throw Error(
        "DoubleAction: You need to pass exactly two objects inside the `actionsProps` prop."
      );
    }
  };

  useEffect(() => {
    checkActionsPropsLength(actionsProps);
  }, [actionsProps]);

  return (
    <section
      className={`lab-card-double-action lab-card-double-action--${size}
            ${isText ? " lab-card-double-action--text" : ""}
            ${isHorizontal ? " lab-card-double-action--horizontal" : ""}
          `}
    >
      {actionsProps.map(
        ({ text, onClick, icon, disabled, ariaDisabled }, index) => {
          if (isText) {
            return (
              <TextButton
                key={text}
                text={text}
                onClick={onClick}
                size={size}
                //  todo: reescrever para getContext
                skin={getButtonSkinFromCardContext(cardContext)}
                {...(icon ? { icon } : undefined)}
                {...(disabled ? { disabled } : undefined)}
                {...(ariaDisabled ? { ariaDisabled } : undefined)}
              />
            );
          }
          if (index === 0) {
            return (
              <Button
                key={text}
                text={text}
                onClick={onClick}
                size={size}
                skin={getButtonSkinFromCardContext(cardContext)}
                {...(icon ? { icon } : undefined)}
                {...(disabled ? { disabled } : undefined)}
                {...(ariaDisabled ? { ariaDisabled } : undefined)}
              />
            );
          }
          return (
            <OutlineButton
              key={text}
              text={text}
              onClick={onClick}
              size={size}
              skin={getButtonSkinFromCardContext(cardContext)}
              {...(icon ? { icon } : undefined)}
              {...(disabled ? { disabled } : undefined)}
              {...(ariaDisabled ? { ariaDisabled } : undefined)}
            />
          );
        }
      )}
    </section>
  );
}

DoubleAction.propTypes = {
  /** Sets button's attributes: label, action to be executed when the button is clicked, whether it is disabled/ariaDisabled or not, and the icon. */
  actionsProps: PropTypes.arrayOf(
    PropTypes.exact({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      ariaDisabled: PropTypes.bool,
      disabled: PropTypes.bool,
      icon: PropTypes.string,
    })
  ).isRequired,
  /** Sets buttons' height. Small = 32px, Normal = 40px, Large = 48px. */
  size: PropTypes.oneOf(["normal", "small", "large"]),
  /** Sets whether buttons will pile on top of each other or be on the same line. */
  isHorizontal: PropTypes.bool,
  /** Sets buttons to be Text Buttons. */
  isText: PropTypes.bool,
};

DoubleAction.defaultProps = {
  size: "normal",
  isHorizontal: false,
  isText: false,
};
