import React from "react";

import {
  ICON_TYPES,
  TAG_COLORS,
} from "../../../../../../packages/confetti-ds/src/constants";
import {
  Button,
  RemovableTag as Component,
} from "../../../../../../packages/confetti-ds/src";

export default {
  title: "Tags/Tag/Removable Tag",
  component: Component,
  argTypes: {
    color: {
      control: { type: "select", options: TAG_COLORS },
    },
    skin: {
      control: { type: "inline-radio" },
    },
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
    thumbSrc: {
      control: false,
    },
  },
};

export const RemovableTagWithIcon = (args) => {
  const [showTag, setShowTag] = React.useState(true);

  return (
    <React.Fragment>
      {showTag ? (
        <Component {...args} onClick={() => setShowTag(false)} />
      ) : (
        <div>
          <Button
            text="Restore tag"
            onClick={() => setShowTag(true)}
            size="small"
          />
        </div>
      )}
    </React.Fragment>
  );
};
RemovableTagWithIcon.args = {
  text: "demo tag",
  icon: "coin",
};
