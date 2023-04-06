import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import Button from "./Button";

describe("Button", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<Button label="Test Default Button" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = renderer
      .create(<Button label="Test Default Disabled Button 1" disabled />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <Button label="Test Default Disabled Button 2" disabled />
    );
    expect(mountedComponent.find("button").prop("disabled")).toEqual(true);
  });

  it("renders as expected when passing a warning skin", async () => {
    const renderedComponent = renderer
      .create(<Button label="Test Default Warning Button" theme="warning" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a small size", async () => {
    const renderedComponent = renderer
      .create(<Button label="Test Default Small Button" size="small" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing a wallet icon", async () => {
    const renderedComponent = renderer
      .create(<Button label="Test Default Wallet Button" icon="wallet" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const shallowButton = shallow(
      <Button label="Test Click on Default Button" onClick={mockOnClick} />
    );
    shallowButton.simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it("doesn't call onClick if ariaDisabled", async () => {
    const mockOnClick = jest.fn();
    const mountedComponent = mount(
      <Button ariaDisabled onClick={mockOnClick} label="Test Default Button" />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    mountedComponent.find("button").simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(0);
  });

  it("renders as expected if full width", async () => {
    const renderedComponent = renderer
      .create(<Button label="Test Default fullWidth Button" fullWidth />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with full width", async () => {
    const mountedComponent = mount(
      <Button label="Test fullWidth Button" fullWidth />
    );
    expect(mountedComponent.find(".lab-btn--block")).toHaveLength(1);
  });

  it("renders as expected when tabIndex is passed", async () => {
    const renderedComponent = renderer
      .create(
        <Button label="Test tabIndex" fullWidth tabIndex={1} />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
