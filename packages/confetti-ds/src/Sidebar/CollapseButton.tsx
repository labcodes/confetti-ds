import React from "react";

import Icon from "../Icon";

export default function CollapseButton({ onClick }: { onClick: (event?) => any }) {
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
