import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import About from '../../src/screens/about';

describe('About screen', () => {
  const actual = shallow(<About />);
  it('renders a div', () => {
    expect(actual.type()).toEqual('div');
  });
  it('contains an h1-tag with the word "About"', () => {
    expect(actual.contains(<h1>About</h1>)).toBe(true);
  });
  it('links to the github project', () => {
    expect(actual.contains(<a href="https://github.com/rocjs" alt="Github.com Roc">Github</a>)).toBe(true);
  });
});
