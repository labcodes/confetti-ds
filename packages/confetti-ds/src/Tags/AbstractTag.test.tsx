import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import AbstractTag from "./AbstractTag";

describe("AbstractTag", () => {
  it("renders with base props for 'simple' type", async () => {
    const renderedComponent = renderer
      .create(<AbstractTag text="Test SimpleTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for 'removable' type", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractTag className="lab-tag--removable" text="Test RemovableTag" />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for 'togglable' type", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractTag className="lab-tag--togglable" text="Test TogglableTag" />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for 'dropdown' type", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractTag className="lab-tag--dropdown" text="Test DropdownTag" />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("triggers onClick", async () => {
    const mockOnClick = jest.fn();
    const shallowComponent = shallow(
      <AbstractTag text="Test SimpleTag" onClick={mockOnClick} />
    );

    expect(mockOnClick).not.toBeCalled();
    shallowComponent.find("span").at(0).simulate("click", { test: "event" });
    expect(mockOnClick).toBeCalledWith({ test: "event" });
  });

  it("doesn't trigger onClick if ariaDisabled", async () => {
    const mockOnClick = jest.fn();
    const shallowComponent = shallow(
      <AbstractTag ariaDisabled text="Test SimpleTag" onClick={mockOnClick} />
    );

    expect(mockOnClick).not.toBeCalled();
    shallowComponent.find("span").at(0).simulate("click");
    expect(mockOnClick).not.toBeCalled();
  });
});
