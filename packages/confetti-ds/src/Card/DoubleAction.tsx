import React, { SyntheticEvent, useContext, useEffect } from "react";

import { Button, OutlineButton, TextButton } from "../Button";
import { CardContext } from "./contexts";
import { IconTypes } from "../constants";
export interface DoubleActionProps {
  /** Sets button's attributes: label, action to be executed when the button is clicked, whether it is disabled/ariaDisabled or not, and the icon. */
  actionsProps: {
    label: string;
    onClick: (event?: SyntheticEvent) => any;
    ariaDisabled?: boolean;
    disabled?: boolean;
    icon?: IconTypes;
    hasIcon?: boolean;
  }[];
  /** Sets buttons' height. Small = 32px, Normal = 40px, Large = 48px. */
  size?: "normal" | "small" | "large";
  /** Sets whether buttons will pile on top of each other or be on the same line. */
  isHorizontal?: boolean;
  /** Sets buttons to be Text Buttons. */
  isText?: boolean;
}

export default function DoubleAction({
  actionsProps,
  size = "normal" as const,
  isHorizontal = false,
  isText = false,
}: DoubleActionProps) {
  const cardContext = useContext(CardContext);
  const getButtonSkinFromCardContext = (context) => {
    const { color, theme, cardType } = context;
    if (cardType === "filled" && theme === "vivid" && color !== "white") {
      return "light";
    }

    if (
      cardType !== "outline" &&
      theme === "pale" &&
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
        ({ label, onClick, hasIcon, icon, disabled, ariaDisabled }, index) => {
          if (isText) {
            return (
              <TextButton
                key={label}
                label={label}
                onClick={onClick}
                size={size}
                theme={getButtonSkinFromCardContext(cardContext)}
                hasIcon
                {...(icon ? { icon } : undefined)}
                {...(disabled ? { disabled } : undefined)}
                {...(ariaDisabled ? { ariaDisabled } : undefined)}
              />
            );
          }
          if (index === 0) {
            return (
              <Button
                key={label}
                label={label}
                onClick={onClick}
                size={size}
                theme={getButtonSkinFromCardContext(cardContext)}
                hasIcon
                {...(icon ? { icon } : undefined)}
                {...(disabled ? { disabled } : undefined)}
                {...(ariaDisabled ? { ariaDisabled } : undefined)}
              />
            );
          }
          return (
            <OutlineButton
              key={label}
              label={label}
              onClick={onClick}
              size={size}
              theme={getButtonSkinFromCardContext(cardContext)}
              hasIcon
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
