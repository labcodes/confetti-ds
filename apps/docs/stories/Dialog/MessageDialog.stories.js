import React from "react";

import { ICON_TYPES } from "../../../../packages/confetti-ds/src/constants";
import {
  Button,
  MessageDialog as Component,
} from "../../../../packages/confetti-ds/src";
import { usePrevious } from "../hooks";

export default {
  title: "Dialog/Message",
  component: Component,
  argTypes: {
    buttonProps: {
      control: false,
    },
    outlineButtonProps: {
      control: false,
    },
    isOpen: {
      control: false,
    },
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const Message = (args) => {
  const { isModal } = args;
  const [isOpen, setIsOpen] = React.useState(false);
  const prevIsModal = usePrevious(isModal);

  React.useEffect(() => {
    if (isModal !== prevIsModal) {
      setIsOpen(false);
    }
  }, [isModal]);

  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(true)} text="Open Dialog" />
      <Component
        {...args}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </React.Fragment>
  );
};

Message.args = {
  title: "Sample Message Dialog",
  icon: "star",
  content:
    "This is the main content of a Message Dialog. You may want to put as much content as you want, as long as it's a string.",
  buttonProps: {
    text: "Required button",
    onClick: () => alert("Required button clicked"),
  },
  outlineButtonProps: {
    text: "Optional button",
    onClick: () => alert("Optional button clicked"),
  },
};
