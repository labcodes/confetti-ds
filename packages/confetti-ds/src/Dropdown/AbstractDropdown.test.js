import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import _ from "lodash";

import AbstractDropdown from "./AbstractDropdown";
import DropdownSectionTitle from "./DropdownSectionTitle";
import DropdownOption from "./DropdownOption";
import DropdownTrigger from "./DropdownTrigger";
import TagItem from "./TagItem";
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

    const trigger = wrapper
      .find(DropdownTrigger)
      .find(".lab-dropdown__invisible-button--trigger")
      .at(0);

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
        <TagItem value="1" text="One" />
        <TagItem value="2" text="Two" />
        <TagItem value="3" text="Three" />
        <div>Just some child 2</div>
      </AbstractDropdown>
    );

    const trigger = wrapper
      .find(DropdownTrigger)
      .find(".lab-dropdown__invisible-button--trigger")
      .at(0);

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
        <TagItem value="1" text="One" />
        <TagItem value="2" text="Two" />
        <TagItem value="3" text="Three" />
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
        <div>Just some child 1</div>
        <DropdownSectionTitle text="First Section" />

        {expectedValues.map(({ value, text }) => (
          <TagItem key={value} value={value} text={text} />
        ))}

        <div>Just some child 2</div>
      </AbstractDropdown>
    );

    const randomIndex = _.random(0, 2);

    const trigger = wrapper
      .find(DropdownTrigger)
      .find(".lab-dropdown__invisible-button--trigger")
      .at(0);

    expect(trigger.text()).toEqual("Click me");

    trigger.simulate("click");

    const selected = wrapper
      .find(DropdownOption)
      .at(randomIndex)
      .find(".lab-dropdown__invisible-button--option")
      .at(0);

    selected.simulate("click");

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
          <TagItem key={value} value={value} text={text} disabled={disabled} />
        ))}

        <div>Just some child 2</div>
      </AbstractDropdown>
    );

    const trigger = wrapper
      .find(DropdownTrigger)
      .find(".lab-dropdown__invisible-button--trigger")
      .at(0);

    trigger.simulate("click");

    const disabledSelected = wrapper
      .find(DropdownOption)
      .find(".lab-dropdown__invisible-button--disabled")
      .at(0);

    expect(trigger.text()).toEqual("Click me");
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
          <TagItem value="1" text="One" />
          <TagItem value="2" text="Two" />
          <TagItem value="3" text="Three" />
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
          <TagItem value="1" text="One" />
          <TagItem value="2" text="Two" />
          <TagItem value="3" text="Three" />
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
        <TagItem value="1" text="One" />
        <TagItem value="2" text="Two" />
        <TagItem value="3" text="Three" />
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
        <TagItem value="1" text="One" />
        <TagItem value="2" text="Two" />
        <TagItem value="3" text="Three" />
      </AbstractDropdown>
    );
    expect(mockOnOpen.mock.calls.length).toBe(0);
    expect(mockOnClose.mock.calls.length).toBe(0);
    mountDropdown.find(`#menu-button--menu--${id}`).simulate("click");
    expect(mockOnOpen.mock.calls.length).toBe(1);
    expect(mockOnClose.mock.calls.length).toBe(0);
    mountDropdown.find(`#menu-button--menu--${id}`).simulate("click");
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
        <TagItem value="1" text="One" />
        <TagItem value="2" text="Two" />
        <TagItem value="3" text="Three" />
      </AbstractDropdown>,
      { attachTo: document.querySelector("#container") }
    );

    const trigger = wrapper
      .find(DropdownTrigger)
      .find(".lab-dropdown__invisible-button--trigger")
      .at(0);

    expect(
      wrapper
        .find(".lab-dropdown__content")
        .hasClass("lab-dropdown__content--is-open")
    ).toBeFalsy();

    trigger.simulate("keyup", { key: "ArrowDown" });

    expect(
      wrapper
        .find(".lab-dropdown__content")
        .hasClass("lab-dropdown__content--is-open")
    ).toBeTruthy();

    const options = wrapper.find(".lab-dropdown__invisible-button--option");

    /** After open the dropdown */
    expect(document.activeElement).toEqual(options.first().getDOMNode());

    /** Move through the options with the ArrowDown key. */
    trigger.simulate("keyup", { key: "ArrowDown" });
    expect(document.activeElement).toEqual(options.at(1).getDOMNode());

    trigger.simulate("keyup", { key: "ArrowDown" });
    expect(document.activeElement).toEqual(options.at(2).getDOMNode());

    trigger.simulate("keyup", { key: "ArrowDown" });
    expect(document.activeElement).toEqual(options.at(2).getDOMNode());

    /** Move through the options with the ArrowUp key. */
    trigger.simulate("keyup", { key: "ArrowUp" });
    expect(document.activeElement).toEqual(options.at(1).getDOMNode());

    trigger.simulate("keyup", { key: "ArrowUp" });
    expect(document.activeElement).toEqual(options.at(0).getDOMNode());

    trigger.simulate("keyup", { key: "ArrowUp" });
    expect(document.activeElement).toEqual(options.at(0).getDOMNode());

    /** Move through the options with the PageDown  key. */
    trigger.simulate("keyup", { key: "PageDown" });
    expect(document.activeElement).toEqual(options.last().getDOMNode());

    /** Move through the options with the PageUp  key. */
    trigger.simulate("keyup", { key: "PageUp" });
    expect(document.activeElement).toEqual(options.first().getDOMNode());
  });
});
