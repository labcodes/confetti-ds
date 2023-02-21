import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import TagDropdownItem from "./TagDropdownItem";

describe("TagDropdownItem", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(
        <TagDropdownItem text="Test render TagDropdownItem" value="option1" />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected with outline as true", async () => {
    const renderedComponent = renderer
      .create(
        <TagDropdownItem
          text="Test render outline TagDropdownItem"
          isOutline
          value="option1"
        />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TagDropdownItem
        text="Test outline TagDropdownItem"
        isOutline
        value="option1"
      />
    ).html();
    expect(wrapper).toContain("lab-tag--outline");
  });

  it("renders as expected with a vivid skin", async () => {
    const renderedComponent = renderer
      .create(
        <TagDropdownItem
          text="Test render vivid TagDropdownItem"
          skin="vivid"
          value="option1"
        />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TagDropdownItem
        text="Test vivid TagDropdownItem"
        skin="vivid"
        value="option1"
      />
    ).html();
    expect(wrapper).toContain("lab-tag--vivid");
    expect(wrapper).toContain('id="option1"');
  });

  it("renders as expected with a purple color", async () => {
    const renderedComponent = renderer
      .create(
        <TagDropdownItem
          text="Test render purple TagDropdownItem"
          color="purple"
          value="option1"
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TagDropdownItem
        text="Test vivid TagDropdownItem"
        skin="vivid"
        value="option1"
      />
    ).html();
    expect(wrapper).toContain("lab-tag--vivid");
    expect(wrapper).toContain('id="option1"');
  });

  it("renders as expected with a magnifying-glass icon", async () => {
    const renderedComponent = renderer
      .create(
        <TagDropdownItem
          text="Test render TagDropdownItem with magnifying-glass icon"
          icon="magnifying-glass"
          value="option1"
        />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TagDropdownItem
        text="Test TagDropdownItem with magnifying-glass icon"
        icon="magnifying-glass"
        value="option1"
      />
    ).html();
    expect(wrapper).toContain("lab-icon--magnifying-glass");
    expect(wrapper).toContain('id="option1"');
  });

  it("renders as expected with a thumb", async () => {
    const renderedComponent = renderer
      .create(
        <TagDropdownItem
          text="Test render TagDropdownItem with thumb"
          thumbSrc="fake-thumb"
          thumbAlt="fake-thumb-alt"
          value="option1"
        />
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TagDropdownItem
        text="Test TagDropdownItem with thumb"
        thumbSrc="fake-thumb"
        thumbAlt="fake-thumb-alt"
        value="option1"
      />
    ).html();
    expect(wrapper).toContain(`src="fake-thumb"`);
    expect(wrapper).toContain('id="option1"');
  });

  it("does not render if passing both `thumb` and `icon` props", async () => {
    // mocking console.error to make traceback cleaner
    console.error = jest.fn();
    expect(() => {
      mount(
        <TagDropdownItem
          text="Test to not render TagDropdownItem with with thumb and icon"
          icon="magnifying-glass"
          thumbSrc="fake-thumb"
          thumbAlt="fake-thumb-alt"
          value="option1"
        />
      );
    }).toThrow(
      "`TagDropdownItem` can't be initialized with both `thumb` and `icon` props."
    );
  });
});
