import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import { StandardDialog } from "./index";

const args = {
  title: "Sample Message Dialog",
  icon: "star",
  content:
    "This is the main content of a Message Dialog. You may want to put as much content as you want, as long as it's a string.",
  buttonProps: {
    text: "Required button",
    onClick: () => alert("Required button clicked"),
  },
  outlineButtonProps: {
    text: "Optional button",
    onClick: () => alert("Optional button clicked"),
  },
  isModal: false,
  isOpen: false,
  handleCLose: jest.fn(),
  isMessageDialog: true,
};

describe("StandartDialog", () => {
  it("renders with base props", () => {
    const Component = <StandardDialog {...args} />;
    const renderedComponent = renderer.create(Component).toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it("test with isOpen false", () => {
    const Component = (
      <StandardDialog {...args} isModal isLarge isOpen={false} />
    );
    const renderedComponent = renderer.create(Component).toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it("test with isModal false", () => {
    const Component = (
      <StandardDialog {...args} isModal={false} isLarge isOpen />
    );
    const renderedComponent = renderer.create(Component).toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it("test with isLarge false", () => {
    const Component = (
      <StandardDialog {...args} isModal isOpen isLarge={false} />
    );
    const renderedComponent = renderer.create(Component).toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it(`checks if isOpen false sets body overflow to `, () => {
    let isOpen = false;
    const handleClose = () => {
      isOpen = false;
    };

    const Component = (
      <StandardDialog
        {...args}
        isModal
        isOpen={isOpen}
        handleClose={handleClose}
      />
    );

    const renderedComponent = renderer.create(Component).toJSON();
    const wrapper = mount(Component);
    expect(document.body.style.overflow).toBe("hidden");

    expect(wrapper.find(".lab-dialog__title").exists()).toBeFalsy();
    expect(wrapper.find(".lab-dialog__body").exists()).toBeFalsy();

    expect(renderedComponent).toMatchSnapshot();
  });
  it("checks if isOpen true sets body overflow to hidden", () => {
    let isOpen = true;
    const handleClose = () => {
      isOpen = false;
    };
    const Component = (
      <StandardDialog
        {...args}
        isModal
        isOpen={isOpen}
        handleClose={handleClose}
      />
    );

    const renderedComponent = renderer.create(Component).toJSON();
    const wrapper = mount(Component);
    expect(document.body.style.overflow).toBe("hidden");
    expect(wrapper.find(".lab-dialog__title").text()).toBe(args.title);
    expect(wrapper.find(".lab-dialog__body").text()).toBe(args.content);

    expect(renderedComponent).toMatchSnapshot();
  });
  it("toggle isOpen", () => {
    const handleClose = () => {};
    const Component = (
      <StandardDialog {...args} isModal isOpen handleClose={handleClose} />
    );
    const renderedComponent = renderer.create(Component).toJSON();
    const wrapper = mount(Component);

    expect(document.body.style.overflow).toBe("hidden");
    expect(wrapper.find(".lab-dialog__title").text()).toBe(args.title);
    expect(wrapper.find(".lab-dialog__body").text()).toBe(args.content);

    wrapper.setProps({ isOpen: false });

    expect(document.body.style.overflow).toBe("unset");
    expect(wrapper.find(".lab-dialog__title").exists()).toBeFalsy();
    expect(wrapper.find(".lab-dialog__body").exists()).toBeFalsy();

    expect(renderedComponent).toMatchSnapshot();
  });
});
