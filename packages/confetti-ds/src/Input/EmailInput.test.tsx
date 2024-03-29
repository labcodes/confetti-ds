/* eslint-disable no-console */
import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import EmailInput from "./EmailInput";

describe("EmailInput", () => {
  const originalWarn = console.warn;
  afterEach(() => {
    console.warn = originalWarn;
  });

  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<EmailInput id="testInput" label="Test Input" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = mount(
      <EmailInput
        id="testInput"
        label="Test Input"
        defaultValue="default"
        disabled
      />
    );
    expect(renderedComponent.find("input[disabled]")).toHaveLength(1);
  });

  it("raises console.warn and sets state with value when passing value and defaultValue by props at the same time", async () => {
    console.warn = jest.fn();

    const component = mount(
      <EmailInput
        id="testInput"
        label="Test Input"
        defaultValue="default value"
        value="test value"
      />
    );

    expect(console.warn).toBeCalled();
    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("test value");
  });

  it("sets state with value if it is passed by props", async () => {
    const component = mount(
      <EmailInput id="testInput" label="Test Input" value="test value" />
    );

    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("test value");
  });

  it("sets state with defaultValue if it is passed by props and value is not passed by props", async () => {
    const component = mount(
      <EmailInput
        id="testInput"
        label="Test Input"
        defaultValue="default value"
      />
    );
    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("default value");
  });

  it("sets localIsValid to false if defaultValue is invalid", async () => {
    const component = mount(
      <EmailInput
        id="testInput"
        label="Test Input"
        defaultValue="default value"
      />
    );
    expect(component.find(".lab-input--invalid")).toHaveLength(1);
  });

  it("sets localIsValid to false if value is invalid", async () => {
    const component = mount(
      <EmailInput id="testInput" label="Test Input" value="test value" />
    );
    expect(component.find(".lab-input--invalid")).toHaveLength(1);
  });

  it("sets localIsValid to true if value is valid and change it if value validity changes", async () => {
    const component = mount(
      <EmailInput id="testInput" label="Test Input" value="testvalue@g.com" />
    );
    expect(component.find(".lab-input--invalid")).toHaveLength(0);

    component.setProps({ value: "value changed" });
    component.update();

    expect(component.find(".lab-input--invalid")).toHaveLength(1);
  });

  it("shows help text", async () => {
    const component = mount(
      <EmailInput
        id="testInput"
        label="Test Input"
        value="testvalue@g.com"
        helpMessage="help message"
        required
      />
    );

    expect(component.find(".lab-input__message--required").text()).toBe(
      "help message"
    );

    component.setProps({ value: "" });
    component.update();

    expect(component.find(".lab-input__message--error").text()).toBe(
      "help message"
    );
  });

  it("shows custom error message when input is invalid", async () => {
    const component = mount(
      <EmailInput
        id="testInput"
        label="Test Input"
        value="testvalue@g.com"
        customErrorMsg="error message"
      />
    );

    expect(component.find(".lab-input__message--error")).toHaveLength(0);

    component.setProps({ value: "value changed" });
    component.update();

    expect(component.find(".lab-input__message--error").text()).toBe(
      "error message"
    );
  });

  it("changes localValue state when input changes", async () => {
    const component = mount(
      <EmailInput
        id="testInput"
        label="Test Input"
        value="truthy value"
        onChange={() => {}}
      />
    );

    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("truthy value");

    component
      .find("input")
      .at(0)
      .simulate("change", {
        target: {
          value: "My new value",
          validity: { valid: true },
          setCustomValidity: jest.fn(),
        },
      });

    expect(inputElement.render().attr("value")).toBe("My new value");
  });

  it("renders prefix when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(<EmailInput id="testInput" label="Test Input" prefix="R$" />)
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <EmailInput id="testInput" label="Test Input" prefix="R$" />
    );

    expect(mountedComponent.find("span.lab-input__prefix")).toHaveLength(2);
  });

  it("renders suffix when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(<EmailInput id="testInput" label="Test Input" suffix=".com" />)
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <EmailInput id="testInput" label="Test Input" suffix=".com" />
    );

    expect(mountedComponent.find("div.lab-input__suffix")).toHaveLength(1);
  });

  it("renders icon when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(<EmailInput id="testInput" label="Test Input" icon="StackStar" />)
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <EmailInput id="testInput" label="Test Input" icon="StackStar" />
    );

    expect(mountedComponent.find("span.lab-icon")).toHaveLength(1);
  });

  it("renders required icon when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(<EmailInput id="testInput" label="Test Input" icon="StackStar" />)
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <EmailInput id="testInput" label="Test Input" required />
    );

    expect(mountedComponent.find("span.lab-input__required-icon")).toHaveLength(
      1
    );
  });

  it("doesn't trigger onChange if ariaDisabled", async () => {
    const mockOnChange = jest.fn();
    const mountedComponent = mount(
      <EmailInput
        ariaDisabled
        id="testInput"
        label="Test Input"
        defaultValue="default"
        onChange={mockOnChange}
      />
    );

    expect(mountedComponent.find("input").render().attr("value")).toBe(
      "default"
    );
    expect(mockOnChange).not.toBeCalled();

    mountedComponent.find("input").at(0).simulate("change", { test: "event" });

    expect(mountedComponent.find("input").render().attr("value")).toBe(
      "default"
    );
    expect(mockOnChange).not.toBeCalled();
  });
});
