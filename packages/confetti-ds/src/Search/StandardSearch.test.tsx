/* eslint-disable no-console */
import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import StandardSearch from "./StandardSearch";

describe("StandardSearch", () => {
  const originalWarn = console.warn;
  afterEach(() => {
    console.warn = originalWarn;
  });

  it("renders with base props", async () => {
    const renderedComponent = renderer.create(<StandardSearch id="test-standard-search" />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing disabled as true", async () => {
    const renderedComponent = mount(<StandardSearch id="test-standard-search" disabled />);
    expect(renderedComponent.find("input[disabled]")).toHaveLength(1);
  });

  it("raises console.warn and sets state with value when passing value and defaultValue by props at the same time", async () => {
    console.warn = jest.fn();

    const component = mount(
      <StandardSearch id="test-standard-search" defaultValue="default value" value="test value" />
    );

    expect(console.warn).toBeCalled();
    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("test value");
  });

  it("sets state with value if it is passed by props", async () => {
    const component = mount(<StandardSearch id="test-standard-search" value="test value" />);

    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("test value");
  });

  it("sets state with defaultValue if it is passed by props and value is not passed by props", async () => {
    const component = mount(<StandardSearch id="test-standard-search" defaultValue="default value" />);
    const inputElement = component.find("input");
    expect(inputElement.render().attr("value")).toBe("default value");
  });

  it("clears the input and calls onClear prop when the remove icon is clicked", async () => {
    const onClearFn = jest.fn();
    const component = mount(
      <StandardSearch id="test-standard-search" defaultValue="default" onClear={onClearFn} />
    );

    expect(component.find("input").render().attr("value")).toBe("default");
    component.find(".lab-search__remove-icon").at(0).simulate("click");
    expect(component.find("input").render().attr("value")).toBe("");
    expect(onClearFn).toBeCalled();
  });

  it("calls onSearch prop when the magnifying-glass icon is clicked", async () => {
    const onSearchFn = jest.fn();
    const component = mount(
      <StandardSearch id="test-standard-search" defaultValue="default" onSearch={onSearchFn} />
    );
    component.find(".lab-standard-search__button").at(0).simulate("click");
    expect(onSearchFn).toBeCalled();
  });

  it("calls onSearch prop when the enter key is pressed down", async () => {
    const onSearchStandard = jest.fn();
    const componentStandard = mount(
      <StandardSearch id="test-standard-search" defaultValue="default" onSearch={onSearchStandard} />
    );
    componentStandard.find("input").at(0).simulate("keydown", { keyCode: 13 });
    expect(onSearchStandard).toBeCalled();
  });

  it("doesn't clear the input and calls onClear prop when ariaDisabled", async () => {
    const onClearFn = jest.fn();
    const component = mount(
      <StandardSearch id="test-standard-search" ariaDisabled defaultValue="default" onClear={onClearFn} />
    );

    expect(component.find("input").render().attr("value")).toBe("default");
    component.find(".lab-search__remove-icon").at(0).simulate("click");
    expect(component.find("input").render().attr("value")).toBe("default");
    expect(onClearFn).not.toBeCalled();
  });

  it("doesn't call onSearch prop when ariaDisabled and clicked", async () => {
    const onSearchFn = jest.fn();
    const component = mount(
      <StandardSearch id="test-standard-search"
        ariaDisabled
        defaultValue="default"
        onSearch={onSearchFn}
      />
    );
    component.find(".lab-standard-search__button").at(0).simulate("click");
    expect(onSearchFn).not.toBeCalled();
  });

  it("doesn't call onSearch prop when ariaDisabled and the enter key is pressed down", async () => {
    const onSearchStandard = jest.fn();
    const componentStandard = mount(
      <StandardSearch id="test-standard-search"
        ariaDisabled
        defaultValue="default"
        onSearch={onSearchStandard}
      />
    );
    componentStandard.find("input").at(0).simulate("keydown", { keyCode: 13 });
    expect(onSearchStandard).not.toBeCalled();
  });
});
