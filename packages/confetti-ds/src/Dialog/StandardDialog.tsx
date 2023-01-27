import React, { SyntheticEvent } from "react";

import Icon from "../Icon";
import { Button, OutlineButton } from "../Button";
import DialogWrapper from "./DialogWrapper";
import { IconTypes } from "../constants";
import { AbstractButtonProps } from "../Button/AbstractButton";

interface StandardDialogProps {
  /** Components that will be rendered in the DialogWrapper (MessageDialog, StandardDialog) */
  icon: IconTypes;
  /** The title of the Dialog */
  title: string;
  /** The content of the Dialog */
  content: string;
  /** Props for the main button */
  buttonProps: AbstractButtonProps;
  /** Props for the secondary button */
  outlineButtonProps?: AbstractButtonProps;
  /** Toggles .lab-dialog--large classname to increase Dialog width */
  isLarge?: boolean;
  /** This function prop is called on a close button or outside click event */
  handleClose?: (event?: SyntheticEvent) => any;
  /** Toggles overflow based on is open state. It changes the state shouldToggleOverflow . */
  isOpen?: boolean;
  /** Toggles overflow based on is a modal state. It changes the state shouldToggleOverflow . */
  isModal?: boolean;
}

export default function StandardDialog({
  title,
  content,
  buttonProps,
  outlineButtonProps,
  isLarge,
  isOpen,
  isModal,
  handleClose = () => {},
}: StandardDialogProps) {
  const [swipeStartYCoordinate, setSwipeStartYCoordinate] =
    React.useState(undefined);

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      handleClose();
    }
  };

  const handleTouchStart = (event) => {
    setSwipeStartYCoordinate(event.changedTouches[0].screenY);
  };

  const handleTouchEnd = (event) => {
    if (event.changedTouches[0].screenY - swipeStartYCoordinate >= 75) {
      setSwipeStartYCoordinate(undefined);
      handleClose();
    } else {
      setSwipeStartYCoordinate(undefined);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  if (!isOpen) return null;
  return (
    <DialogWrapper
      handleClose={handleClose}
      isOpen={isOpen}
      isModal={isModal}
      isLarge={isLarge}
    >
      <div className="lab-dialog__content" role="dialog" aria-modal="true">
        <button
          type="button"
          className="lab-dialog__mobile-close-button"
          onClick={handleClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Icon type="collapse-open" />
        </button>

        <div className="lab-dialog__header">
          <div className="lab-dialog__title">{title}</div>
          <button
            className="lab-dialog__close-button"
            type="button"
            onClick={handleClose}
            {...(isModal ? { tabIndex: 2 } : undefined)}
          >
            <Icon type="remove" className="lab-dialog__close-button-icon" />
          </button>
        </div>

        <p className="lab-dialog__body">{content}</p>

        <div className="lab-dialog__footer">
          {outlineButtonProps ? (
            <OutlineButton
              size="normal"
              text={outlineButtonProps.text}
              onClick={outlineButtonProps.onClick}
              {...(isModal ? { tabIndex: 3 } : undefined)}
            />
          ) : undefined}
          <Button
            size="normal"
            text={buttonProps.text}
            onClick={buttonProps.onClick}
            {...(isModal ? { tabIndex: 1 } : undefined)}
          />
        </div>
      </div>
    </DialogWrapper>
  );
}
