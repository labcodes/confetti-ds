import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import { Button, OutlineButton } from "../Button";
import DialogWrapper from "./DialogWrapper";

export default function StandardDialog({
  title,
  content,
  buttonProps,
  outlineButtonProps,
  isLarge,
  isOpen,
  isModal,
  handleClose,
}) {
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
              {...(isModal ? { tabIndex: "3" } : undefined)}
            />
          ) : undefined}
          <Button
            size="normal"
            text={buttonProps.text}
            onClick={buttonProps.onClick}
            {...(isModal ? { tabIndex: "1" } : undefined)}
          />
        </div>
      </div>
    </DialogWrapper>
  );
}

StandardDialog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonProps: PropTypes.exact({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }).isRequired,
  outlineButtonProps: PropTypes.exact({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  isLarge: PropTypes.bool,
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  isModal: PropTypes.bool,
};

StandardDialog.defaultProps = {
  outlineButtonProps: undefined,
  isLarge: false,
  handleClose: () => {},
  isOpen: false,
  isModal: false,
};
