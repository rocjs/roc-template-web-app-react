import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Start from '../../src/screens/start';
import Clicker from '../../src/components/clicker';

describe('Start screen', () => {
  const actual = shallow(<Start />);
  it('renders a div', () => {
    expect(actual.type()).toEqual('div');
  });
  it('has a Clicker', () => {
    expect(actual.find(Clicker).length).toBeGreaterThan(0);
  });
  it('has an h4 tag', () => {
    console.log(actual.find('h4'));
    expect(actual.find('h4'));
  });
});
