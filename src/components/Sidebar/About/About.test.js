// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import About from './About';

describe('About', () => {
  const props = {
    info: {
      title: 'test',
      logo: '/photo.jpg',
      subtitle: 'test'
    },
    isIndex: false
  };

  it('renders correctly', () => {
    const tree = renderer.create(<About {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
