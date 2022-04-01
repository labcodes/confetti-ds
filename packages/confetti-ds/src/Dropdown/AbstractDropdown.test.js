import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import _ from "lodash";

import AbstractDropdown from "./AbstractDropdown";
import { DropdownTag } from "../Tags";
import DropdownSectionTitle from "./DropdownSectionTitle";
import DropdownOption from "./DropdownOption";
import DropdownTrigger from "./DropdownTrigger";
import TagItem from "./TagItem";

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

    expect(wrapper.instance().triggerRef).toBeTruthy();
    const trigger = wrapper
      .find(DropdownTrigger)
      .find(".lab-dropdown__invisible-button--trigger")
      .at(0);

    expect(wrapper.state().isOpen).toBe(false);
    trigger.simulate("click");
    expect(wrapper.state().isOpen).toBe(true);
    trigger.simulate("click");
    expect(wrapper.state().isOpen).toBe(false);
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

    expect(wrapper.instance().triggerRef).toBeTruthy();
    const randomIndex = _.random(0, 2);

    const trigger = wrapper
      .find(DropdownTrigger)
      .find(".lab-dropdown__invisible-button--trigger")
      .at(0);
    trigger.simulate("click");
    expect(wrapper.state().isOpen).toBe(true);

    const selected = wrapper
      .find(DropdownOption)
      .at(randomIndex)
      .find(".lab-dropdown__invisible-button--option")
      .at(0);
    expect(wrapper.state().selected).toStrictEqual({ ref: null, index: null });
    selected.simulate("click");

    expect(wrapper.state().displayText).toBe(expectedValues[randomIndex].text);

    expect(wrapper.state().isOpen).toBe(false);
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

    // expect(wrapper.state().selected).toStrictEqual({ ref: null, index: null });

    // disabledOption.simulate("click");

    // // expect(wrapper.state().selected).toStrictEqual({
    // //   ref: null,
    // //   index: null,
    // // });

    // const selectedOption = wrapper.find("button").at(1);

    // selectedOption.simulate("click");
    // expect(wrapper.state().selected.index).toStrictEqual(1);

    // -----------------
    expect(wrapper.instance().triggerRef).toBeTruthy();
    const randomIndex = _.random(1, 2);

    const trigger = wrapper
      .find(DropdownTrigger)
      .find(".lab-dropdown__invisible-button--trigger")
      .at(0);
    trigger.simulate("click");
    expect(wrapper.state().isOpen).toBe(true);
    expect(wrapper.state().selected).toStrictEqual({ ref: null, index: null });

    const disabledSelected = wrapper
      .find(DropdownOption)
      .find(".lab-dropdown__invisible-button--disabled")
      .at(0);
    disabledSelected.simulate("click");
    expect(wrapper.state().isOpen).toBe(true);
    expect(wrapper.state().selected).toStrictEqual({ ref: null, index: null });

    const selected = wrapper
      .find(DropdownOption)
      .at(randomIndex)
      .find(".lab-dropdown__invisible-button--option")
      .at(0);
    selected.simulate("click");
    expect(wrapper.state().displayText).toBe(expectedValues[randomIndex].text);
    expect(wrapper.state().isOpen).toBe(false);
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

    // wrapper.parent().text();
    expect(wrapper.state().isOpen).toBe(false);

    wrapper.instance().handleTriggerClick();

    expect(wrapper.state().isOpen).toBe(true);

    wrapper.find(".lab-dropdown").simulate("blur");

    expect(wrapper.state().isOpen).toBe(false);
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
    expect(mountedComponent.find(DropdownTag).prop("color")).toEqual("teal");
    expect(mountedComponent.find(DropdownSectionTitle).prop("color")).toEqual(
      "teal"
    );
  });

  it("calls props.onClose and props.onOpen when clicked or blured", async () => {
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
      </AbstractDropdown>
    );

    const trigger = wrapper
      .find(DropdownTrigger)
      .find(".lab-dropdown__invisible-button--trigger")
      .at(0);

    trigger.simulate("keyup", { key: "ArrowDown" });
    expect(wrapper.state().isOpen).toBe(true);
    expect(wrapper.state().lastFocusedOption.index).toBe(0);

    trigger.simulate("keyup", { key: "ArrowDown" });
    expect(wrapper.state().lastFocusedOption.index).toBe(1);

    trigger.simulate("keyup", { key: "ArrowDown" });
    expect(wrapper.state().lastFocusedOption.index).toBe(2);

    trigger.simulate("keyup", { key: "ArrowDown" });
    expect(wrapper.state().lastFocusedOption.index).toBe(2);

    trigger.simulate("keyup", { key: "ArrowUp" });
    expect(wrapper.state().lastFocusedOption.index).toBe(1);

    trigger.simulate("keyup", { key: "ArrowUp" });
    expect(wrapper.state().lastFocusedOption.index).toBe(0);

    trigger.simulate("keyup", { key: "ArrowUp" });
    expect(wrapper.state().lastFocusedOption.index).toBe(0);

    trigger.simulate("keyup", { key: "PageDown" });
    expect(wrapper.state().lastFocusedOption.index).toBe(2);

    trigger.simulate("keyup", { key: "PageUp" });
    expect(wrapper.state().lastFocusedOption.index).toBe(0);
  });
});
