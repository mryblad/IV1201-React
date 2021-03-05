import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Header} from "./../Components/Header/Header";

jest.spyOn(window.localStorage.__proto__, 'setItem');

Enzyme.configure({ adapter: new Adapter() });
describe('Header', () => {
  it('Header should have text', () => {
    const wrapper = mount(<Header/>);
    const text = wrapper.find("p");
    expect(text.text()).toBe("IV1201 Group 14 Recruiting Application");
  })
  it('Header should display in Swedish', () => {
    window.localStorage.setItem("language", "se");
    const wrapper = mount(<Header/>);
    const text = wrapper.find("p");
    expect(text.text()).toBe("IV1201 Grupp 14 Rekryteringsapplikation");
  })
  it('Logout button should not exist', () => {
    const wrapper = mount(<Header/>);
    const button = wrapper.find("button");
    expect(button.length).toBe(0);
  })
  it('Logout button should exist', () => {
    window.localStorage.setItem("authToken", "temptoken");
    const wrapper = mount(<Header/>);
    const button = wrapper.find("button");
    expect(button.length).toBe(1);
  })
  it('Logout button should log out (remove) logout button', () => {
    window.localStorage.setItem("authToken", "temptoken");
    let wrapper = mount(<Header/>);
    wrapper.find("button").simulate("click");
    wrapper = mount(<Header/>);
    expect(wrapper.find("button").length).toBe(0);
  })
})
