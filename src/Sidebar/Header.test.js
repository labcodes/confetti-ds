import React from "react";
import renderer from "react-test-renderer";

import Header from "./Header";

describe("Header", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<Header>Test content</Header>)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
