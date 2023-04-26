import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Item from "./Item";

describe("Item", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<Item label="Test item" onClick={() => {}} />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with icon", async () => {
    const renderedComponent = renderer
      .create(<Item label="Test item" onClick={() => {}} icon="StackStar" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isActive", async () => {
    const renderedComponent = renderer
      .create(<Item label="Test item" isActive onClick={() => {}} />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowButton = shallow(
      <Item label="Test item" onClick={mockOnClick} />
    );
    shallowButton.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
