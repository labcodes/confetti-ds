import React from "react";

import { ICON_TYPES, TAG_COLORS } from "../../confetti-ds/src/constants";
import { Button, RemovableTag as Component } from "../../confetti-ds/src";

export default {
  title: "Tag/Removable Tag",
  component: Component,
  argTypes: {
    color: {
      control: { type: "select", options: TAG_COLORS },
    },
    skin: {
      control: { type: "inline-radio" },
    },
    icon: {
      control: false,
    },
    thumbSrc: {
      control: false,
    },
  },
};

export const RemovableTag = (args) => {
  const [showTag, setShowTag] = React.useState(true);

  return (
    <React.Fragment>
      { showTag ?
        <Component {...args} onClick={() => setShowTag(false)} />
        :
        <div>
          <Button text="Restore tag" onClick={() => setShowTag(true)} size="small"/>
        </div> }
    </React.Fragment>
  )
}
RemovableTag.args = {
  text: "demo tag",
};
