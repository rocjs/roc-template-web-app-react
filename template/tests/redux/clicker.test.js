import expect from 'expect';

import reducer from '../../src/redux/clicker';

describe('Clicker reducer', () => {
  /*
    This block will test the reducer for the Clicker component.
    The reducer is super simple, it simply gets the state and checks for the
    action type 'CLICKED'. If this is the type it has received, it simply adds
    the 'increment' value to the state, and returns it.
   */
  const action = { type: 'CLICKED', increment: 1 };
  it('Adds 1 to 1, returning 2', () => {
    /*
      The default state is 1, and the default increment value is 1,
      so it makes sense to first test the defaults.
      We expect 1 and 1 to be 2.
     */
    const state = 1;
    expect(reducer(state, action)).toEqual(2);
  });
  it('Adds other numbers to the state', () => {
    /*
      This test isn't any more complicated, but we still want to check that
      the reducer isn't hardcoded to simply add 1 each time, so we'll send a
      different number.
      We expect 1 and 99 to be 100.
     */
    const state = 1;
    action.increment = 99;
    expect(reducer(state, action)).toEqual(100);
  });
  it('Adds numbers to the state, even if the state has changed', () => {
    /*
      Once again, we're being incredibly pedantic, and this time we'll check if
      a state other than 1 will throw the reducer of it's track.
      We expect 40 and 60 to be 100.
     */
    const state = 40;
    action.increment = 60;
    expect(reducer(state, action)).toEqual(100);
  });
  it('Adds numbers to a negative state', () => {
    /*
      This is the first test where we could actually expect to see something break.
      What happens if the state is below zero? We don't know until we test.
      We expect -40 and 60 to be 20;
     */
    const state = -40;
    action.increment = 60;
    expect(reducer(state, action)).toEqual(20);
  });
  it('Subtracts negative numbers from state', () => {
    /*
      Now that we know the reducer can handle a negative state, it only follows
      that we need to test if a positive state and negative increment will work.
      Note that this is also the first time we test for a negative result from
      the reducer function.
      We expect 1 and -2 to be -1.
     */
    const state = 1;
    action.increment = -2;
    expect(reducer(state, action)).toEqual(-1);
  });
  it('Subracts negative numbers from a negative state', () => {
    /*
      You knew it was coming. We finally need to check that it subtracts correctly
      from an already negative state.
      We expect -1 and -1 to be -2.
     */
    const state = -1;
    action.increment = -1;
    expect(reducer(state, action)).toEqual(-2);
  });
  it('Test for invalid input', () => {
    /*
      You may have noticed that the clicker actually has a text field as an input
      element. There's nothing there that forces the user to input numbers!
      Well, you KNOW we need to test that!
      We expect 1 and the string 'one' to not be a number.
     */
    const state = 1;
    action.increment = 'one';
    expect(reducer(state, action)).toNotBeA('number');
  });
});
