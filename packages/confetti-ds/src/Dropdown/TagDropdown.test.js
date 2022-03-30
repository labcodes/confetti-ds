import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import { DropdownTag, TagItem } from "../Tags";
import SectionTitle from "./SectionTitle";
import TagDropdown from "./TagDropdown";

describe("TagDropdown", () => {
  it("not expected children", () => {
    const onSelectMock = jest.fn();

    const wrapper = mount(
      <TagDropdown
        id="testId"
        color="mineral"
        text="Click me"
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
        text="Click me"
        onSelect={onSelectMock}
        id="idTest"
      >
        <div>Just some child 1</div>
        <SectionTitle text="First Section" />
        <TagItem value="1" text="One" />
        <TagItem value="2" text="Two" />
        <TagItem value="3" text="Three" />
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
        <TagDropdown id="idTest" text="Click me" onSelect={onSelectMock}>
          <SectionTitle text="First Section" />
          <TagItem value="1" text="One" />
          <TagItem value="2" text="Two" />
          <TagItem value="3" text="Three" />
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
          text="Click me"
          color="teal"
          onSelect={onSelectMock}
        >
          <SectionTitle text="First Section" />
          <TagItem value="1" text="One" />
          <TagItem value="2" text="Two" />
          <TagItem value="3" text="Three" />
        </TagDropdown>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const mountedComponent = mount(
      <TagDropdown
        id="idTest"
        text="Click me"
        color="teal"
        onSelect={onSelectMock}
      >
        <SectionTitle text="First Section" />
        <TagItem value="1" text="One" />
        <TagItem value="2" text="Two" />
        <TagItem value="3" text="Three" />
      </TagDropdown>
    );
    expect(mountedComponent.find(DropdownTag).prop("color")).toEqual("teal");
    expect(mountedComponent.find(SectionTitle).prop("color")).toEqual("teal");
  });

  it("calls props.onClose and props.onOpen when clicked or blured", async () => {
    const mockOnClose = jest.fn();
    const mockOnOpen = jest.fn();
    const onSelectMock = jest.fn();

    const shallowDropdown = mount(
      <TagDropdown
        id="testId"
        dropdownType="tag"
        text="Click me"
        onClose={mockOnClose}
        onOpen={mockOnOpen}
        onSelect={onSelectMock}
      >
        <SectionTitle text="First Section" />
        <TagItem value="1" text="One" />
        <TagItem value="2" text="Two" />
        <TagItem value="3" text="Three" />
      </TagDropdown>
    );

    const trigger = shallowDropdown.find(
      ".lab-dropdown__invisible-button--trigger"
    );
    trigger.simulate("click");

    expect(mockOnOpen.mock.calls.length).toBe(1);
    expect(mockOnClose.mock.calls.length).toBe(0);

    trigger.simulate("click");

    expect(mockOnOpen.mock.calls.length).toBe(1);
    expect(mockOnClose.mock.calls.length).toBe(1);
  });
});
