import React, { SyntheticEvent } from "react";

import Icon from "../Icon";
import DialogWrapper from "./DialogWrapper";
import { Button, OutlineButton } from "../Button";
import { IconTypes } from "../constants";
import { OutlineButtonProps } from "../Button/OutlineButton";
import { ButtonProps } from "../Button/Button";

export interface MessageDialogProps {
  /** Components that will be rendered in the DialogWrapper (MessageDialog, StandardDialog) */
  icon: IconTypes;
  /** The title of the Dialog */
  title: string;
  /** The content of the Dialog */
  content: string;
  /** Props for the main button */
  buttonProps: ButtonProps;
  /** Props for the secondary button */
  outlineButtonProps?: OutlineButtonProps;
  /** Toggles .lab-dialog--large classname to increase Dialog width */
  isLarge?: boolean;
  /** This function prop is called on a close button or outside click event */
  handleClose?: (event?: SyntheticEvent) => any;
  /** Toggles overflow based on is open state. It changes the state shouldToggleOverflow . */
  isOpen?: boolean;
  /** Toggles overflow based on is a modal state. It changes the state shouldToggleOverflow . */
  isModal?: boolean;
}

export default function MessageDialog({
  icon,
  title,
  content,
  buttonProps,
  outlineButtonProps,
  isLarge = false,
  handleClose = () => {},
  isOpen = false,
  isModal = false,
}: MessageDialogProps) {
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
      isMessageDialog
    >
      <div
        className="lab-dialog__content lab-dialog__content--message"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="lab-dialog__mobile-close-button lab-dialog__mobile-close-button--message"
          onClick={handleClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Icon type="collapse-open" />
        </button>
        <div className="lab-dialog__header lab-dialog__header--message">
          <button
            className="lab-dialog__close-button"
            type="button"
            {...(isModal ? { tabIndex: 2 } : undefined)}
            onClick={handleClose}
          >
            <Icon type="remove" className="lab-dialog__close-button-icon" />
          </button>
        </div>

        <div className="lab-dialog__icon-wrapper">
          <Icon type={icon} className="lab-dialog__icon" />
        </div>

        <div className="lab-dialog__title lab-dialog__title--message">
          {title}
        </div>

        <div className="lab-dialog__body lab-dialog__body--message">
          {content}
        </div>

        <div className="lab-dialog__footer lab-dialog__footer--message">
          {outlineButtonProps ? (
            <OutlineButton
              size="normal"
              label={outlineButtonProps.label}
              onClick={outlineButtonProps.onClick}
              {...(isModal ? { tabIndex: 3 } : undefined)}
            />
          ) : undefined}
          <Button
            size="normal"
            {...(outlineButtonProps ? undefined : { fullWidth: true })}
            label={buttonProps.label}
            onClick={buttonProps.onClick}
            {...(isModal ? { tabIndex: 1 } : undefined)}
          />
        </div>
      </div>
    </DialogWrapper>
  );
}
