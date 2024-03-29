import React from "react";
import renderer from "react-test-renderer";

import OutlineFilledCard from "./OutlineFilledCard";

describe("OutlineFilledCard", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<OutlineFilledCard color="teal">Content</OutlineFilledCard>)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isCompact", async () => {
    const renderedComponent = renderer
      .create(
        <OutlineFilledCard color="teal" isCompact>
          Content
        </OutlineFilledCard>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isHorizontal", async () => {
    const renderedComponent = renderer
      .create(
        <OutlineFilledCard color="teal" isHorizontal>
          Content
        </OutlineFilledCard>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with extra className", async () => {
    const renderedComponent = renderer
      .create(
        <OutlineFilledCard color="teal" className="test-classname">
          Content
        </OutlineFilledCard>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
