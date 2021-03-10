import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {CreateAccount} from "./../Components/CreateAccount/CreateAccount";
import 'regenerator-runtime/runtime'; //needed for async
import { act } from "react-dom/test-utils"; //needed when renderer uses useState

Enzyme.configure({ adapter: new Adapter() });

it('Pressing create account button without input should not change anything', () => {
  const wrapper = mount(<CreateAccount/>);
  const saved = wrapper.html();
  wrapper.find("button").first().simulate("click");
  wrapper.update();
  expect(saved).toBe(wrapper.html());
});

it('Creating account with invalid name should display error to user', async () => {
  const wrapper = mount(<CreateAccount/>);
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({error: new Error("Fake test error")}),
    })
  );
  await act(async () => {
    wrapper.find('form').simulate('submit', {target: {firstName: {value: "12345"}, lastName: {value: "fakesson"}, ssn: {value: "2021-01-01"}, password: {value: "fakepass"}, email: {value: "fake@fakesson.se"}, username: {value: "fakename"}}});
  });
  const errorMessage = wrapper.find("p").first().text();
  expect(errorMessage).toBe("Error: First Name needs to be only characters and within 20 characters long");
});

it('Creating account with invalid email should display error to user', async () => {
  const wrapper = mount(<CreateAccount/>);
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({error: new Error("Fake test error")}),
    })
  );
  await act(async () => {
    wrapper.find('form').simulate('submit', {target: {firstName: {value: "fake"}, lastName: {value: "fakesson"}, ssn: {value: "2021-01-01"}, password: {value: "fakepass"}, email: {value: "fake.fakesson.se"}, username: {value: "fakename"}}});
  });
  const errorMessage = wrapper.find("p").first().text();
  expect(errorMessage).toBe("Error: Email has to be a valid email");
});

it('Creating account with invalid birthdate should display error to user', async () => {
  const wrapper = mount(<CreateAccount/>);
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({error: new Error("Fake test error")}),
    })
  );
  await act(async () => {
    wrapper.find('form').simulate('submit', {target: {firstName: {value: "fake"}, lastName: {value: "fakesson"}, ssn: {value: "fakebirthdayyyyyyyyyyyyyyyyyyy"}, password: {value: "fakepass"}, email: {value: "fake@fakesson.se"}, username: {value: "fakename"}}});
  });
  const errorMessage = wrapper.find("p").first().text();
  expect(errorMessage).toBe("Error: Birthdate has to be a valid");
});

it('Creating account with invalid username should display error to user', async () => {
  const wrapper = mount(<CreateAccount/>);
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({error: new Error("Fake test error")}),
    })
  );
  await act(async () => {
    wrapper.find('form').simulate('submit', {target: {firstName: {value: "fake"}, lastName: {value: "fakesson"}, ssn: {value: "2021-01-01"}, password: {value: "fakepass"}, email: {value: "fake@fakesson.se"}, username: {value: "fakenameeeeeeeeeeeeeeeeeeeeeee"}}});
  });
  const errorMessage = wrapper.find("p").first().text();
  expect(errorMessage).toBe("Error: Username has to 16 characters or less");
});

it('Creating account with invalid password should display error to user', async () => {
  const wrapper = mount(<CreateAccount/>);
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({error: new Error("Fake test error")}),
    })
  );
  await act(async () => {
    wrapper.find('form').simulate('submit', {target: {firstName: {value: "fake"}, lastName: {value: "fakesson"}, ssn: {value: "2021-01-01"}, password: {value: "fakepassssssssssssssssssssssss"}, email: {value: "fake@fakesson.se"}, username: {value: "fakename"}}});
  });
  const errorMessage = wrapper.find("p").first().text();
  expect(errorMessage).toBe("Error: Password has to 24 characters or less");
});

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

it('Creating account with invalid name should display error to user in Swedish', async () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<CreateAccount/>);
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({error: new Error("Fake test error")}),
    })
  );
  await act(async () => {
    wrapper.find('form').simulate('submit', {target: {firstName: {value: "12345"}, lastName: {value: "fakesson"}, ssn: {value: "2021-01-01"}, password: {value: "fakepass"}, email: {value: "fake@fakesson.se"}, username: {value: "fakename"}}});
  });
  const errorMessage = wrapper.find("p").first().text();
  expect(errorMessage).toBe("Error: Förnamn måste bestå av bara bokstäver och vara inom 20 tecken långt");
});

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

it('should display Create Account button in Swedish', () => {
  window.localStorage.setItem("language", "se");
  const wrapper = mount(<CreateAccount/>);
  const text = wrapper.find('[type="submit"]');
  expect(text.text()).toBe("Skapa Konto");
})
