import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import TogglableTag from "./TogglableTag";

describe("TogglableTag", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<TogglableTag text="Test render TogglableTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(<TogglableTag text="Test TogglableTag" />).html();
    expect(wrapper).toContain("lab-tag--togglable");
  });

  it("renders as expected with disabled as true", async () => {
    const renderedComponent = renderer
      .create(<TogglableTag text="Test nount disabled TogglableTag" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TogglableTag text="Test disabled TogglableTag" disabled />
    ).html();
    expect(wrapper).toContain("lab-tag--disabled");
  });

  it("renders as expected with outline as true", async () => {
    const renderedComponent = renderer
      .create(
        <TogglableTag text="Test render outline TogglableTag" isOutline />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TogglableTag text="Test outline TogglableTag" isOutline />
    ).html();
    expect(wrapper).toContain("lab-tag--outline");
  });

  it("renders as expected with a yellow color", async () => {
    const renderedComponent = renderer
      .create(
        <TogglableTag text="Test render yellow TogglableTag" color="yellow" />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TogglableTag text="Test yellow TogglableTag" color="yellow" />
    ).html();
    expect(wrapper).toContain("lab-tag--yellow");
  });

  it("renders with a pale skin if not isOn", async () => {
    const renderedComponent = renderer
      .create(
        <TogglableTag text="Test render pale TogglableTag" isOn={false} />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TogglableTag text="Test pale TogglableTag" isOn={false} />
    ).html();
    expect(wrapper).toContain("lab-tag--pale");
  });

  it("renders with a vivid skin and a checked icon if isOn", async () => {
    const renderedComponent = renderer
      .create(<TogglableTag text="Test render isOn TogglableTag" isOn />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TogglableTag text="Test isOn TogglableTag" isOn />
    ).html();
    expect(wrapper).toContain("lab-tag--vivid");
    expect(wrapper).toContain("lab-icon--check");
  });

  it("calls prop.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowTogglableTag = shallow(
      <TogglableTag text="Test click on TogglableTag" onClick={mockOnClick} />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    shallowTogglableTag.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it("doesn't trigger onClick if ariaDisabled", async () => {
    const mockOnClick = jest.fn();
    const mountedComponent = mount(
      <TogglableTag ariaDisabled text="Test" onClick={mockOnClick} />
    );

    expect(mockOnClick).not.toBeCalled();
    mountedComponent.find("span").at(0).simulate("click");
    expect(mockOnClick).not.toBeCalled();
  });
});
