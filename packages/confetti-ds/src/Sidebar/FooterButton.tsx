import React, { SyntheticEvent } from "react";
import Icon from "../Icon";
import { IconTypes } from "../constants";

interface FooterButtonProps {
  /** This is the button label. */
  label: string,
  /** Sets the icon related to the button label. Default state: no icon. */
  icon?: IconTypes,
  /** Callback action to be executed when the FooterButton is clicked. */
  onClick: (event?: SyntheticEvent) => any,
};

export default function FooterButton({ label, icon, onClick }: FooterButtonProps) {
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
