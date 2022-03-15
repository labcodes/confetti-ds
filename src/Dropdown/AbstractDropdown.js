import React, { Component } from "react";
import PropTypes from "prop-types";

import { DropdownTag } from "../Tags";
import SectionTitle from "./SectionTitle";
import { Button } from "../Button";
import { dropdownOptions } from "./propTypes";

export default class AbstractDropdown extends Component {
  static propTypes = {
    // functions
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    // props
    dropdownType: PropTypes.oneOf(dropdownOptions.types).isRequired,
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    // props
    color: "teal",
    // functions
    onOpen: () => {},
    onClose: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { children, color, text, dropdownType } = this.props;
    const { isOpen } = this.state;

    const isOpenClass = isOpen ? "lab-dropdown--is-open" : "";

    const trigger = {
      button: <Button text={text} />,
      tag: <DropdownTag text={text} color={color} />,
    };
    const renderTrigger = trigger[dropdownType];

    return (
      <div className="lab-dropdown">
        <div
          role="button"
          tabIndex={-1}
          aria-haspopup="true"
          className="lab-dropdown__trigger"
          id="lab-dropdown__trigger"
        >
          {renderTrigger}
        </div>

        <div
          role="listbox"
          tabIndex={0}
          className={`lab-dropdown__content  ${isOpenClass}`}
          id="lab-dropdown__listbox"
        >
          {React.Children.map(children, (child) => {
            const isSectionTitle = child.type === SectionTitle;
            if (isSectionTitle)
              return <child.type {...child.props} color={color} />;

            return child;
          })}
        </div>
      </div>
    );
  }
}
