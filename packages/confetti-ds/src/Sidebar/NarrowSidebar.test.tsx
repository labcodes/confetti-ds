import React from "react";
import renderer from "react-test-renderer";

import NarrowSidebar from "./NarrowSidebar";

describe("NarrowSidebar", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<NarrowSidebar>Test content</NarrowSidebar>)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with dividers", async () => {
    const renderedComponent = renderer
      .create(<NarrowSidebar withDividers>Test content</NarrowSidebar>)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isOpenOnMobile", async () => {
    const renderedComponent = renderer
      .create(<NarrowSidebar isOpenOnMobile>Test content</NarrowSidebar>)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isVivid", async () => {
    const renderedComponent = renderer
      .create(<NarrowSidebar isVivid>Test content</NarrowSidebar>)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
