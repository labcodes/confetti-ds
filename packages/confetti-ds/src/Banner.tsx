import React from "react";
import { isUndefined } from "lodash";

import Icon from "./Icon";
import TextButton from "./Button/TextButton";
import { IconTypes } from "./constants";
import { TextButtonProps } from "./Button/TextButton";

export interface BannerProps {
  /** This is the message text string. */
  text?: string;
  /** Type of the Banner. */
  type: "info" | "warn" | "error";
  /** Sets the icon related to the banner’s message. */
  icon?: IconTypes;
  /** Object with information about the Banners's button. */
  buttonProps?: TextButtonProps;
}

export default function Banner({
  text,
  type = "info",
  icon,
  buttonProps = { label: "", onClick: () => {} },
}: BannerProps) {
  const renderIcon = () =>
    icon ? (
      <Icon type={icon} color="white" className="lab-banner__icon" />
    ) : undefined;

  const button = () => {
    if (buttonProps.label) {
      return type === "warn" ? (
        <TextButton size="normal" theme="dark" label={buttonProps.label} />
      ) : (
        <TextButton size="normal" theme="light" label={buttonProps.label} />
      );
    }
    return null;
  };

  const handleClick = (event) => {
    if (!isUndefined(buttonProps.onClick)) {
      buttonProps.onClick(event);
    }
  };

  return (
    <div className={`lab-banner lab-banner--${type}`}>
      {renderIcon()}
      <span className="lab-banner__message">{text}</span>
      <span
        className="lab-banner__button"
        onClick={handleClick}
        role="presentation"
      >
        {button()}
      </span>
    </div>
  );
}
