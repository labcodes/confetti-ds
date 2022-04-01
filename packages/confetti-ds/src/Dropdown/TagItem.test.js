import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import TagItem from "./TagItem";

describe("TagItem", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<TagItem text="Test render TagItem" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders as expected with outline as true", async () => {
    const renderedComponent = renderer
      .create(<TagItem text="Test render outline TagItem" isOutline />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TagItem text="Test outline TagItem" isOutline />
    ).html();
    expect(wrapper).toContain("lab-tag--outline");
  });

  it("renders as expected with a vivid skin", async () => {
    const renderedComponent = renderer
      .create(<TagItem text="Test render vivid TagItem" skin="vivid" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TagItem text="Test vivid TagItem" skin="vivid" />
    ).html();
    expect(wrapper).toContain("lab-tag--vivid");
  });

  it("renders as expected with a purple color", async () => {
    const renderedComponent = renderer
      .create(<TagItem text="Test render purple TagItem" color="purple" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TagItem text="Test vivid TagItem" skin="vivid" />
    ).html();
    expect(wrapper).toContain("lab-tag--vivid");
  });

  it("renders as expected with a magnifying-glass icon", async () => {
    const renderedComponent = renderer
      .create(
        <TagItem
          text="Test render TagItem with magnifying-glass icon"
          icon="magnifying-glass"
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TagItem
        text="Test TagItem with magnifying-glass icon"
        icon="magnifying-glass"
      />
    ).html();
    expect(wrapper).toContain("lab-icon--magnifying-glass");
  });

  it("renders as expected with a thumb", async () => {
    const renderedComponent = renderer
      .create(
        <TagItem text="Test render TagItem with thumb" thumbSrc="fake-thumb" />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();

    const wrapper = shallow(
      <TagItem text="Test TagItem with thumb" thumbSrc="fake-thumb" />
    ).html();
    expect(wrapper).toContain(`src="fake-thumb"`);
  });

  it("does not render if passing both `thumb` and `icon` props", async () => {
    expect(() => {
      shallow(
        <TagItem
          text="Test to not render TagItem with with thumb and icon"
          icon="magnifying-glass"
          thumbSrc="fake-thumb"
        />
      );
    }).toThrow(
      "`TagItem` can't be initialized with both `thumb` and `icon` props."
    );
  });
});
