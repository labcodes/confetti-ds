import { PropTypes } from "prop-types";
import React, { Component } from "react";

export default class DropdownTrigger extends Component {
  static propTypes = {
    /** This function fires when the trigger receives a click. */
    handleTriggerClick: PropTypes.func.isRequired,
    /** This function fires when the trigger receives a keyboard interaction. */
    handleKeyDown: PropTypes.func.isRequired,
    /** This is a function to set the ref of the trigger. */
    setRef: PropTypes.func.isRequired,
    /** This prop is used to get Button (or Tag) dropdown trigger */
    children: PropTypes.node.isRequired,
    /** This is the dropdown id. It is necessary an unique id */
    id: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const { setRef } = this.props;

    this.ref = React.createRef();
    setRef(this.ref);
  }

  render() {
    const { handleTriggerClick, handleKeyDown, children, id } = this.props;
    const { text } = children.props;

    return (
      <div>
        <button
          className="lab-dropdown__invisible-button lab-dropdown__invisible-button--trigger"
          aria-controls={`menu--${id}`}
          type="button"
          id={`menu-button--menu--${id}`}
          onKeyDown={handleKeyDown}
          onClick={handleTriggerClick}
          aria-haspopup
          ref={this.ref}
        >
          {text}
        </button>
        {React.cloneElement(children, {
          ...children.props,
          tabIndex: "-1",
        })}
      </div>
    );
  }
}
