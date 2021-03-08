import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {HomePage} from "./../Components/HomePage/HomePage";

Enzyme.configure({ adapter: new Adapter() });

it('should display header', () => {
  const wrapper = mount(<Router><HomePage/></Router>);
  const text = wrapper.find("h1");
  expect(text.text()).toBe("IV1201 Group 14 Recruiting Application");
})

it('should display Login', () => {
  const wrapper = mount(<Router><HomePage/></Router>);
  const text = wrapper.find('[to="/login"]');
  expect(text.text()).toBe("Login");
})

it('should display Create Account', () => {
  const wrapper = mount(<Router><HomePage/></Router>);
  const text = wrapper.find('[to="/create"]');
  expect(text.text()).toBe("Create Account");
})

it('should display header in Swedish', () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<Router><HomePage/></Router>);
  const text = wrapper.find("h1");
  expect(text.text()).toBe("IV1201 Grupp 14 Rekryteringsapplikation");
})

it('should display Login in Swedish', () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<Router><HomePage/></Router>);
  const text = wrapper.find('[to="/login"]');
  expect(text.text()).toBe("Logga in");
})

it('should display Create Account in Swedish', () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<Router><HomePage/></Router>);
  const text = wrapper.find('[to="/create"]');
  expect(text.text()).toBe("Skapa Konto");
})
