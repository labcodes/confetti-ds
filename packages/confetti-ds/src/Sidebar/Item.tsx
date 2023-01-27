import React, { SyntheticEvent } from "react";
import Icon from "../Icon";
import { IconTypes } from "../constants";

interface ItemProps {
  /** This is the item's label. */
  label: string,
  /** Sets the icon related to the Item label. Default state: no icon. */
  icon?: IconTypes,
  /** Callback action to be executed when the Item is clicked. */
  onClick: (event?: SyntheticEvent) => any,
  /** Defines if the current Item is the active one in the Sidebar. */
  isActive?: boolean,
};

const Item = ({ label, icon, isActive = false, onClick }: ItemProps) => {
  return (
    <button
      type="button"
      className={`lab-narrow-sidebar__item${
        isActive ? " lab-narrow-sidebar__item--active" : ""
      }`}
      onClick={onClick}
    >
      {icon ? (
        <Icon
          type={icon}
          color="mineral-60"
          className="lab-narrow-sidebar__item-icon"
        />
      ) : null}
      <span className="lab-narrow-sidebar__item-label">{label}</span>
    </button>
  );
};

export default Item;
