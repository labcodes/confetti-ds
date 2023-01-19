import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

import Icon from "./Icon";
import TextButton from "./Button/TextButton";
import { ICON_TYPES } from "./constants";

export default function Banner({ text, type, icon, buttonProps }) {
  const renderIcon = () =>
    icon ? (
      <Icon type={icon} color="white" className="lab-banner__icon" />
    ) : undefined;

  const button = () => {
    if (buttonProps.text) {
      return type === "warn" ? (
        <TextButton size="normal" skin="dark" text={buttonProps.text} />
      ) : (
        <TextButton size="normal" skin="light" text={buttonProps.text} />
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

Banner.propTypes = {
  /** This is the message text string. */
  text: PropTypes.string.isRequired,
  /** Type of the Banner. */
  type: PropTypes.oneOf(["info", "warn", "error"]),
  /** Sets the icon related to the banner’s message. */
  icon: PropTypes.oneOf(ICON_TYPES).isRequired,
  /** Ojbect with information about the Banners's button. */
  buttonProps: PropTypes.shape({
    /** Banner's text button label. */
    text: PropTypes.string,
    /** Action to be executed when the button is clicked. */
    onClick: PropTypes.func,
  }),
};

Banner.defaultProps = {
  type: "info",
  buttonProps: {
    text: "",
    onClick: () => {},
  },
};
