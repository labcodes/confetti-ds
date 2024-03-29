import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import DropdownTag from "./DropdownTag";

describe("DropdownTag", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<DropdownTag text="Test render DropdownTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(<DropdownTag text="Test DropdownTag" />).html();
    expect(wrapper).toContain("lab-tag--dropdown");
    expect(wrapper).toContain("lab-icon--CaretDown");
  });

  it("renders as disabled", async () => {
    const renderedComponent = renderer
      .create(<DropdownTag text="Test render disabled DropdownTag" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <DropdownTag text="Test disabled DropdownTag" disabled />
    ).html();
    expect(wrapper).toContain("lab-tag--disabled");
  });

  it("render as outline", async () => {
    const renderedComponent = renderer
      .create(<DropdownTag text="Test render outline DropdownTag" isOutline />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <DropdownTag text="Test outline DropdownTag" isOutline />
    ).html();
    expect(wrapper).toContain("lab-tag--outline");
  });

  it("renders with a pink color", async () => {
    const renderedComponent = renderer
      .create(<DropdownTag text="Test render pink DropdownTag" color="pink" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <DropdownTag text="Test pink DropdownTag" color="pink" />
    ).html();
    expect(wrapper).toContain("lab-tag--pink");
  });

  it("calls prop.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowDropdownTag = shallow(
      <DropdownTag text="Test render " onClick={mockOnClick} />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    shallowDropdownTag.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it("doesn't trigger onClick if ariaDisabled", async () => {
    const mockOnClick = jest.fn();
    const mountedComponent = mount(
      <DropdownTag ariaDisabled text="Test" onClick={mockOnClick} />
    );

    expect(mockOnClick).not.toBeCalled();
    mountedComponent.find("span").at(0).simulate("click");
    expect(mockOnClick).not.toBeCalled();
  });
});
