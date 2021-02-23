import React from "react";

import { InlineSearch as Component } from "../../../confetti-ds/src";

export default {
  title: "Data Inputs/Search/Inline Search",
  component: Component,
};

export const InlineSearch = (args) => <Component {...args} />;
InlineSearch.args = {
  onSearch: (data) => alert(`Searched for: ${JSON.stringify(data)}`),
};
