import React from 'react'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {ForgotPassword} from "./../Components/ForgotPassword/ForgotPassword";
import 'regenerator-runtime/runtime'; //needed for async
import { act } from "react-dom/test-utils"; //needed when renderer uses useState

// Test to see if Jest is working
Enzyme.configure({ adapter: new Adapter() });
describe('ForgotPassword', () => {
  it('Invalid email should result in error message (english)', async() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({error: new Error("Fake error")}),
      })
    );
    const wrapper = mount(<ForgotPassword/>);
    await act(async () => {
      wrapper.find('button').first().simulate('submit', {target: {email: {value: "fakemail"}}});
    });
    const errorMsg = wrapper.find('p').last().text();
    expect(errorMsg).toContain("Error");
    expect(errorMsg).toContain("account");
  });
  it('Invalid email should result in error message (swedish)', async() => {
    window.localStorage.setItem("language", "se");
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({error: new Error("Fake error")}),
      })
    );
    const wrapper = mount(<ForgotPassword/>);
    await act(async () => {
      wrapper.find('button').first().simulate('submit', {target: {email: {value: "fakemail"}}});
    });
    const errorMsg = wrapper.find('p').last().text();
    expect(errorMsg).toContain("Error");
    expect(errorMsg).toContain("konto");
  });
  it('Valid email should result in console.log message (representing an email)', async() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({success: {resetLink: "fakeresetlink.com"}}),
      })
    );
    console.log = jest.fn();
    const wrapper = mount(<ForgotPassword/>);
    await act(async () => {
      wrapper.find('button').first().simulate('submit', {target: {email: {value: "validemail"}}});
    });
    expect(console.log).toHaveBeenCalledWith("(mail) Go to this link [link] to reset your password.");
    expect(console.log).toHaveBeenCalledWith("fakeresetlink.com");
  });
})
