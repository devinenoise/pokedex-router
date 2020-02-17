import React from "react";
import PokeItem from "./PokeItem.js";
import renderer from "react-test-renderer";

test('renders Detail.js correctly', () => {
  const tree = renderer
    .create(<PokeItem pokemon={[]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});