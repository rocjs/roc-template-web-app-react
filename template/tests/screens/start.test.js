import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Start from '../../src/screens/start';
import Clicker from '../../src/components/clicker';

describe('Start screen', () => {
  const wrapper = shallow(<Start />);
  it('renders a div', () => {
    expect(wrapper.type()).toEqual('div');
  });
  it('has a Clicker', () => {
    expect(wrapper.find(Clicker).length).toBeGreaterThan(0);
  });
  it('has an h4 tag', () => {
    expect(wrapper.find('h4'));
  });
});
