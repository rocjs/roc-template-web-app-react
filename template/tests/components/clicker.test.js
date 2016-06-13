import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { Clicker } from '../../src/components/clicker';

describe('Clicker', () => {
  /*
    This test simply uses the wrapper.type() function to get the
    type of the node, and then compares it with the string 'div'.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/type.html
  */
  it('renders a div', () => {
    const wrapper = shallow(<Clicker />);
    expect(wrapper.type()).toEqual('div');
  });
  /*
    Same here, except we wrap two tests in one it-block to save some typing
    since there is almost no scenario in which the input field and the button
    aren't either both missing or both in place.
  */
  it('renders an input field and a button', () => {
    const wrapper = shallow(<Clicker />);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });
  /*
    Here we get a little funky. If you look at the Clicker-component, you see
    that we've engineered it to take a function called onClick which then
    calls the reducer. Why don't we just call the reducer right away?
    Two reasons. First, we actually do need a function there to fetch the value
    from the input field, and it makes sense to separate this from the component.
    Secondly, it allows us to pass in a DIFFERENT function, such as this spy.
    This function, then, creates a spy, passes it to the Clicker when rendering,
    and simulates a click on the button. The spy is then checked to see if it has
    been called.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
    https://github.com/mjackson/expect#createspy
    https://github.com/mjackson/expect#spy-tohavebeencalled
   */
  it('calls a function when button is clicked', () => {
    const spy = expect.createSpy();
    const wrapper = shallow(<Clicker onClick={spy} />);
    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
