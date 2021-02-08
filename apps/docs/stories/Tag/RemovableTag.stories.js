import React from "react";

import { TAG_ICONS, TAG_THUMBS, TAG_SKINS, TAG_COLORS } from "./constants";
import { Button, RemovableTag as Component } from "../../confetti-ds/src";

export default {
  title: "Tag/Removable Tag",
  component: Component,
  argTypes: {
    thumbSrc: {
      control: { type: "select", options: TAG_THUMBS },
    },
    icon: {
      control: { type: "select", options: TAG_ICONS },
    },
    color: {
      control: { type: "select", options: TAG_COLORS },
    },
    skin: {
      control: { type: "select", options: TAG_SKINS },
    },
  },
};

export const RemovableTag = (args) => {
  const [showTag, setShowTag] = React.useState(true);

  return (
    <React.Fragment>
      { showTag ?
        <Component {...args} onClick={() => setShowTag(false)} />
        : null
      }

      <div style={{ marginTop: "16px" }}>
        <Button text="Restore tag" onClick={() => setShowTag(true)} size="small"/>
      </div>
    </React.Fragment>
  )
}
RemovableTag.args = {
  text: "demo tag",
};
