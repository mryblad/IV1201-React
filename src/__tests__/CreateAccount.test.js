import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {CreateAccount} from "./../Components/CreateAccount/CreateAccount";

Enzyme.configure({ adapter: new Adapter() });

it('should display First Name', () => {
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="firstName"]');
  expect(text.text()).toBe("First Name:");
})

it('should display Last Name', () => {
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="lastName"]');
  expect(text.text()).toBe("Last Name:");
})

it('should display Email', () => {
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="email"]');
  expect(text.text()).toBe("Email:");
})

it('should display SSN', () => {
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="ssn"]');
  expect(text.text()).toBe("Birthdate:");
})

it('should display Username', () => {
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="username"]');
  expect(text.text()).toBe("Username:");
})

it('should display Password', () => {
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="password"]');
  expect(text.text()).toBe("Password:");
})

it('should display Create Account button', () => {
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[type="submit"]');
  expect(text.text()).toBe("Create Account");
})

it('should display First Name in Swedish', () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="firstName"]');
  expect(text.text()).toBe("Förnamn:");
})

it('should display Last Name in Swedish', () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="lastName"]');
  expect(text.text()).toBe("Efternamn:");
})

it('should display Email in Swedish', () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="email"]');
  expect(text.text()).toBe("Email:");
})

it('should display SSN in Swedish', () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="ssn"]');
  expect(text.text()).toBe("Födelsedag:");
})

it('should display Username in Swedish', () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="username"]');
  expect(text.text()).toBe("Användarnamn:");
})

it('should display Password in Swedish', () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[htmlFor="password"]');
  expect(text.text()).toBe("Lösenord:");
})

it('should display Create Account button', () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[type="submit"]');
  expect(text.text()).toBe("Skapa Konto");
})
