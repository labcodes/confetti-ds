import React from "react";
import renderer from "react-test-renderer";

import UserAvatar from "./UserAvatar";

describe("UserAvatar", () => {
  it("renders with base props", async () => {
    const renderedComponent = renderer
      .create(<UserAvatar avatarSrc="src" altText="text" caption="caption" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
