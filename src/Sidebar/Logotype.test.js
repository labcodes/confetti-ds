import React from "react";
import renderer from "react-test-renderer";

import Logotype from "./Logotype";

describe("Logotype", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<Logotype logoSrc="src" altText="text" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
