import React from "react";

import { StandardSearch as Component } from "../../../../packages/confetti-ds/src";

export default {
  title: "Search/Standard Search",
  component: Component,
};

export const StandardSearch = (args) => <Component {...args} />;
StandardSearch.args = {
  onSearch: (data) => alert(`Searched for: ${JSON.stringify(data)}`),
};
