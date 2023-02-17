import React from "react";
import renderer from "react-test-renderer";

import CardImage from "./CardImage";

describe("CardImage", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<CardImage src="test" alt="test" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isOverflowed", async () => {
    const renderedComponent = renderer
      .create(<CardImage src="test" alt="test" isOverflowed />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
