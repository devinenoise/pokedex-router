import React from "react";
import Home from "./App.js";
import renderer from "react-test-renderer";

test('renders App.js correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});