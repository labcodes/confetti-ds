/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Radio from "./Radio";

describe("Radio", () => {
  const originalWarn = console.warn;
  afterEach(() => {
    console.warn = originalWarn;
  });

  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(
        <Radio
          name="test-radio-group"
          id="test-radio"
          label="test radio"
          value="radio1"
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(
        <Radio
          name="test-radio"
          id="test-radio"
          label="test radio"
          value="radio1"
          disabled
        />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a different className", async () => {
    const renderedComponent = renderer
      .create(
        <Radio
          name="test-radio"
          id="test-radio"
          label="test radio"
          value="radio1"
          className="lab-radio--purple"
          checked
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onChange passing event when input changes", async () => {
    const mockOnChange = jest.fn();
    const component = shallow(
      <Radio
        name="test-radio"
        id="test-radio"
        label="test radio"
        value="radio1"
        onChange={mockOnChange}
      />
    );

    expect(mockOnChange).not.toBeCalled();
    component.find("input").at(0).simulate("change", { test: "event" });
    expect(mockOnChange).toBeCalledWith({ test: "event" });
  });

  it("doesn't trigger onChange if ariaDisabled", async () => {
    const mockOnChange = jest.fn();
    const shallowComponent = shallow(
      <Radio
        ariaDisabled
        onChange={mockOnChange}
        name="test-toggle"
        id="test-radio"
        label="test radio"
        value="radio1"
      />
    );

    expect(
      shallowComponent.find("input[type='radio']").is("[checked]")
    ).toBeFalsy();
    expect(mockOnChange).not.toBeCalled();

    shallowComponent.find("input").at(0).simulate("change", { test: "event" });

    expect(
      shallowComponent.find("input[type='radio']").is("[checked]")
    ).toBeFalsy();
    expect(mockOnChange).not.toBeCalled();
  });
});
