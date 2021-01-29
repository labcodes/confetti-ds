import React from "react";
import renderer from "react-test-renderer";

import Body from "./Body";
import { NavbarWithDividersContext } from "./NarrowSidebar";

describe("Body", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<Body>Test content</Body>)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with dividers", async () => {
    const renderedComponent = renderer
      .create(
        <NavbarWithDividersContext.Provider value>
          <Body>Test content</Body>
        </NavbarWithDividersContext.Provider>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
