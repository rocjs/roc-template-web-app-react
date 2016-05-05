import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Start from '../../src/screens/start';
import Clicker from '../../src/components/clicker';

describe('Start screen', () => {
  const wrapper = shallow(<Start />);
  /*
    This test simply uses the wrapper.type() function to get the
    type of the node, and then compares it with the string 'div'.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/type.html
  */
  it('renders a div', () => {
    expect(wrapper.type()).toEqual('div');
  });
  /*
    This test and the one below use a little trick of Enzymes, \
    which is that the find() function doesn't just take CSS selectors,
    but what they call EnzymeSelectors, which can be something as \
    simple as a React component - or something that renders like it.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html
   */
  it('has a Clicker', () => {
    expect(wrapper.find(Clicker).length).toBeGreaterThan(0);
  });
  it('has an h4 tag', () => {
    expect(wrapper.find(<h4 />));
  });
});
