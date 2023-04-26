import React from "react";

import sampleImage from "./card-image.jpg";
import { CardImage as Component } from "../../../../../../packages/confetti-ds/src/Card";

export default {
  title: "Cards/Card/Card Subcomponents/Card Image",
  component: Component,
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

export const CardImage = (args) => <Component {...args} />;
CardImage.args = {
  src: sampleImage,
  alt: "Sample image",
};
