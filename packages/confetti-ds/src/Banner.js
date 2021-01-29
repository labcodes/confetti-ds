import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "./Icon";
import TextButton from "./Button/TextButton";

export default class Banner extends React.Component {
  static propTypes = {
    /** This is the message text string. */
    text: PropTypes.string.isRequired,
    /** Type of the Banner. */
    type: PropTypes.oneOf(["info", "warn", "error"]),
    /** Sets the icon related to the banner’s message. */
    icon: PropTypes.string.isRequired,
    /** Ojbect with information about the Banners's button. */
    buttonProps: PropTypes.shape({
      /** Banner's text button label. */
      text: PropTypes.string,
      /** Action to be executed when the button is clicked. */
      onClick: PropTypes.func,
    }),
  };

  static defaultProps = {
    type: "info",
    buttonProps: {
      text: "",
      onClick: () => {},
    },
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="white" className="lab-banner__icon" />
    ) : undefined;
  };

  button = () => {
    const { buttonProps, type } = this.props;
    if (buttonProps.text) {
      return type === "warn" ? (
        <TextButton size="normal" skin="dark" text={buttonProps.text} />
      ) : (
        <TextButton size="normal" skin="light" text={buttonProps.text} />
      );
    }
    return null;
  };

  handleClick = (event) => {
    const { buttonProps } = this.props;
    if (!isUndefined(buttonProps.onClick)) {
      buttonProps.onClick(event);
    }
  };

  render() {
    const { text, type } = this.props;
    return (
      <div className={`lab-banner lab-banner--${type}`}>
        {this.icon()}
        <span className="lab-banner__message">{text}</span>
        <span
          className="lab-banner__button"
          onClick={this.handleClick}
          role="presentation"
        >
          {this.button()}
        </span>
      </div>
    );
  }
}
