import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Footer from '../../src/components/footer';

describe('Footer', () => {
  const wrapper = shallow(<Footer />);
  /*
    This test simply uses the wrapper.type() function to get the
    type of the node, and then compares it with the string 'div'.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/type.html
  */
  it('renders a div', () => {
    expect(wrapper.type()).toEqual('div');
  });
  /*
    This test first uses the wrapper.find() function to make an array
    of all 'a' nodes. It then  uses the wrapper.findWhere function
    to locate all nodes in that array which also has a href tag which
    links to github.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/props.html
    Could also have used curr.prop('href')
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/prop.html
  */
  it('links to the github project', () => {
    const links = wrapper.find('a');
    const result = links.findWhere(curr => {
      return curr.props().href === 'http://github.com/rocjs/roc';
    });
    expect(result.length).toBeGreaterThan(0);
  });


  /*
    This test uses the filterWhere function to filter
    out which of the 'png' nodes are inside of a 'a' node.
    In this test, that will be all of them, so this test is unprecise.
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/filterWhere.html
    http://airbnb.io/enzyme/docs/api/ShallowWrapper/parent.html
    */
  it('has a png inside a link tag', () => {
    // (Actually it has two)
    const imgs = wrapper.find('img');
    const result = imgs.filterWhere(curr => {
      return curr.parent().type() === 'a';
    });
    expect(result.length).toBeGreaterThan(0);
  });
});
