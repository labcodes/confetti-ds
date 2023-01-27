import React, {SyntheticEvent} from "react";
import { isUndefined } from "lodash";

import Icon from "./Icon";
import TextButton from "./Button/TextButton";

import { IconTypes, ICON_TYPES } from "./constants";

interface AlertProps {
  /** This is the message text string. */
  text: string;
  /** Type of the Alert. */
  type?: "info" | "warn" | "error";
  /** Sets the icon related to the alert’s message. */
  icon?: IconTypes;
  /** Adds props for buttons e.g.: [example of how to use]. Check buttons page for more information. */
  buttonProps: {
    /** Alert's text button label. */
    text: string;
    /** Action to be executed when the button is clicked. */
    onClick: (event?: SyntheticEvent) => any;
  };
}

export default function Alert({
  text,
  icon,
  type = "info",
  buttonProps = { text: "", onClick: () => {} },
}: AlertProps) {
  const handleClick = (event) => {
    if (!isUndefined(buttonProps.onClick)) {
      buttonProps.onClick(event);
    }
  };

  return (
    <div className={`lab-alert lab-alert--${type}`}>
      {icon ? (
        <Icon type={icon} color="mineral-70" className="lab-alert__icon" />
      ) : undefined}
      <span className="lab-alert__message">{text}</span>
      <span
        className="lab-alert__button"
        onClick={handleClick}
        role="presentation"
      >
        {text ? (
          <TextButton size="normal" skin="dark" text={text} />
        ) : undefined}
      </span>
    </div>
  );
}
