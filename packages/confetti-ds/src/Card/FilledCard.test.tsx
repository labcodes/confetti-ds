import React from "react";
import renderer from "react-test-renderer";

import FilledCard from "./FilledCard";

describe("FilledCard", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(
        <FilledCard color="teal" skin="pale">
          Content
        </FilledCard>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isCompact", async () => {
    const renderedComponent = renderer
      .create(
        <FilledCard color="teal" skin="pale" isCompact>
          Content
        </FilledCard>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isHorizontal", async () => {
    const renderedComponent = renderer
      .create(
        <FilledCard color="teal" skin="pale" isHorizontal>
          Content
        </FilledCard>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with extra className", async () => {
    const renderedComponent = renderer
      .create(
        <FilledCard color="teal" skin="pale" className="test-classname">
          Content
        </FilledCard>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
