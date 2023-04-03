import React from "react";
import renderer from "react-test-renderer";

import Icon from "./Icon";

describe("Icon", () => {
  it("renders with base props", () => {
    const renderedComponent = renderer.create(<Icon type="Cloud" />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
