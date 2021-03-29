import React from "react";
import renderer from "react-test-renderer";

import OutlineCard from "./OutlineCard";

describe("OutlineCard", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(
        <OutlineCard color="teal" skin="pale">
          Content
        </OutlineCard>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isCompact", async () => {
    const renderedComponent = renderer
      .create(
        <OutlineCard color="teal" skin="pale" isCompact>
          Content
        </OutlineCard>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isHorizontal", async () => {
    const renderedComponent = renderer
      .create(
        <OutlineCard color="teal" skin="pale" isHorizontal>
          Content
        </OutlineCard>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with extra className", async () => {
    const renderedComponent = renderer
      .create(
        <OutlineCard color="teal" skin="pale" className="test-classname">
          Content
        </OutlineCard>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
