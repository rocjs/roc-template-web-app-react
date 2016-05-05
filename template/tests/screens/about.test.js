import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import About from '../../src/screens/about';

describe('About screen', () => {
  const wrapper = shallow(<About />);
  /*
    This test simply uses the wrapper.type() function to get the
    type of the node, and then compares it with the string 'div'.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/type.html
  */
  it('renders a div', () => {
    expect(wrapper.type()).toEqual('div');
  });
  /*
    This test uses the wrapper.contains() function to find out if the rendered
    component has something that renders EXACTLY like
      <h1>About</h1>
    inside it. Change the spelling to Aboot, and this test will fail. The same is
    true of changing the h1-tag to h2.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/contains.html
   */
  it('contains an h1-tag with the word "About"', () => {
    expect(wrapper.contains(<h1>About</h1>)).toBe(true);
  });
  /*
    This test uses the same function, and is even more specific. The alt-text
    of the rendered a-node must have the exact same spelling as below.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/contains.html
   */
  it('links to the github project', () => {
    expect(wrapper.contains(<a href="https://github.com/rocjs" alt="Github.com Roc">Github</a>)).toBe(true);
  });
});
