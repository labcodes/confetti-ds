import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import IconButton from "./IconButton";
import { describe } from "node:test";

describe("IconButton", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<IconButton icon="Star"></IconButton>)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a wallet icon", async () => {
    const renderedComponent = renderer
      .create(<IconButton icon="Wallet" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(<IconButton icon="Dismiss" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(<IconButton icon="Dismiss" disabled />);
    expect(mountedComponent.find("button").prop("disabled")).toEqual(true);
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowButton = shallow(
      <IconButton icon="Dismiss" onClick={mockOnClick} />
    );
    shallowButton.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it("doesn't call onClick if ariaDisabled", async () => {
    const mockOnClick = jest.fn();
    const mountedComponent = mount(
      <IconButton icon="Dismiss" ariaDisabled onClick={mockOnClick} />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    mountedComponent.find("button").simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(0);
  });
});
