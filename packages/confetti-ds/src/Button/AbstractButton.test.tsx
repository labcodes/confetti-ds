import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import AbstractButton from "./AbstractButton";

describe("AbstractButton", () => {
  it("renders with base props for default variant", async () => {
    const renderedComponent = renderer
      .create(<AbstractButton variant="default" text="Test Default Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for outline variant", async () => {
    const renderedComponent = renderer
      .create(<AbstractButton variant="outline" text="Test Outline Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with base props for text variant", async () => {
    const renderedComponent = renderer
      .create(<AbstractButton variant="text" text="Test Text Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("doesn't call onClick if ariaDisabled", async () => {
    const mockOnClick = jest.fn();
    const shallowComponent = shallow(
      <AbstractButton
        ariaDisabled
        onClick={mockOnClick}
        variant="text"
        text="Test Text Button"
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
          variant="default"
          text="Test tabIndex"
          // eslint-disable-next-line jsx-a11y/tabindex-no-positive
          tabIndex="1"
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
