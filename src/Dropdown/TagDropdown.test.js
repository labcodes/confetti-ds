import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import DropdownSectionTitle from "./DropdownSectionTitle";
import TagDropdown from "./TagDropdown";
import TagDropdownItem from "./TagDropdownItem";
import TagDropdownTrigger from "./TagDropdownTrigger";

describe("TagDropdown", () => {
  it("not expected children", () => {
    const onSelectMock = jest.fn();

    const wrapper = mount(
      <TagDropdown
        id="testId"
        color="mineral"
        defaultText="Click me"
        onSelect={onSelectMock}
      >
        <div>Just some child 1</div>
        <div>Just some child 2</div>
        <div>Just some child 3</div>
        <div>Just some child 4</div>
      </TagDropdown>
    );

    const childrenLength = wrapper
      .find(".lab-dropdown__content")
      .children().length;

    expect(childrenLength).toBe(0);
  });

  it("expected children", () => {
    const onSelectMock = jest.fn();

    const wrapper = mount(
      <TagDropdown
        color="mineral"
        defaultText="Click me"
        onSelect={onSelectMock}
        id="idTest"
      >
        <div>Just some child 1</div>
        <DropdownSectionTitle text="First Section" />
        <TagDropdownItem value="1" text="One" />
        <TagDropdownItem value="2" text="Two" />
        <TagDropdownItem value="3" text="Three" />
        <div>Just some child 2</div>
      </TagDropdown>
    );

    const childrenLength = wrapper
      .find(".lab-dropdown__content")
      .children().length;

    expect(childrenLength).toBe(4);
  });

  it("renders with base props", async () => {
    const onSelectMock = jest.fn();

    const renderedComponent = renderer
      .create(
        <TagDropdown id="idTest" defaultText="Click me" onSelect={onSelectMock}>
          <DropdownSectionTitle text="First Section" />
          <TagDropdownItem value="1" text="One" />
          <TagDropdownItem value="2" text="Two" />
          <TagDropdownItem value="3" text="Three" />
        </TagDropdown>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected when passing color as teal", async () => {
    const onSelectMock = jest.fn();

    const renderedComponent = renderer
      .create(
        <TagDropdown
          id="idTest"
          defaultText="Click me"
          color="teal"
          onSelect={onSelectMock}
        >
          <DropdownSectionTitle text="First Section" />
          <TagDropdownItem value="1" text="One" />
          <TagDropdownItem value="2" text="Two" />
          <TagDropdownItem value="3" text="Three" />
        </TagDropdown>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <TagDropdown
        id="idTest"
        defaultText="Click me"
        color="teal"
        onSelect={onSelectMock}
      >
        <DropdownSectionTitle text="First Section" />
        <TagDropdownItem value="1" text="One" />
        <TagDropdownItem value="2" text="Two" />
        <TagDropdownItem value="3" text="Three" />
      </TagDropdown>
    );
    expect(mountedComponent.find(TagDropdownTrigger).prop("color")).toEqual(
      "teal"
    );
    expect(mountedComponent.find(DropdownSectionTitle).prop("color")).toEqual(
      "teal"
    );
  });

  it("calls props.onClose and props.onOpen when clicked or blured", async () => {
    const mockOnClose = jest.fn();
    const mockOnOpen = jest.fn();
    const onSelectMock = jest.fn();

    const shallowDropdown = mount(
      <TagDropdown
        id="testId"
        dropdownType="tag"
        defaultText="Click me"
        onClose={mockOnClose}
        onOpen={mockOnOpen}
        onSelect={onSelectMock}
      >
        <DropdownSectionTitle text="First Section" />
        <TagDropdownItem value="1" text="One" />
        <TagDropdownItem value="2" text="Two" />
        <TagDropdownItem value="3" text="Three" />
      </TagDropdown>
    );

    const trigger = shallowDropdown.find(TagDropdownTrigger).at(0);
    trigger.simulate("click");

    expect(mockOnOpen.mock.calls.length).toBe(1);
    expect(mockOnClose.mock.calls.length).toBe(0);

    trigger.simulate("click");

    expect(mockOnOpen.mock.calls.length).toBe(1);
    expect(mockOnClose.mock.calls.length).toBe(1);
  });
});
