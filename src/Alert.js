import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "./Icon";
import TextButton from "./Button/TextButton";

export default class Alert extends React.Component {
  static propTypes = {
    /** This is the message text string. */
    text: PropTypes.string.isRequired,
    /** Type of the Alert. */
    type: PropTypes.oneOf(["info", "warn", "error"]),
    /** Sets the icon related to the alert’s message. */
    icon: PropTypes.string.isRequired,
    /** Adds props for buttons eg.: [example of how to use]. Check buttons page for more information. */
    buttonProps: PropTypes.shape({
      /** Alert's text button label. */
      text: PropTypes.string,
      /** Action to be executed when the button is clicked. */
      onClick: PropTypes.func,
    }),
  };

  static defaultProps = {
    type: "info",
    buttonProps: { text: "", onClick: () => {} },
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="mineral-70" className="lab-alert__icon" />
    ) : undefined;
  };

  button = () => {
    const {
      buttonProps: { text },
    } = this.props;
    return text ? (
      <TextButton size="normal" skin="dark" text={text} />
    ) : undefined;
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
      <div className={`lab-alert lab-alert--${type}`}>
        {this.icon()}
        <span className="lab-alert__message">{text}</span>
        <span
          className="lab-alert__button"
          onClick={this.handleClick}
          role="presentation"
        >
          {this.button()}
        </span>
      </div>
    );
  }
}
