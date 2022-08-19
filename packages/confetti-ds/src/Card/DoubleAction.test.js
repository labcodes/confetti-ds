import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import DoubleAction from "./DoubleAction";
import { CardContext } from "./contexts";

describe("DoubleAction", () => {
  const originalError = console.error;
  afterEach(() => {
    console.error = originalError;
  });

  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(
        <CardContext.Provider value={{ color: "teal" }}>
          <DoubleAction
            actionsProps={[
              {
                text: "Action 1",
                onClick: () => {},
              },
              {
                text: "Action 2",
                onClick: () => {},
              },
            ]}
          />
        </CardContext.Provider>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick1 = jest.fn();
    const mockOnClick2 = jest.fn();
    const mountedLinkAction = mount(
      <CardContext.Provider value={{ color: "teal" }}>
        <DoubleAction
          actionsProps={[
            {
              text: "Action 1",
              onClick: mockOnClick1,
            },
            {
              text: "Action 2",
              onClick: mockOnClick2,
            },
          ]}
        />
      </CardContext.Provider>
    );

    expect(mockOnClick1.mock.calls.length).toEqual(0);
    mountedLinkAction.find("button").first().simulate("click");
    expect(mockOnClick1.mock.calls.length).toEqual(1);

    expect(mockOnClick2.mock.calls.length).toEqual(0);
    mountedLinkAction.find("button").last().simulate("click");
    expect(mockOnClick2.mock.calls.length).toEqual(1);
  });

  it("throws error if actionsProps.length !== 2", async () => {
    console.error = jest.fn(); // silences output
    expect(() =>
      mount(
        <CardContext.Provider
          value={{ color: "teal", skin: "vivid", cardType: "filled" }}
        >
          <DoubleAction
            actionsProps={[
              {
                text: "Action 1",
                onClick: () => {},
              },
            ]}
          />
        </CardContext.Provider>
      )
    ).toThrow(
      "DoubleAction: You need to pass exactly two objects inside the `actionsProps` prop."
    );

    expect(() =>
      mount(
        <CardContext.Provider
          value={{ color: "teal", skin: "vivid", cardType: "filled" }}
        >
          <DoubleAction
            actionsProps={[
              {
                text: "Action 1",
                onClick: () => {},
              },
              {
                text: "Action 2",
                onClick: () => {},
              },
              {
                text: "Action 3",
                onClick: () => {},
              },
            ]}
          />
        </CardContext.Provider>
      )
    ).toThrow(
      "DoubleAction: You need to pass exactly two objects inside the `actionsProps` prop."
    );
  });

  it("renders with text buttons", async () => {
    const renderedComponent = renderer
      .create(
        <CardContext.Provider value={{ color: "teal" }}>
          <DoubleAction
            isText
            actionsProps={[
              {
                text: "Action 1",
                onClick: () => {},
              },
              {
                text: "Action 2",
                onClick: () => {},
              },
            ]}
          />
        </CardContext.Provider>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with isHorizontal", async () => {
    const renderedComponent = renderer
      .create(
        <CardContext.Provider value={{ color: "teal" }}>
          <DoubleAction
            isHorizontal
            actionsProps={[
              {
                text: "Action 1",
                onClick: () => {},
              },
              {
                text: "Action 2",
                onClick: () => {},
              },
            ]}
          />
        </CardContext.Provider>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with size", async () => {
    const renderedComponent = renderer
      .create(
        <CardContext.Provider value={{ color: "teal" }}>
          <DoubleAction
            size="small"
            actionsProps={[
              {
                text: "Action 1",
                onClick: () => {},
              },
              {
                text: "Action 2",
                onClick: () => {},
              },
            ]}
          />
        </CardContext.Provider>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders buttons with light skin", async () => {
    const renderedComponent = renderer
      .create(
        <CardContext.Provider
          value={{ color: "teal", skin: "vivid", cardType: "filled" }}
        >
          <DoubleAction
            actionsProps={[
              {
                text: "Action 1",
                onClick: () => {},
              },
              {
                text: "Action 2",
                onClick: () => {},
              },
            ]}
          />
        </CardContext.Provider>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders buttons with dark skin", async () => {
    let renderedComponent = renderer
      .create(
        <CardContext.Provider
          value={{ color: "purple", skin: "pale", cardType: "filled" }}
        >
          <DoubleAction
            actionsProps={[
              {
                text: "Action 1",
                onClick: () => {},
              },
              {
                text: "Action 2",
                onClick: () => {},
              },
            ]}
          />
        </CardContext.Provider>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    renderedComponent = renderer
      .create(
        <CardContext.Provider
          value={{ color: "mineral", skin: "pale", cardType: "filled" }}
        >
          <DoubleAction
            actionsProps={[
              {
                text: "Action 1",
                onClick: () => {},
              },
              {
                text: "Action 2",
                onClick: () => {},
              },
            ]}
          />
        </CardContext.Provider>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
