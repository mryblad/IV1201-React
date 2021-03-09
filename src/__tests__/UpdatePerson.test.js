import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {UpdatePerson} from "./../Components/UpdatePerson/UpdatePerson";
import apiService from "./../Services/apiService";
import 'regenerator-runtime/runtime'; //needed for async
import { act } from "react-dom/test-utils"; //needed when renderer uses useState

// Test to see if Jest is working
Enzyme.configure({ adapter: new Adapter() });

const completeInfo = {
    "success": {
        "emptyFields": false
    }
}

const lackingData = {
    "success": {
        "emptyFields": {
            "surname": true,
            "ssn": true,
            "email": true,
        }
    }
}

const form = {
  firstName: {value: ""},
  lastName: {value: ""},
  email: {value: ""},
  ssn: {value: ""},
  username: {value: ""},
  password: {value: ""},
};

const getEmptyFieldsSpy = jest.spyOn(apiService, 'getEmptyFields');
const updatePersonSpy = jest.spyOn(apiService, 'updatePerson');
const alertSpy = jest.spyOn(window, 'alert');
alertSpy.mockReturnValue(null);

describe('UpdatePerson', () => {
  it('Update person with full data should only display password change', async() => {
    getEmptyFieldsSpy.mockReturnValue(Promise.resolve(completeInfo));

    let wrapper;
    await act(async () => {
      wrapper = mount(<Router><UpdatePerson/></Router>);
    });
    expect(wrapper.html()).toContain("<div class=\"firstName\" style=\"display: none;\">");
    expect(wrapper.html()).toContain("<div class=\"lastName\" style=\"display: none;\">");
    expect(wrapper.html()).toContain("<div class=\"email\" style=\"display: none;\">");
    expect(wrapper.html()).toContain("<div class=\"ssn\" style=\"display: none;\">");
    expect(wrapper.html()).toContain("<div class=\"username\" style=\"display: none;\">");

    expect(wrapper.html()).toContain("<div class=\"password\" style=\"display: block;\">");
  });
  it('Update person with partly lacking data view should show lacking data fields', async() => {
    getEmptyFieldsSpy.mockReturnValue(Promise.resolve(lackingData));

    let wrapper;
    await act(async () => {
      wrapper = mount(<Router><UpdatePerson/></Router>);
    });
    expect(wrapper.html()).toContain("<div class=\"firstName\" style=\"display: none;\">");
    expect(wrapper.html()).toContain("<div class=\"username\" style=\"display: none;\">");
    expect(wrapper.html()).toContain("<div class=\"password\" style=\"display: none;\">");

    expect(wrapper.html()).toContain("<div class=\"lastName\" style=\"display: block;\">");
    expect(wrapper.html()).toContain("<div class=\"email\" style=\"display: block;\">");
    expect(wrapper.html()).toContain("<div class=\"ssn\" style=\"display: block;\">");
  });
  it('Click update person with partly lacking data should result succeed', async() => {
    getEmptyFieldsSpy.mockReturnValue(Promise.resolve(lackingData));
    updatePersonSpy.mockReturnValue(Promise.resolve({success: true}));

    let wrapper;
    let oldHtml;
    await act(async () => {
      wrapper = mount(<Router><UpdatePerson/></Router>);
      oldHtml = wrapper.html();

      form.lastName.value = "last";
      form.email.value = "email@email.com";
      form.ssn.value = "11223344";
      wrapper.find('button').first().simulate('submit', {target: form});
    });

    expect(updatePersonSpy).toHaveBeenCalledTimes(1);
    expect(oldHtml).not.toBe(wrapper.html());
    expect(wrapper.html()).toContain("Changes saved successfully!");
  });
  it('Click update person with partly lacking data with forced error should show in view', async() => {
    getEmptyFieldsSpy.mockReturnValue(Promise.resolve(lackingData));
    updatePersonSpy.mockClear();
    updatePersonSpy.mockReturnValue(Promise.resolve({error: new Error("fake error")}));

    let wrapper;
    let oldHtml;
    await act(async () => {
      wrapper = mount(<Router><UpdatePerson/></Router>);
      oldHtml = wrapper.html();

      form.lastName.value = "last";
      form.email.value = "email@email.com";
      form.ssn.value = "11223344";
      wrapper.find('button').first().simulate('submit', {target: form});
    });

    expect(updatePersonSpy).toHaveBeenCalledTimes(1);
    expect(oldHtml).not.toBe(wrapper.html());
    expect(wrapper.html()).toContain("Error: Failed to save changes, try again in a moment.")
  });
})
