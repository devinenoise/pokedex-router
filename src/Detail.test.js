import React from "react";
import Detail from "./App.js";
import renderer from "react-test-renderer";

test('renders App.js correctly', () => {
  const tree = renderer
    .create(<Detail />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});