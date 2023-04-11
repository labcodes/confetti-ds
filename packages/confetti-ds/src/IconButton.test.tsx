import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import IconButton from "./IconButton";
import { describe } from "node:test";

describe("IconButton", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<IconButton icon="star"></IconButton>)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
