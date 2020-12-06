import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="https://www.metafaux.com">Metafaux</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  /* @ts-ignore */
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  /* @ts-ignore */
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
