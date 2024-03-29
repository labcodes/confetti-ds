import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import Banner from "./Banner";

describe("Banner", () => {
  it("renders with base props", () => {
    const renderedComponent = renderer
      .create(<Banner text="Info Banner" type="info" icon="CalendarLtr" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with button", () => {
    const renderedComponent = renderer
      .create(
        <Banner
          text="Warn Banner with button"
          type="warn"
          icon="Money"
          buttonProps={{
            label: "Warn Button",
            onClick: () => {},
          }}
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const mountedBanner = mount(
      <Banner
        text="Test click on Banner"
        type="info"
        icon="ArrowLeft"
        buttonProps={{
          label: "Info Banner",
          onClick: mockOnClick,
        }}
      />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    mountedBanner.find("button").simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
