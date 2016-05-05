import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import App from '../../src/screens/app';
import Helmet from 'react-helmet';
import Footer from '../../src/components/footer';
import NavBar from '../../src/components/navbar';

describe('App screen', () => {
  const empty = [];
  const actual = shallow(<App children={ empty } />);
  it('renders a div', () => {
    expect(actual.type()).toEqual('div');
  });
  it('Loads Footer, Navbar and Helmet', () => {
    expect(actual.find(Helmet).length).toBeGreaterThan(0);
    expect(actual.find(Footer).length).toBeGreaterThan(0);
    expect(actual.find(NavBar).length).toBeGreaterThan(0);
  });
});