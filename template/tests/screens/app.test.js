import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import App from '../../src/screens/app';
import Helmet from 'react-helmet';
import Footer from '../../src/components/footer';
import NavBar from '../../src/components/navbar';

describe('App screen', () => {
  const empty = [];
  const wrapper = shallow(<App children={ empty } />);
  /*
    This test simply uses the wrapper.type() function to get the
    type of the node, and then compares it with the string 'div'.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/type.html
  */
  it('renders a div', () => {
    expect(wrapper.type()).toEqual('div');
  });
  /*
    This test uses wrapper.find() with specific React elements, to check whether
    those elements exist inside the rendered component. This is a perfect example
    of unit testing a react component holding other components; everything inside
    Helment, Footer and NavBar is tested in their own unit tests, so testing this
    component is really quick and easy.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html
   */
  it('Loads Footer, Navbar and Helmet', () => {
    expect(wrapper.find(Helmet).length).toBeGreaterThan(0);
    expect(wrapper.find(Footer).length).toBeGreaterThan(0);
    expect(wrapper.find(NavBar).length).toBeGreaterThan(0);
  });
});
