import { PropTypes } from "prop-types";
import React, { Component } from "react";

export default class DropdownTrigger extends Component {
  static propTypes = {
    // functions
    onClickEvent: PropTypes.func.isRequired,
    onKeyUpEvent: PropTypes.func.isRequired,
    setRef: PropTypes.func.isRequired,
    // props
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const { setRef } = this.props;

    this.ref = React.createRef();
    setRef(this.ref);
  }

  render() {
    const { onClickEvent, onKeyUpEvent, children, id } = this.props;
    const { text } = children.props;

    return (
      <div>
        <button
          className="lab-dropdown__invisible-button lab-dropdown__invisible-button--trigger"
          aria-controls={`menu--${id}`}
          type="button"
          id={`menu-button--menu--${id}`}
          onKeyUp={onKeyUpEvent}
          onClick={onClickEvent}
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