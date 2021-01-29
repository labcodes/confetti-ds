import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  const originalWarn = console.warn;
  afterEach(() => {
    console.warn = originalWarn;
  });

  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(
        <Tooltip id="testTooltip" text="Test Tooltip">
          <button type="button">Display short text</button>
        </Tooltip>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("raises console.warn if text is longer than 180 chars", async () => {
    console.warn = jest.fn();

    shallow(
      <Tooltip
        id="testLongText"
        text="Lorem ipsum dolor sit amet, has integre virtute consequat at. Sit quodsi gloriatur efficiantur in, quas inermis menandri ex vix. Sit quodsi gloriatur efficiantur in, quas inermis. Sit quodsi gloriatur."
      >
        <button type="button">Display long text</button>
      </Tooltip>
    );

    expect(console.warn).toBeCalled();
  });

  it("renders with placement top by default", async () => {
    const component = shallow(
      <Tooltip id="testDefaultPlacement" text="This uses theme color">
        <button type="button">Display with theme color</button>
      </Tooltip>
    );

    expect(component.find(".lab-tooltip--top")).toHaveLength(1);
  });
});
