import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import DialogWrapper from "./DialogWrapper";
import { Button, OutlineButton } from "../Button";
import { ICON_TYPES } from "../constants";

export default class MessageDialog extends React.Component {
  static propTypes = {
    icon: PropTypes.oneOf(ICON_TYPES).isRequired,
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

  static defaultProps = {
    outlineButtonProps: undefined,
    isLarge: false,
    handleClose: () => {},
    isOpen: false,
    isModal: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      swipeStartYCoordinate: undefined,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyDown = (event) => {
    const { handleClose } = this.props;
    if (event.keyCode === 27) {
      handleClose();
    }
  };

  handleTouchStart = (event) => {
    this.setState({ swipeStartYCoordinate: event.changedTouches[0].screenY });
  };

  handleTouchEnd = (event) => {
    const { handleClose } = this.props;
    const { swipeStartYCoordinate } = this.state;

    if (event.changedTouches[0].screenY - swipeStartYCoordinate >= 75) {
      this.setState({ swipeStartYCoordinate: undefined }, () => handleClose());
    } else {
      this.setState({ swipeStartYCoordinate: undefined });
    }
  };

  render() {
    const {
      icon,
      title,
      content,
      buttonProps,
      outlineButtonProps,
      isLarge,
      isOpen,
      handleClose,
      isModal,
    } = this.props;

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
            onTouchStart={this.handleTouchStart}
            onTouchEnd={this.handleTouchEnd}
          >
            <Icon type="collapse-open" />
          </button>
          <div className="lab-dialog__header lab-dialog__header--message">
            <button
              className="lab-dialog__close-button lab-dialog__close-button--message"
              type="button"
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
                text={outlineButtonProps.text}
                onClick={outlineButtonProps.onClick}
              />
            ) : undefined}
            <Button
              size="normal"
              {...(outlineButtonProps ? undefined : { fullWidth: true })}
              text={buttonProps.text}
              onClick={buttonProps.onClick}
            />
          </div>
        </div>
      </DialogWrapper>
    );
  }
}
