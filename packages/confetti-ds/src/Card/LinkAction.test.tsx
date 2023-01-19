import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import LinkAction from "./LinkAction";

describe("LinkAction", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<LinkAction text="test" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowLinkAction = shallow(
      <LinkAction text="test" onClick={mockOnClick} />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    shallowLinkAction.find("a").simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it("renders with href", async () => {
    const renderedComponent = renderer
      .create(<LinkAction text="test" href="test" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with size", async () => {
    const renderedComponent = renderer
      .create(<LinkAction text="test" size="small" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with openNewTab", async () => {
    const renderedComponent = renderer
      .create(<LinkAction text="test" openNewTab />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
