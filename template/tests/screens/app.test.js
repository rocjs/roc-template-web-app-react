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
  it('renders a div', () => {
    expect(wrapper.type()).toEqual('div');
  });
  it('Loads Footer, Navbar and Helmet', () => {
    expect(wrapper.find(Helmet).length).toBeGreaterThan(0);
    expect(wrapper.find(Footer).length).toBeGreaterThan(0);
    expect(wrapper.find(NavBar).length).toBeGreaterThan(0);
  });
});
