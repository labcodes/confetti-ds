import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import { ICON_TYPES } from "../constants";

/**
 *
 * @param label This is the button label.
 * @param icon Sets the icon related to the button label. Default state: no icon.
 * @param onClick Callback action to be executed when the FooterButton is clicked.
 * @returns {JSX.Element}
 * @constructor
 */
export default function FooterButton({ label, icon, onClick }) {
  return (
    <button
      type="button"
      className="lab-narrow-sidebar__footer-button"
      onClick={onClick}
    >
      {icon ? (
        <Icon type={icon} className="lab-narrow-sidebar__footer-icon" />
      ) : null}
      <span className="lab-narrow-sidebar__footer-label">{label}</span>
    </button>
  );
}

FooterButton.propTypes = {
  /** This is the button label. */
  label: PropTypes.string.isRequired,
  /** Sets the icon related to the button label. Default state: no icon. */
  icon: PropTypes.oneOf(ICON_TYPES),
  /** Callback action to be executed when the FooterButton is clicked. */
  onClick: PropTypes.func.isRequired,
};

FooterButton.defaultProps = {
  icon: undefined,
};
