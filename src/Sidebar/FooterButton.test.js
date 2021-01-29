import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import FooterButton from "./Item";

describe("FooterButton", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<FooterButton label="Test button" onClick={() => {}} />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with icon", async () => {
    const renderedComponent = renderer
      .create(
        <FooterButton label="Test button" onClick={() => {}} icon="star" />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowButton = shallow(
      <FooterButton label="Test button" onClick={mockOnClick} />
    );
    shallowButton.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
