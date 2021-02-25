import React from "react";

import sampleImage from "./card-image.jpg";
import { CardImage as Component } from "../../../../confetti-ds/src/Card";

export default {
  title: "Content/Card/Card Subcomponents/Card Image",
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
