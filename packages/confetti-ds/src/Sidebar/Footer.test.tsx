import React from "react";
import renderer from "react-test-renderer";

import Footer from "./Footer";

describe("Footer", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<Footer>Test content</Footer>)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
