import React, { useEffect } from "react";

import Icon from "../Icon";
import { SimpleTag } from "../Tags";
import { IconTypes } from "../constants";

interface CardHeaderProps {
  /** Sets card's title. */
  title?: string;
  /** Sets a className for card's title. */
  titleClassName?: string;
  /** Sets card's subtitle. */
  subtitle?: string;
  /** Sets a className for card's subtitle. */
  subtitleClassName?: string;
  /** Adds a category text in the Card Header. Used to define the group of which the Card is part of. May use a categoryIcon OR categoryColor to the left as visual support for its content. */
  categoryText?: string;
  /** Sets a SimpleTag's text in the Card Header. Can be used instead of categoryText to highlight the group of which the Card is part of OR together with categoryText as a sub-category. Only use if categoryColor is not present.  */
  categoryTagText?: string;
  /** Always used with categoryTagText to set SimpleTag's color in the Card Header. If unset the Tag will be displayed with its default color. */
  categoryTagColor?: string;
  /** Defines an Icon as visual support to categoryText in the Card Header. It must not be used together with categoryColor. */
  categoryIcon?: IconTypes;
  /** Defines a Color as visual support to categoryText in the Card Header. It must not be used together with categoryIcon. */
  categoryColor?: string;
  /** Sets whether the header will go over the image or not. */
  isOverlay?: boolean;
}

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
}: CardHeaderProps) {
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
