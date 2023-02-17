import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import TextButton from "./TextButton";

describe("TextButton", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<TextButton text="Test Text Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(<TextButton text="Test Text Disabled Button 1" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <TextButton text="Test Outline Disabled Button 2" disabled />
    );
    expect(mountedComponent.find("button").prop("disabled")).toEqual(true);
  });

  it("renders as expected when passing a dark skin", async () => {
    const renderedComponent = renderer
      .create(<TextButton text="Test Text Dark Button" skin="dark" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a small size", async () => {
    const renderedComponent = renderer
      .create(<TextButton text="Test Text Small Button" size="small" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a plus icon", async () => {
    const renderedComponent = renderer
      .create(<TextButton text="Test Text Small Button" icon="plus" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowButton = shallow(
      <TextButton text="Test Click on Text Button" onClick={mockOnClick} />
    );
    shallowButton.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it("doesn't call onClick if ariaDisabled", async () => {
    const mockOnClick = jest.fn();
    const mountedComponent = mount(
      <TextButton ariaDisabled onClick={mockOnClick} text="Test Text Button" />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    mountedComponent.find("button").simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(0);
  });

  it("renders as expected if full width", async () => {
    const renderedComponent = renderer
      .create(<TextButton text="Test Text fullWidth Button" fullWidth />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with full width", async () => {
    const mountedComponent = mount(
      <TextButton text="Test fullWidth Button" fullWidth />
    );
    expect(mountedComponent.find(".lab-btn--block")).toHaveLength(1);
  });

  it("renders as expected when tabIndex is passed", async () => {
    const renderedComponent = renderer
      .create(<TextButton text="Test tabIndex" tabIndex={1} />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
