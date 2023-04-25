import React from "react";

import Icon from "../Icon";

export interface NavbarCollapseButtonProps {
  onClick: (event?) => any;
}

export default function CollapseButton({ onClick }: NavbarCollapseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="lab-narrow-sidebar__collapse"
    >
      <Icon
        type="ArrowMinimize"
        className="lab-narrow-sidebar__collapse-icon"
      />
    </button>
  );
}
