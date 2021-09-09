import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import OutlineButton from "./OutlineButton";

describe("OutlineButton", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Disabled Button 1" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <OutlineButton text="Test Outline Disabled Button 2" disabled />
    );
    expect(mountedComponent.find("button").prop("disabled")).toEqual(true);
  });

  it("renders as expected when passing a light skin", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Light Button" skin="light" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a large size", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline Large Button" size="large" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a magnifying-glass icon", async () => {
    const renderedComponent = renderer
      .create(
        <OutlineButton
          text="Test Outline magnifying-glass Button"
          icon="magnifying-glass"
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowButton = shallow(
      <OutlineButton text="Test Click on Outl Button" onClick={mockOnClick} />
    );
    shallowButton.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it("doesn't call onClick if ariaDisabled", async () => {
    const mockOnClick = jest.fn();
    const mountedComponent = mount(
      <OutlineButton
        ariaDisabled
        onClick={mockOnClick}
        text="Test Outl Button"
      />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    mountedComponent.find("button").simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(0);
  });

  it("renders as expected if full width", async () => {
    const renderedComponent = renderer
      .create(<OutlineButton text="Test Outline fullWidth Button" fullWidth />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with full width", async () => {
    const mountedComponent = mount(
      <OutlineButton text="Test fullWidth Button" fullWidth />
    );
    expect(mountedComponent.find(".lab-btn--block")).toHaveLength(1);
  });

  it("renders as expected when tabIndex is passed", async () => {
    const renderedComponent = renderer
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      .create(<OutlineButton text="Test tabIndex" tabIndex="1" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
