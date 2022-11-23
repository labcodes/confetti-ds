import React from "react";

import { TAG_COLORS } from "../../../../../../packages/confetti-ds/src/constants";
import { Button, RemovableTag as Component } from "../../../../../../packages/confetti-ds/src";

export default {
  title: "Content/Tag/Removable Tag",
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

export const RemovableTagWithThumb = (args) => {
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
RemovableTagWithThumb.args = {
  text: "demo tag",
  thumbSrc: "http://avatars3.githubusercontent.com/u/1887591",
};
