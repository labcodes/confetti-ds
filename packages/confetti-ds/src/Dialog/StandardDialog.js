import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import { Button, OutlineButton } from "../Button";
import DialogWrapper from "./DialogWrapper";

export default class StandardDialog extends React.Component {
  static propTypes = {
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
      title,
      content,
      buttonProps,
      outlineButtonProps,
      isLarge,
      isOpen,
      isModal,
      handleClose,
    } = this.props;

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
            onTouchStart={this.handleTouchStart}
            onTouchEnd={this.handleTouchEnd}
          >
            <Icon type="collapse-open" />
          </button>

          <div className="lab-dialog__header">
            <div className="lab-dialog__title">{title}</div>
            <button
              className="lab-dialog__close-button"
              type="button"
              onClick={handleClose}
              {...(isModal ? { tabIndex: "2" } : undefined)}
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
}
