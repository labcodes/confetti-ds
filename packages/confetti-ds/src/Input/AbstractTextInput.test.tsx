/* eslint-disable no-console */
import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import AbstractTextInput from "./AbstractTextInput";

describe("AbstractTextInput", () => {
  const originalWarn = console.warn;
  afterEach(() => {
    console.warn = originalWarn;
  });

  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<AbstractTextInput id="testInput" label="Test Input" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        defaultValue="default"
        disabled
      />
    );
    expect(mountedComponent.find("input[disabled]")).toHaveLength(1);
  });

  it("raises console.warn and sets state with value when passing value and defaultValue by props at the same time", async () => {
    console.warn = jest.fn();

    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        defaultValue="default value"
        value="test value"
      />
    );

    expect(console.warn).toBeCalled();
    const inputElement = mountedComponent.find("input");
    expect(inputElement.render().attr("value")).toBe("test value");
  });

  it("sets state with value if it is passed by props", async () => {
    const mountedComponent = mount(
      <AbstractTextInput id="testInput" label="Test Input" value="test value" />
    );

    const inputElement = mountedComponent.find("input");
    expect(inputElement.render().attr("value")).toBe("test value");
  });

  it("sets state with defaultValue if it is passed by props and value is not passed by props", async () => {
    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        defaultValue="default value"
      />
    );
    const inputElement = mountedComponent.find("input");
    expect(inputElement.render().attr("value")).toBe("default value");
  });

  it("sets state with isValid if it is passed by props", async () => {
    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        defaultValue="default value"
        isValid={false}
      />
    );
    expect(mountedComponent.find(".lab-input--invalid")).toHaveLength(1);
  });

  it("sets localIsValid to false if defaultValue is invalid", async () => {
    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        type="email"
        defaultValue="default value"
      />
    );
    expect(mountedComponent.find(".lab-input--invalid")).toHaveLength(1);
  });

  it("sets localIsValid to false if value is invalid", async () => {
    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        type="email"
        value="test value"
      />
    );
    expect(mountedComponent.find(".lab-input--invalid")).toHaveLength(1);
  });

  it("sets localIsValid to true if value is valid and change it if value validity changes", async () => {
    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        type="email"
        value="testvalue@g.com"
      />
    );
    expect(mountedComponent.find(".lab-input--invalid")).toHaveLength(0);

    mountedComponent.setProps({ value: "value changed" });
    mountedComponent.update();

    expect(mountedComponent.find(".lab-input--invalid")).toHaveLength(1);

    mountedComponent.setProps({ value: "valid@value.com" });
    mountedComponent.update();

    expect(mountedComponent.find(".lab-input--invalid")).toHaveLength(0);
  });

  it("shows help text", async () => {
    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        type="email"
        value="testvalue@g.com"
        helpMessage="help message"
        required
      />
    );

    expect(mountedComponent.find(".lab-input__message--required").text()).toBe(
      "help message"
    );

    mountedComponent.setProps({ value: "" });
    mountedComponent.update();

    expect(mountedComponent.find(".lab-input__message--error").text()).toBe(
      "help message"
    );
  });

  it("shows custom error message when input is invalid", async () => {
    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        type="email"
        value="testvalue@g.com"
        customErrorMsg="error message"
      />
    );

    expect(mountedComponent.find(".lab-input__message--error")).toHaveLength(0);

    mountedComponent.setProps({ value: "value changed" });
    mountedComponent.update();

    expect(mountedComponent.find(".lab-input__message--error").text()).toBe(
      "error message"
    );
  });

  it("changes localValue state when input changes", async () => {
    const mockOnChange = jest.fn();
    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        value="truthy value"
        onChange={mockOnChange}
      />
    );

    const inputElement = mountedComponent.find("input");
    expect(inputElement.render().attr("value")).toBe("truthy value");
    expect(mockOnChange).not.toBeCalled();
    inputElement.simulate("change", {
      target: {
        value: "My new value",
        validity: { valid: true },
        setCustomValidity: jest.fn,
      },
    });
    expect(mockOnChange).toBeCalled();
    expect(inputElement.render().attr("value")).toBe("My new value");
  });

  it("sets input as invalid if it is required and is not filled, even if isValid is passed by props as true", async () => {
    const mountedComponent = mount(
      <AbstractTextInput
        id="testInput"
        label="Test Input"
        isValid
        required
      />
    );

    expect(mountedComponent.find(".lab-input--invalid")).toHaveLength(0);

    mountedComponent
      .find("input")
      .at(0)
      .simulate("change", {
        target: {
          value: "My new value",
          validity: { valid: true },
          setCustomValidity: jest.fn(),
        },
      });

    expect(mountedComponent.find(".lab-input--invalid")).toHaveLength(0);

    mountedComponent
      .find("input")
      .at(0)
      .simulate("change", {
        target: {
          value: "",
          validity: { valid: false },
          setCustomValidity: jest.fn(),
        },
      });

    expect(mountedComponent.find(".lab-input--invalid")).toHaveLength(1);
  });

  it("renders prefix when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractTextInput id="testInput" label="Test Input" prefix="R$" />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <AbstractTextInput id="testInput" label="Test Input" prefix="R$" />
    );

    expect(mountedComponent.find("span.lab-input__prefix")).toHaveLength(2);
  });

  it("renders suffix when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractTextInput id="testInput" label="Test Input" suffix=".com" />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <AbstractTextInput id="testInput" label="Test Input" suffix=".com" />
    );

    expect(mountedComponent.find("div.lab-input__suffix")).toHaveLength(1);
  });

  it("renders icon when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractTextInput id="testInput" label="Test Input" icon="star" />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <AbstractTextInput id="testInput" label="Test Input" icon="star" />
    );

    expect(mountedComponent.find("span.lab-icon")).toHaveLength(1);
  });

  it("renders required icon when it is passed by props", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractTextInput id="testInput" label="Test Input" icon="star" />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <AbstractTextInput id="testInput" label="Test Input" required />
    );

    expect(mountedComponent.find("span.lab-input__required-icon")).toHaveLength(
      1
    );
  });

  it("doesn't trigger onChange if ariaDisabled", async () => {
    const mockOnChange = jest.fn();
    const mountedComponent = mount(
      <AbstractTextInput
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
