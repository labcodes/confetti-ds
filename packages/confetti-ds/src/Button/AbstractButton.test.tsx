import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import AbstractButton from "./AbstractButton";

describe("AbstractButton", () => {
  it("renders with base props for default kind", async () => {
    const renderedComponent = renderer
      .create(<AbstractButton kind="default" label="Test Default Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for outline kind", async () => {
    const renderedComponent = renderer
      .create(<AbstractButton kind="outline" label="Test Outline Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for label kind", async () => {
    const renderedComponent = renderer
      .create(<AbstractButton kind="text" label="Test Text Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("doesn't call onClick if ariaDisabled", async () => {
    const mockOnClick = jest.fn();
    const shallowComponent = shallow(
      <AbstractButton
        ariaDisabled
        onClick={mockOnClick}
        kind="text"
        label="Test Text Button"
      />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    shallowComponent.find("button").simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(0);
  });
  it("renders as expected when tabIndex is passed", async () => {
    const renderedComponent = renderer
      .create(
        <AbstractButton
          kind="default"
          label="Test tabIndex"
          tabIndex={1}
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
