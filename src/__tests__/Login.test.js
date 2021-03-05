import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Login} from "./../Components/Login/Login";
import 'regenerator-runtime/runtime'; //needed for async
import { act } from "react-dom/test-utils"; //needed when renderer uses useState

Enzyme.configure({ adapter: new Adapter() });
describe('Login', () => {
  it('Pressing login button without credentials should not change anything', () => {
    const wrapper = mount(<Router><Login/></Router>);
    const saved = wrapper.html();
    wrapper.find("button").first().simulate("click"); //clicks login button
    wrapper.update();
    expect(saved).toBe(wrapper.html());
  });
  it('Error message should be empty by default', () => {
    const wrapper = mount(<Router><Login/></Router>);
    const errorMessage = wrapper.find("p").first().text();
    expect(errorMessage).toBe("");
  });
  it('Logging in with invalid credentials should display error to user', async () => {
    const wrapper = mount(<Router><Login/></Router>);
    // GAMMAL KOD SOM ev. REFERENS:
    // const username = wrapper.find("input").first();
    // username.simulate('change', { target: { value: 'ausernamethatnoonehas' } })
    // username.instance().value = "teststs";
    // username.simulate('change');
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({error: new Error("Fake test error")}),
      })
    );
    await act(async () => {
      wrapper.find('form').simulate('submit', {target: {username: {value: "fakeusername"}, password: {value: "fakepassword"}}});
    });
    const errorMessage = wrapper.find("p").first().text();
    expect(errorMessage).toBe("Error: Invalid username or password.");
  });
  it('Logging in with invalid credentials should display error to user in Swedish if swedish is enabled', async () => {
    window.localStorage.setItem("language", "se");
    const wrapper = mount(<Router><Login/></Router>);
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({error: new Error("Fake test error")}),
      })
    );
    await act(async () => {
      wrapper.find('form').simulate('submit', {target: {username: {value: "fakeusername"}, password: {value: "fakepassword"}}});
    });
    const errorMessage = wrapper.find("p").first().text();
    expect(errorMessage).toBe("Error: Fel användarnamn eller lösenord");
  });
  it('Logging in with valid credentials should set authToken', async () => {
    const wrapper = mount(<Router><Login/></Router>);
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({success: {token: "fakeToken"}}),
      })
    );
    await act(async () => {
      wrapper.find('form').simulate('submit', {target: {username: {value: "fakeusername"}, password: {value: "fakepassword"}}});
    });
    const authToken = window.localStorage.getItem("authToken");
    expect(authToken).toBe("fakeToken");
  });
})
