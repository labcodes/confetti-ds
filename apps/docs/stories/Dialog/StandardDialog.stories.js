import React from "react";

import {
  Button,
  StandardDialog as Component,
} from "../../../../packages/confetti-ds/src";
import { usePrevious } from "../hooks";

export default {
  title: "Dialog/Standard",
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
  },
};

export const Standard = (args) => {
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
      <Button onClick={() => setIsOpen(true)} label="Open Dialog" />
      <Component
        {...args}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </React.Fragment>
  );
};

Standard.args = {
  title: "Sample Standard Dialog",
  content:
    "This is the main content of a Standard Dialog. You may want to put as much content as you want, as long as it's a string.",
  buttonProps: {
    label: "Required button",
    onClick: () => alert("Required button clicked"),
  },
  outlineButtonProps: {
    label: "Optional button",
    onClick: () => alert("Optional button clicked"),
  },
};
