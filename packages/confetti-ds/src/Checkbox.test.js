/* eslint-disable no-console */
import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import Checkbox from "./Checkbox";
import Icon from "./Icon";

describe("Checkbox", () => {
  const originalWarn = console.warn;
  afterEach(() => {
    console.warn = originalWarn;
  });

  it("renders with base props", async () => {
    const mockedIndeterminate = jest.fn();
    const renderedComponent = renderer
      .create(
        <Checkbox
          name="test-checkbox-group"
          id="test-checkbox"
          label="test checkbox"
        />,
        {
          createNodeMock: (element) => {
            if (element.type === "input") {
              return {
                indeterminate: mockedIndeterminate,
              };
            }
            return {};
          },
        }
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("raises console.warn when passing checked and defaultChecked at the same time", async () => {
    console.warn = jest.fn();

    mount(
      <Checkbox
        name="test-checkbox-group"
        id="test-checkbox"
        label="test checkbox"
        checked
        defaultChecked
      />
    );

    const consoleText =
      "You are setting both checked and defaultChecked for input test-checkbox at the same time. We always initialize the checkbox with defaultChecked. Make sure this is the behaviour you want.";

    expect(console.warn).toBeCalledWith(consoleText);
  });

  it("renders as expected when passing disabled as true", async () => {
    const mockedIndeterminate = jest.fn();
    const renderedComponent = renderer
      .create(
        <Checkbox
          name="test-checkbox"
          id="test-checkbox"
          label="test checkbox"
          disabled
        />,
        {
          createNodeMock: (element) => {
            if (element.type === "input") {
              return {
                indeterminate: mockedIndeterminate,
              };
            }
            return {};
          },
        }
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing indeterminate as true", async () => {
    const mockedIndeterminate = jest.fn();
    const renderedComponent = renderer
      .create(
        <Checkbox
          name="test-checkbox"
          id="test-checkbox"
          label="test checkbox"
          indeterminate
          checked
        />,
        {
          createNodeMock: (element) => {
            if (element.type === "input") {
              return {
                indeterminate: mockedIndeterminate,
              };
            }
            return {};
          },
        }
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a different className", async () => {
    const mockedIndeterminate = jest.fn();
    const renderedComponent = renderer
      .create(
        <Checkbox
          name="test-checkbox"
          id="test-checkbox"
          label="test checkbox"
          className="lab-checkbox--purple"
          checked
        />,
        {
          createNodeMock: (element) => {
            if (element.type === "input") {
              return {
                indeterminate: mockedIndeterminate,
              };
            }
            return {};
          },
        }
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing indeterminate", async () => {
    const mockedIndeterminate = jest.fn();
    const renderedComponent = renderer
      .create(
        <Checkbox
          name="test-checkbox"
          id="test-checkbox"
          label="test checkbox"
          className="lab-checkbox--purple"
          indeterminate
        />,
        {
          createNodeMock: (element) => {
            if (element.type === "input") {
              return {
                indeterminate: mockedIndeterminate,
              };
            }
            return {};
          },
        }
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("initializes checked if defaultChecked is passed", async () => {
    const mountedComponent = mount(
      <Checkbox
        name="test-checkbox"
        id="test-checkbox"
        label="test checkbox"
        defaultChecked
      />
    );

    expect(mountedComponent.find("input").find({ checked: true })).toHaveLength(
      1
    );
    expect(
      mountedComponent
        .find(Icon)
        .find("span")
        .find(".lab-icon")
        .find(".lab-icon--check")
        .find(".lab-icon--white")
        .find(".lab-icon--small")
    ).toHaveLength(1);
  });

  it("initializes unchecked if defaultChecked is passed as false", async () => {
    const mountedComponent = mount(
      <Checkbox
        name="test-checkbox"
        id="test-checkbox"
        label="test checkbox"
        defaultChecked={false}
      />
    );

    expect(
      mountedComponent.find("input").find({ checked: false })
    ).toHaveLength(1);
    expect(
      mountedComponent.find(
        Icon,
        ".lab-icon",
        ".lab-icon--check",
        ".lab-icon--white",
        ".lab-icon--small"
      )
    ).toHaveLength(0);
  });

  it("initializes unchecked if defaultChecked is not passed", async () => {
    const mountedComponent = mount(
      <Checkbox name="test-checkbox" id="test-checkbox" label="test checkbox" />
    );

    expect(
      mountedComponent.find("input").find({ checked: false })
    ).toHaveLength(1);
    expect(
      mountedComponent.find(
        Icon,
        ".lab-icon",
        ".lab-icon--check",
        ".lab-icon--white",
        ".lab-icon--small"
      )
    ).toHaveLength(0);
  });

  it("sets input as indeterminate", async () => {
    const mountedComponent = mount(
      <Checkbox name="test-checkbox" id="test-checkbox" label="test checkbox" />
    );

    expect(mountedComponent.find("input[indeterminate]").length).toBeFalsy();

    mountedComponent.setProps({ indeterminate: true });
    mountedComponent.update();

    expect(mountedComponent.find("input[indeterminate]")).toBeTruthy();

    mountedComponent.setProps({ indeterminate: undefined });
    mountedComponent.update();

    expect(mountedComponent.find("input[indeterminate]").length).toBeFalsy();
  });

  it("changes state when input changes", async () => {
    const mountedComponent = mount(
      <Checkbox name="test-checkbox" id="test-checkbox" label="test checkbox" />
    );

    expect(
      mountedComponent.find("input").find({ checked: false })
    ).toHaveLength(1);
    expect(
      mountedComponent.find(
        Icon,
        ".lab-icon",
        ".lab-icon--check",
        ".lab-icon--white",
        ".lab-icon--small"
      )
    ).toHaveLength(0);
    mountedComponent.find("input").at(0).simulate("change");
    expect(mountedComponent.find("input").find({ checked: true })).toHaveLength(
      1
    );
    expect(
      mountedComponent
        .find(Icon)
        .find("span")
        .find(".lab-icon")
        .find(".lab-icon--check")
        .find(".lab-icon--white")
        .find(".lab-icon--small")
    ).toHaveLength(1);
  });

  it("calls props.onChange passing event when input changes", async () => {
    const mockOnChange = jest.fn();
    const mountedComponent = mount(
      <Checkbox
        name="test-checkbox"
        id="test-checkbox"
        label="test checkbox"
        onChange={mockOnChange}
      />
    );

    expect(
      mountedComponent.find("input").find({ checked: false })
    ).toHaveLength(1);
    expect(
      mountedComponent.find(
        Icon,
        ".lab-icon",
        ".lab-icon--check",
        ".lab-icon--white",
        ".lab-icon--small"
      )
    ).toHaveLength(0);
    expect(mockOnChange).not.toBeCalled();

    mountedComponent.find("input").at(0).simulate("change", { test: "event" });

    expect(mountedComponent.find("input").find({ checked: true })).toHaveLength(
      1
    );
    expect(
      mountedComponent
        .find(Icon)
        .find("span")
        .find(".lab-icon")
        .find(".lab-icon--check")
        .find(".lab-icon--white")
        .find(".lab-icon--small")
    ).toHaveLength(1);
    expect(mockOnChange).toBeCalled();
  });

  it("doesn't trigger onChange if ariaDisabled", async () => {
    const mockOnChange = jest.fn();
    const mountedComponent = mount(
      <Checkbox
        ariaDisabled
        name="test-checkbox"
        id="test-checkbox"
        label="test checkbox"
        onChange={mockOnChange}
      />
    );

    expect(
      mountedComponent.find("input").find({ checked: false })
    ).toHaveLength(1);
    expect(mockOnChange).not.toBeCalled();

    mountedComponent.find("input").at(0).simulate("change", { test: "event" });

    expect(
      mountedComponent.find("input").find({ checked: false })
    ).toHaveLength(1);
    expect(mockOnChange).not.toBeCalled();
  });
});
