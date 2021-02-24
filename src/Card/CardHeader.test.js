import React from "react";
import renderer from "react-test-renderer";

import CardHeader from "./CardHeader";

describe("CardHeader", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer.create(<CardHeader />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with title", async () => {
    const renderedComponent = renderer
      .create(<CardHeader title="test" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with titleClassName", async () => {
    const renderedComponent = renderer
      .create(<CardHeader titleClassName="test-class-name" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with subtitle", async () => {
    const renderedComponent = renderer
      .create(<CardHeader subtitle="test" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with subtitleClassName", async () => {
    const renderedComponent = renderer
      .create(<CardHeader subtitleClassName="test-class-name" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with categoryText", async () => {
    const renderedComponent = renderer
      .create(<CardHeader categoryText="test" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with categoryTagText", async () => {
    const renderedComponent = renderer
      .create(<CardHeader categoryTagText="test" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with categoryIcon", async () => {
    const renderedComponent = renderer
      .create(<CardHeader categoryIcon="star" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with categoryColor", async () => {
    const renderedComponent = renderer
      .create(<CardHeader categoryColor="mineral" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isOverlay", async () => {
    const renderedComponent = renderer
      .create(<CardHeader isOverlay />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
