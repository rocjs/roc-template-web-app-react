import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import App from '../src/screens/app';
import Helmet from 'react-helmet';
import Footer from '../src/components/footer';
import NavBar from '../src/components/navbar';

describe('App screen', () => {
  it('Loads Footer, Navbar and Helmet', () => {
    const empty = [];
    const wrapper = shallow(<App children={empty} />);
    expect(wrapper.contains(<Helmet />)).toBeTrue;
    expect(wrapper.contains(<Footer />)).toBeTrue;
    expect(wrapper.contains(<NavBar />)).toBeTrue;
  });
});