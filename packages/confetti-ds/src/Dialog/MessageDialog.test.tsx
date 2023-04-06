/* eslint-disable no-alert */
import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import { MessageDialog } from "./index";

const args = {
  title: "Sample Message Dialog",
  icon: "star" as const,
  content:
    "This is the main content of a Message Dialog. You may want to put as much content as you want, as long as it's a string.",
  buttonProps: {
    label: "Required button",
    onClick: () => alert("Required button clicked"),
  },
  outlineButtonProps: {
    label: "Optional button",
    onClick: () => alert("Optional button clicked"),
  },
  isModal: false,
  isOpen: false,
  handleCLose: jest.fn(),
  isMessageDialog: true,
};

describe("MessageDialog", () => {
  afterEach(() => {
    /* reset html tag after each test case */
    document.getElementsByTagName("html")[0].innerHTML = "";
  });

  it("rendering with base props", () => {
    expect(document.body.style.overflow).toBe("");

    const Component = <MessageDialog {...args} />;
    const renderedComponent = renderer.create(Component);

    expect(renderedComponent.toJSON()).toMatchSnapshot();

    /* To clean up things */
    renderedComponent.unmount();
  });

  it("rendering with isOpen false", () => {
    expect(document.body.style.overflow).toBe("");

    const Component = (
      <MessageDialog {...args} isModal isLarge isOpen={false} />
    );
    const renderedComponent = renderer.create(Component);

    expect(renderedComponent.toJSON()).toMatchSnapshot();

    /* To clean up things */
    renderedComponent.unmount();

    expect(document.body.style.overflow).toBe("");
  });

  it("rendering with isModal false", () => {
    expect(document.body.style.overflow).toBe("");

    const Component = (
      <MessageDialog {...args} isModal={false} isLarge isOpen />
    );
    const renderedComponent = renderer.create(Component);

    expect(renderedComponent.toJSON()).toMatchSnapshot();

    /* To clean up things */
    renderedComponent.unmount();

    expect(document.body.style.overflow).toBe("unset");
  });

  it("rendering with isLarge false", () => {
    expect(document.body.style.overflow).toBe("");

    const Component = (
      <MessageDialog {...args} isModal isOpen isLarge={false} />
    );
    const renderedComponent = renderer.create(Component);

    expect(renderedComponent.toJSON()).toMatchSnapshot();

    /* To clean up things */
    renderedComponent.unmount();

    expect(document.body.style.overflow).toBe("unset");
  });

  it(`rendering if isOpen false sets body overflow to empty`, () => {
    expect(document.body.style.overflow).toBe("");

    const wrapper = mount(
      <MessageDialog
        {...args}
        isModal // true
        isOpen={false}
      />
    );

    expect(document.body.style.overflow).toBe("");

    expect(wrapper.find(".lab-dialog__title").exists()).toBeFalsy();
    expect(wrapper.find(".lab-dialog__body").exists()).toBeFalsy();

    wrapper.unmount();
  });
  it("checks if isOpen and isModal true sets body overflow to hidden", () => {
    expect(document.body.style.overflow).toBe("");

    const wrapper = mount(
      <MessageDialog
        {...args}
        isModal // true
        isOpen // true
      />
    );

    expect(document.body.style.overflow).toBe("hidden");

    expect(wrapper.find(".lab-dialog__title").text()).toBe(args.title);
    expect(wrapper.find(".lab-dialog__body").text()).toBe(args.content);

    wrapper.unmount();

    expect(document.body.style.overflow).toBe("unset");
  });
  it("toggle isOpen", () => {
    expect(document.body.style.overflow).toBe("");

    const wrapper = mount(<MessageDialog {...args} isModal isOpen />);

    expect(document.body.style.overflow).toBe("hidden");

    expect(wrapper.find(".lab-dialog__title").text()).toBe(args.title);
    expect(wrapper.find(".lab-dialog__body").text()).toBe(args.content);

    wrapper.setProps({ isOpen: false });

    expect(document.body.style.overflow).toBe("unset");

    expect(wrapper.find(".lab-dialog__title").exists()).toBeFalsy();
    expect(wrapper.find(".lab-dialog__body").exists()).toBeFalsy();

    wrapper.unmount();

    expect(document.body.style.overflow).toBe("unset");
  });
});
