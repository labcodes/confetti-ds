import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import { SimpleTag } from "../Tags";
import { ICON_TYPES } from "../constants";

export default function CardHeader({
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  categoryText,
  categoryTagText,
  categoryTagColor,
  categoryIcon,
  categoryColor,
  isOverlay,
}) {
  const checkColorAndIcon = (categoryColor, categoryIcon) => {
    if (categoryIcon && categoryColor) {
      throw Error(
        "A CardHeader can't have both `categoryColor` and `categoryIcon`. Please choose one of them."
      );
    }
  };

  useEffect(() => {
    checkColorAndIcon(categoryColor, categoryIcon);
  }, [categoryColor, categoryIcon]);

  return (
    <article
      className={`lab-card-header${
        isOverlay ? " lab-card-header--overlay" : ""
      }`}
    >
      {categoryIcon || categoryColor || categoryText || categoryTagText ? (
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
          {categoryTagText ? (
            <SimpleTag text={categoryTagText} color={categoryTagColor} />
          ) : null}
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

CardHeader.propTypes = {
  /** Sets card's title. */
  title: PropTypes.string,
  /** Sets a className for card's title. */
  titleClassName: PropTypes.string,
  /** Sets card's subtitle. */
  subtitle: PropTypes.string,
  /** Sets a className for card's subtitle. */
  subtitleClassName: PropTypes.string,
  /** Adds a category text in the Card Header. Used to define the group of which the Card is part of. May use a categoryIcon OR categoryColor to the left as visual support for its content. */
  categoryText: PropTypes.string,
  /** Sets a SimpleTag's text in the Card Header. Can be used instead of categoryText to highlight the group of which the Card is part of OR together with categoryText as a sub-category. Only use if categoryColor is not present.  */
  categoryTagText: PropTypes.string,
  /** Always used with categoryTagText to set SimpleTag's color in the Card Header. If unset the Tag will be displayed with its default color. */
  categoryTagColor: PropTypes.string,
  /** Defines an Icon as visual support to categoryText in the Card Header. It must not be used together with categoryColor. */
  categoryIcon: PropTypes.oneOf(ICON_TYPES),
  /** Defines a Color as visual support to categoryText in the Card Header. It must not be used together with categoryIcon. */
  categoryColor: PropTypes.string,
  /** Sets whether the header will go over the image or not. */
  isOverlay: PropTypes.bool,
};

CardHeader.defaultProps = {
  title: undefined,
  titleClassName: undefined,
  subtitle: undefined,
  subtitleClassName: undefined,
  categoryText: undefined,
  categoryTagText: undefined,
  categoryTagColor: undefined,
  categoryIcon: undefined,
  categoryColor: undefined,
  isOverlay: undefined,
};
