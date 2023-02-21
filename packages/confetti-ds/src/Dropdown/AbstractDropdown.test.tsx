import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import _ from "lodash";

import AbstractDropdown from "./AbstractDropdown";
import DropdownSectionTitle from "./DropdownSectionTitle";
import TagDropdownItem from "./TagDropdownItem";
import TagDropdownTrigger from "./TagDropdownTrigger";

describe("AbstractDropdown", () => {
  it("simulates click on trigger", () => {
    const onSelectMock = jest.fn();
    const wrapper = mount(
      <AbstractDropdown
        dropdownType="tag"
        color="mineral"
        defaultText="Click me"
        onSelect={onSelectMock}
        id="test"
      >
        <div>Just some child</div>
      </AbstractDropdown>
    );

    const trigger = wrapper.find(TagDropdownTrigger).at(0);

    expect(
      wrapper
        .find(".lab-dropdown__content")
        .hasClass("lab-dropdown__content--is-open")
    ).toBeFalsy();

    trigger.simulate("click");

    expect(
      wrapper
        .find(".lab-dropdown__content")
        .hasClass("lab-dropdown__content--is-open")
    ).toBeTruthy();

    trigger.simulate("click");

    expect(
      wrapper
        .find(".lab-dropdown__content")
        .hasClass("lab-dropdown__content--is-open")
    ).toBeFalsy();
  });

  it("simulate blur event", () => {
    const onSelectMock = jest.fn();

    const wrapper = mount(
      <AbstractDropdown
        dropdownType="tag"
        color="mineral"
        defaultText="Click me"
        onSelect={onSelectMock}
        id="test"
      >
        <div>Just some child 1</div>
        <DropdownSectionTitle text="First Section" />
        <TagDropdownItem value="1" text="One" />
        <TagDropdownItem value="2" text="Two" />
        <TagDropdownItem value="3" text="Three" />
        <div>Just some child 2</div>
      </AbstractDropdown>
    );

    const trigger = wrapper.find(TagDropdownTrigger).at(0);

    expect(
      wrapper
        .find(".lab-dropdown__content")
        .hasClass("lab-dropdown__content--is-open")
    ).toBeFalsy();

    trigger.simulate("click");

    expect(
      wrapper
        .find(".lab-dropdown__content")
        .hasClass("lab-dropdown__content--is-open")
    ).toBeTruthy();

    trigger.simulate("blur");

    expect(
      wrapper
        .find(".lab-dropdown__content")
        .hasClass("lab-dropdown__content--is-open")
    ).toBeFalsy();
  });

  it("not expected children", () => {
    const onSelectMock = jest.fn();

    const wrapper = mount(
      <AbstractDropdown
        dropdownType="tag"
        color="mineral"
        defaultText="Click me"
        onSelect={onSelectMock}
        id="test"
      >
        <div>Just some child 1</div>
        <div>Just some child 2</div>
        <div>Just some child 3</div>
        <div>Just some child 4</div>
      </AbstractDropdown>
    );

    const childrenLength = wrapper
      .find(".lab-dropdown__content")
      .children().length;

    expect(childrenLength).toBe(0);
  });

  it("expected children", () => {
    const onSelectMock = jest.fn();

    const wrapper = mount(
      <AbstractDropdown
        dropdownType="tag"
        color="mineral"
        defaultText="Click me"
        onSelect={onSelectMock}
        id="test"
      >
        <div>Just some child 1</div>
        <DropdownSectionTitle text="First Section" />
        <TagDropdownItem value="1" text="One" />
        <TagDropdownItem value="2" text="Two" />
        <TagDropdownItem value="3" text="Three" />
        <div>Just some child 2</div>
      </AbstractDropdown>
    );

    const childrenLength = wrapper
      .find(".lab-dropdown__content")
      .children().length;

    expect(childrenLength).toBe(4);
  });

  it("simulate select random option", () => {
    const expectedValues = [
      { value: "1", text: "One" },
      { value: "2", text: "Two" },
      { value: "3", text: "Three" },
    ];

    const onSelectMock = jest.fn();

    const wrapper = mount(
      <AbstractDropdown
        dropdownType="tag"
        color="mineral"
        defaultText="Click me"
        onSelect={onSelectMock}
        id="test"
      >
        <DropdownSectionTitle text="First Section" />

        {expectedValues.map(({ value, text }) => (
          <TagDropdownItem key={value} value={value} text={text} />
        ))}
      </AbstractDropdown>
    );

    const randomIndex = _.random(0, 2);

    const trigger = wrapper.find(TagDropdownTrigger).at(0);
    expect(trigger.text()).toEqual("Click me");

    trigger.simulate("click");

    const selected = wrapper.find(TagDropdownItem).at(randomIndex).at(0);
    expect(onSelectMock.mock.calls.length).toBe(0);
    selected.simulate("click");

    expect(onSelectMock.mock.calls.length).toBe(1);
    expect(trigger.text()).toEqual(expectedValues[randomIndex].text);
  });

  it("simulate select disabled option", () => {
    const expectedValues = [
      { value: "1", text: "One", disabled: true },
      { value: "2", text: "Two" },
      { value: "3", text: "Three" },
    ];

    const onSelectMock = jest.fn();

    const wrapper = mount(
      <AbstractDropdown
        dropdownType="tag"
        color="mineral"
        defaultText="Click me"
        onSelect={onSelectMock}
        id="test"
      >
        <div>Just some child 1</div>
        <DropdownSectionTitle text="First Section" />

        {expectedValues.map(({ value, text, disabled }) => (
          <TagDropdownItem
            key={value}
            value={value}
            text={text}
            disabled={disabled}
          />
        ))}

        <div>Just some child 2</div>
      </AbstractDropdown>
    );

    const trigger = wrapper.find(TagDropdownTrigger).at(0);

    trigger.simulate("click");

    expect(trigger.text()).toEqual("Click me");

    const disabledSelected = wrapper
      .find(TagDropdownItem)
      .find(".lab-tag--disabled")
      .at(0);

    disabledSelected.simulate("click");
    expect(trigger.text()).toEqual("Click me");
  });

  it("renders with base props", async () => {
    const onSelectMock = jest.fn();

    const renderedComponent = renderer
      .create(
        <AbstractDropdown
          dropdownType="tag"
          defaultText="Click me"
          onSelect={onSelectMock}
          id="test"
        >
          <DropdownSectionTitle text="First Section" />
          <TagDropdownItem value="1" text="One" />
          <TagDropdownItem value="2" text="Two" />
          <TagDropdownItem value="3" text="Three" />
        </AbstractDropdown>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing color as teal", async () => {
    const onSelectMock = jest.fn();

    const renderedComponent = renderer
      .create(
        <AbstractDropdown
          dropdownType="tag"
          defaultText="Click me"
          color="teal"
          onSelect={onSelectMock}
          id="test"
        >
          <DropdownSectionTitle text="First Section" />
          <TagDropdownItem value="1" text="One" />
          <TagDropdownItem value="2" text="Two" />
          <TagDropdownItem value="3" text="Three" />
        </AbstractDropdown>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <AbstractDropdown
        dropdownType="tag"
        defaultText="Click me"
        color="teal"
        onSelect={onSelectMock}
        id="test"
      >
        <DropdownSectionTitle text="First Section" />
        <TagDropdownItem value="1" text="One" />
        <TagDropdownItem value="2" text="Two" />
        <TagDropdownItem value="3" text="Three" />
      </AbstractDropdown>
    );
    expect(mountedComponent.find(TagDropdownTrigger).prop("color")).toEqual(
      "teal"
    );
    expect(mountedComponent.find(DropdownSectionTitle).prop("color")).toEqual(
      "teal"
    );
  });

  it("calls props.onClose and props.onOpen when clicks on dropdown trigger", async () => {
    const mockOnClose = jest.fn();
    const mockOnOpen = jest.fn();
    const onSelectMock = jest.fn();
    const id = "test_id";
    const mountDropdown = mount(
      <AbstractDropdown
        dropdownType="tag"
        defaultText="Click me"
        onClose={mockOnClose}
        onOpen={mockOnOpen}
        onSelect={onSelectMock}
        id={id}
      >
        <DropdownSectionTitle text="First Section" />
        <TagDropdownItem value="1" text="One" />
        <TagDropdownItem value="2" text="Two" />
        <TagDropdownItem value="3" text="Three" />
      </AbstractDropdown>
    );

    const trigger = mountDropdown.find(TagDropdownTrigger).at(0);
    expect(mockOnOpen.mock.calls.length).toBe(0);
    expect(mockOnClose.mock.calls.length).toBe(0);

    trigger.simulate("click");
    expect(mockOnOpen.mock.calls.length).toBe(1);
    expect(mockOnClose.mock.calls.length).toBe(0);

    trigger.simulate("click");
    expect(mockOnOpen.mock.calls.length).toBe(1);
    expect(mockOnClose.mock.calls.length).toBe(1);
  });

  it("arrow up and arrow down events", async () => {
    const mockOnClose = jest.fn();
    const mockOnOpen = jest.fn();
    const onSelectMock = jest.fn();
    const id = "test_id";

    // We need this to get the activeElement from document.activeElement due to the update of JSDOM
    // https://github.com/jsdom/jsdom/issues/2586#issuecomment-742593116

    const container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);

    const wrapper = mount(
      <AbstractDropdown
        dropdownType="tag"
        defaultText="Click me"
        onClose={mockOnClose}
        onOpen={mockOnOpen}
        onSelect={onSelectMock}
        id={id}
      >
        <DropdownSectionTitle text="First Section" />
        <TagDropdownItem value="1" text="One" />
        <TagDropdownItem value="2" text="Two" />
        <TagDropdownItem value="3" text="Three" />
      </AbstractDropdown>,
      { attachTo: document.querySelector("#container") }
    );

    const trigger = wrapper.find(TagDropdownItem).at(0);

    expect(
      wrapper
        .find(".lab-dropdown__content")
        .hasClass("lab-dropdown__content--is-open")
    ).toBeFalsy();

    trigger.simulate("keydown", { key: "ArrowDown" });

    expect(
      wrapper
        .find(".lab-dropdown__content")
        .hasClass("lab-dropdown__content--is-open")
    ).toBeTruthy();

    const options = wrapper.find(TagDropdownItem);

    /** After open the dropdown */
    expect(document.activeElement).toEqual(options.first().getDOMNode());

    /** Move through the options with the ArrowDown key. */
    trigger.simulate("keydown", { key: "ArrowDown" });
    /** Waiting for the HTML Element to be active before run the tests */
    expect(document.activeElement).toEqual(options.at(1).getDOMNode());

    trigger.simulate("keydown", { key: "ArrowDown" });
    expect(document.activeElement).toEqual(options.at(2).getDOMNode());

    trigger.simulate("keydown", { key: "ArrowDown" });
    expect(document.activeElement).toEqual(options.at(2).getDOMNode());

    /** Move through the options with the ArrowUp key. */
    trigger.simulate("keydown", { key: "ArrowUp" });
    expect(document.activeElement).toEqual(options.at(1).getDOMNode());

    trigger.simulate("keydown", { key: "ArrowUp" });
    expect(document.activeElement).toEqual(options.at(0).getDOMNode());

    trigger.simulate("keydown", { key: "ArrowUp" });
    expect(document.activeElement).toEqual(options.at(0).getDOMNode());

    /** Move through the options with the PageDown  key. */
    trigger.simulate("keydown", { key: "PageDown" });
    expect(document.activeElement).toEqual(options.last().getDOMNode());

    /** Move through the options with the PageUp  key. */
    trigger.simulate("keydown", { key: "PageUp" });
    expect(document.activeElement).toEqual(options.first().getDOMNode());
  });
});
