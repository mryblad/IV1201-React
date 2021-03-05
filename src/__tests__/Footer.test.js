import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Footer} from "./../Components/Footer/Footer";

// Test to see if Jest is working
Enzyme.configure({ adapter: new Adapter() });
describe('Footer', () => {
  it('Footer images source should exist', () => {
    const wrapper = mount(<Footer/>);
    const images = wrapper.find("img");
    expect(images.first().prop('src')==="se_icon.png"?true:false).toBe(true);
    expect(images.last().prop('src')==="en_icon.png"?true:false).toBe(true);
  });
  it('Footer alt-text should exist', () => {
    const wrapper = mount(<Footer/>);
    const images = wrapper.find("img");
    expect(images.first().prop('alt')==="se flag"?true:false).toBe(true);
    expect(images.last().prop('alt')==="en flag"?true:false).toBe(true);
  });
})
