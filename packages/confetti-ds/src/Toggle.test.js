/* eslint-disable no-console */
import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";

import Toggle from "./Toggle";

describe("Toggle", () => {
  it("renders with base props", async () => {
    const component = <Toggle id="test-toggle" name="test-toggle" />;
    expect(mount(component)).toBeTruthy();
    const renderedComponent = renderer.create(component).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(<Toggle id="test-toggle" name="test-toggle" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a different color", async () => {
    const renderedComponent = renderer
      .create(
        <Toggle id="test-toggle" color="purple" name="test-toggle" disabled />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("initializes toggled if defaultValue is passed", async () => {
    const mountedComponent = mount(
      <Toggle id="test-toggle" name="test-toggle" defaultValue />
    );
    expect(mountedComponent.find({ checked: true })).toHaveLength(1);
  });

  it("initializes untoggled if defaultValue is passed as false", async () => {
    const mountedComponent = mount(
      <Toggle id="test-toggle" name="test-toggle" defaultValue={false} />
    );
    expect(mountedComponent.find({ checked: false })).toHaveLength(1);
  });

  it("initializes untoggled if defaultValue is not passed", async () => {
    const mountedComponent = mount(
      <Toggle id="test-toggle" name="test-toggle" />
    );
    expect(mountedComponent.find({ checked: false })).toHaveLength(1);
  });

  it("changes state when input changes", async () => {
    const mountedComponent = mount(
      <Toggle id="test-toggle" name="test-toggle" />
    );

    expect(mountedComponent.find({ checked: false })).toHaveLength(1);
    mountedComponent.find("input").at(0).simulate("change");
    expect(mountedComponent.find({ checked: true })).toHaveLength(1);
  });

  it("calls props.handleToggle passing event when input changes", async () => {
    const mockHandleToggle = jest.fn();
    const mountedComponent = mount(
      <Toggle
        id="test-toggle"
        name="test-toggle"
        handleToggle={mockHandleToggle}
      />
    );

    expect(mountedComponent.find({ checked: false })).toHaveLength(1);
    expect(mockHandleToggle).not.toBeCalled();

    mountedComponent.find("input").at(0).simulate("change", { test: "event" });

    expect(mountedComponent.find({ checked: true })).toHaveLength(1);
    expect(mockHandleToggle).toBeCalledWith(
      expect.objectContaining({ test: "event" })
    );
  });

  it("doesn't trigger onChange if ariaDisabled", async () => {
    const mockHandleToggle = jest.fn();
    const shallowComponent = shallow(
      <Toggle
        ariaDisabled
        handleToggle={mockHandleToggle}
        id="test-toggle"
        name="test-toggle"
      />
    );

    expect(shallowComponent.find({ checked: false })).toHaveLength(1);
    expect(mockHandleToggle).not.toBeCalled();

    shallowComponent.find("input").at(0).simulate("change", { test: "event" });

    expect(shallowComponent.find({ checked: false })).toHaveLength(1);
    expect(mockHandleToggle).not.toBeCalled();
  });
});
