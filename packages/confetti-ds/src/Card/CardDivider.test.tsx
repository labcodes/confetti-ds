import React from "react";
import renderer from "react-test-renderer";

import CardDivider from "./CardDivider";

describe("CardDivider", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer.create(<CardDivider />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isOverflowed", async () => {
    const renderedComponent = renderer
      .create(<CardDivider isOverflowed />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
