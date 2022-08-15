import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

import Icon from "./Icon";
import TextButton from "./Button/TextButton";
import { ICON_TYPES } from "./constants";

export default function Alert({ text, type, icon, buttonProps }) {
  const handleIcon = () =>
    icon ? (
      <Icon type={icon} color="mineral-70" className="lab-alert__icon" />
    ) : undefined;

  const button = () =>
    text ? <TextButton size="normal" skin="dark" text={text} /> : undefined;

  const handleClick = (event) => {
    if (!isUndefined(buttonProps.onClick)) {
      buttonProps.onClick(event);
    }
  };

  return (
    <div className={`lab-alert lab-alert--${type}`}>
      {handleIcon()}
      <span className="lab-alert__message">{text}</span>
      <span
        className="lab-alert__button"
        onClick={handleClick}
        role="presentation"
      >
        {button()}
      </span>
    </div>
  );
}

Alert.propTypes = {
  /** This is the message text string. */
  text: PropTypes.string.isRequired,
  /** Type of the Alert. */
  type: PropTypes.oneOf(["info", "warn", "error"]),
  /** Sets the icon related to the alert’s message. */
  icon: PropTypes.oneOf(ICON_TYPES).isRequired,
  /** Adds props for buttons e.g.: [example of how to use]. Check buttons page for more information. */
  buttonProps: PropTypes.shape({
    /** Alert's text button label. */
    text: PropTypes.string,
    /** Action to be executed when the button is clicked. */
    onClick: PropTypes.func,
  }),
};

Alert.defaultProps = {
  type: "info",
  buttonProps: { text: "", onClick: () => {} },
};
