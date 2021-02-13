import React from "react";

import { ICON_TYPES, TAG_COLORS } from "../../confetti-ds/src/constants";
import { Button, RemovableTag as Component } from "../../confetti-ds/src";

export default {
  title: "Tag/Removable Tag",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
    color: {
      control: { type: "select", options: TAG_COLORS },
    },
    skin: {
      control: { type: "inline-radio" },
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

      <p>Use this link for a <strong>thumbSrc</strong> example: <a>http://avatars3.githubusercontent.com/u/1887591</a></p>
    </React.Fragment>
  )
}
RemovableTag.args = {
  text: "demo tag",
};
