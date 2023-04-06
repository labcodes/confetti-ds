import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import Alert from "./Alert";

describe("Alert", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<Alert text="Error Alert" type="error" icon="magnifying-glass" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("renders with button", () => {
    const renderedComponent = renderer
      .create(
        <Alert
          text="Info Alert with button"
          type="warn"
          icon="wallet"
          buttonProps={{
            label: "Alert Button",
            onClick: () => {},
          }}
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("calls props.onClick when clicked", async () => {
    const mockOnClick = jest.fn();
    const mountedAlert = mount(
      <Alert
        text="Test click on Alert"
        type="info"
        icon="calendar"
        buttonProps={{
          label: "Info Button",
          onClick: mockOnClick,
        }}
      />
    );
    expect(mockOnClick.mock.calls.length).toEqual(0);
    mountedAlert.find("button").simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
