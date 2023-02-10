import React from "react";
export interface CardImageProps {
  /** Specifies the path to the image. */
  src: string;
  /** Specifies an alternate text for the image if the image cannot be displayed for some reason. */
  alt: string;
  /** Sets whether the image has Card's full width. */
  isOverflowed?: boolean;
}

export default function CardImage({
  src,
  alt,
  isOverflowed = false,
}: CardImageProps) {
  return (
    <img
      className={`lab-card-image${
        isOverflowed ? " lab-card-image--overflowed" : ""
      }`}
      src={src}
      alt={alt}
    />
  );
}
