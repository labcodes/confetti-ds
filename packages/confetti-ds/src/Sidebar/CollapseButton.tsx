import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";

/**
 *
 * @param onClick Callback action to be executed when the CollapseButton is clicked.
 * @returns {JSX.Element}
 * @constructor
 *
 */
export default function CollapseButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="lab-narrow-sidebar__collapse"
    >
      <Icon
        type="menu-collapse"
        className="lab-narrow-sidebar__collapse-icon"
      />
    </button>
  );
}

CollapseButton.propTypes = {
  /** Callback action to be executed when the CollapseButton is clicked. */
  onClick: PropTypes.func.isRequired,
};
