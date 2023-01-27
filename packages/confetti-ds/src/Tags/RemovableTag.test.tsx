import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import RemovableTag from "./RemovableTag";

describe("RemovableTag", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<RemovableTag text="Test render RemovableTag" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(<RemovableTag text="Test RemovableTag" />).html();
    expect(wrapper).toContain("lab-tag--removable");
  });

  it("renders as disabled", async () => {
    const renderedComponent = renderer
      .create(
        <RemovableTag text="Test render disabled RemovableTag" disabled />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <RemovableTag text="Test disabled RemovableTag" disabled />
    ).html();
    expect(wrapper).toContain("lab-tag--disabled");
  });

  it("renders as outline", async () => {
    const renderedComponent = renderer
      .create(
        <RemovableTag text="Test render outline RemovableTag" isOutline />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <RemovableTag text="Test outline RemovableTag" isOutline />
    ).html();
    expect(wrapper).toContain("lab-tag--outline");
  });

  it("renders with a green color", async () => {
    const renderedComponent = renderer
      .create(
        <RemovableTag text="Test render green RemovableTag" color="green" />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <RemovableTag text="Test green RemovableTag" color="green" />
    ).html();
    expect(wrapper).toContain("lab-tag--green");
  });

  it("calls prop.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowRemovableTag = shallow(
      <RemovableTag text="Test click on RemovableTag" onClick={mockOnClick} />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    shallowRemovableTag.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it("doesn't trigger onClick if ariaDisabled", async () => {
    const mockOnClick = jest.fn();
    const mountedComponent = mount(
      <RemovableTag ariaDisabled text="Test" onClick={mockOnClick} />
    );

    expect(mockOnClick).not.toBeCalled();
    mountedComponent.find("span").at(0).simulate("click");
    expect(mockOnClick).not.toBeCalled();
  });

  it("does not render if passing both `thumb` and `icon`", async () => {
    expect(() => {
      shallow(
        <RemovableTag
          text="Test to not render RemovableTag with thumb and icon"
          icon="calendar"
          thumbSrc="fake-thumb"
          thumbAlt="fake-thumb-alt"
        />
      );
    }).toThrow(
      "`RemovableTag` can't be initialized with both `thumb` and `icon` props."
    );
  });
});
