import React from "react";
import renderer from "react-test-renderer";

import DialogWrapper from "./DialogWrapper";

describe("DialogWrapper", () => {
  it("renders with base props", () => {
    const handleClose = jest.fn();
    const isOpen = false;
    const isModal = false;
    const isLarge = false;

    const Component = (
      <DialogWrapper
        handleClose={handleClose}
        isOpen={isOpen}
        isModal={isModal}
        isLarge={isLarge}
        isMessageDialog
      >
        <div />
      </DialogWrapper>
    );

    const renderedComponent = renderer.create(Component).toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it("test with isOpen false", () => {
    const handleClose = jest.fn();
    const isOpen = false;
    const isModal = true;
    const isLarge = true;
    const Component = (
      <DialogWrapper
        handleClose={handleClose}
        isOpen={isOpen}
        isModal={isModal}
        isLarge={isLarge}
        isMessageDialog
      >
        <div />
      </DialogWrapper>
    );
    const renderedComponent = renderer.create(Component).toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it("test with isModal false", () => {
    const handleClose = jest.fn();
    const isOpen = true;
    const isModal = false;
    const isLarge = true;

    const Component = (
      <DialogWrapper
        handleClose={handleClose}
        isOpen={isOpen}
        isModal={isModal}
        isLarge={isLarge}
        isMessageDialog
      >
        <div />
      </DialogWrapper>
    );
    const renderedComponent = renderer.create(Component).toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
  it("test with isMessageDialog false", () => {
    const handleClose = jest.fn();
    const isOpen = true;
    const isModal = true;
    const isLarge = true;
    const isMessageDialog = false;

    const Component = (
      <DialogWrapper
        handleClose={handleClose}
        isOpen={isOpen}
        isModal={isModal}
        isLarge={isLarge}
        isMessageDialog={isMessageDialog}
      >
        <div />
      </DialogWrapper>
    );
    const renderedComponent = renderer.create(Component).toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  it("test with isLarge false", () => {
    const handleClose = jest.fn();
    const isOpen = true;
    const isModal = true;
    const isLarge = false;
    const Component = (
      <DialogWrapper
        handleClose={handleClose}
        isOpen={isOpen}
        isModal={isModal}
        isLarge={isLarge}
        isMessageDialog
      >
        <div />
      </DialogWrapper>
    );
    const renderedComponent = renderer.create(Component).toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
});
