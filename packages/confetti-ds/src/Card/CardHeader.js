import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import { SimpleTag } from "../Tags";
import { ICON_TYPES } from "../constants";

export default class CardHeader extends React.Component {
  static propTypes = {
    /** Sets card's title. */
    title: PropTypes.string,
    /** Sets a className for card's title. */
    titleClassName: PropTypes.string,
    /** Sets card's subtitle. */
    subtitle: PropTypes.string,
    /** Sets a className for card's subtitle. */
    subtitleClassName: PropTypes.string,
    /** Sets card's category. */
    categoryText: PropTypes.string,
    /** Sets card's label. */
    categoryLabelText: PropTypes.string,
    /** Sets card's category icon. */
    categoryIcon: PropTypes.oneOf(ICON_TYPES),
    /** Sets card's category badge color. */
    categoryColor: PropTypes.oneOf(["mineral", "teal", "purple"]),
    /** Sets whether the header will go over the image or not. */
    isOverlay: PropTypes.bool,
  };

  static defaultProps = {
    title: undefined,
    titleClassName: undefined,
    subtitle: undefined,
    subtitleClassName: undefined,
    categoryText: undefined,
    categoryLabelText: undefined,
    categoryIcon: undefined,
    categoryColor: undefined,
    isOverlay: undefined,
  };

  constructor(props) {
    super(props);
    this.checkColorAndIcon(props);
  }

  componentDidUpdate() {
    this.checkColorAndIcon(this.props);
  }

  checkColorAndIcon = (props) => {
    const { categoryColor, categoryIcon } = props;
    if (categoryIcon && categoryColor) {
      throw Error(
        "A CardHeader can't have both `categoryColor` and `categoryIcon`. Please choose one of them."
      );
    }
  };

  render() {
    const {
      title,
      titleClassName,
      subtitle,
      subtitleClassName,
      categoryText,
      categoryLabelText,
      categoryIcon,
      categoryColor,
      isOverlay,
    } = this.props;

    return (
      <article
        className={`lab-card-header${
          isOverlay ? " lab-card-header--overlay" : ""
        }`}
      >
        {categoryIcon || categoryColor || categoryText || categoryLabelText ? (
          <p className="lab-card-category">
            {categoryIcon ? <Icon type={categoryIcon} /> : null}
            {categoryColor ? (
              <span
                className={`lab-card-category__color lab-card-category__color--${categoryColor}`}
              />
            ) : null}
            {categoryText ? (
              <span className="lab-card-category__text">{categoryText}</span>
            ) : null}
            {categoryLabelText ? <SimpleTag text={categoryLabelText} /> : null}
          </p>
        ) : null}
        {title ? (
          <p
            className={`lab-card-title${
              titleClassName ? ` ${titleClassName}` : ""
            }`}
          >
            {title}
          </p>
        ) : null}
        {subtitle ? (
          <p
            className={`lab-card-subtitle${
              subtitleClassName ? ` ${subtitleClassName}` : ""
            }`}
          >
            {subtitle}
          </p>
        ) : null}
      </article>
    );
  }
}
