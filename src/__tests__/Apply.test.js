import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Apply} from "./../Components/Apply/Apply";
import apiService from "./../Services/apiService";
import 'regenerator-runtime/runtime'; //needed for async
import { act } from "react-dom/test-utils"; //needed when renderer uses useState

// Test to see if Jest is working
Enzyme.configure({ adapter: new Adapter() });

const alertSpy = jest.spyOn(window, 'alert');
alertSpy.mockReturnValue(null);

const getCompetencesSpy = jest.spyOn(apiService, 'getCompetences');
getCompetencesSpy.mockReturnValue(Promise.resolve({success: [{competence_translations: []}]}));

describe('Apply', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({error: new Error("Fake error to disable token validity check")}),
    })
  );
  it('Submitting without any data should cause error to display in the view', async() => {
    const wrapper = mount(<Router><Apply/></Router>);
    await act(async () => {
      wrapper.find('button').last().simulate('click');
    });
    expect(wrapper.html()).toContain("Error: Availabilityperiods cannot be empty")
  });
  it('Successful submission should result with an alert window', async() => {
    alertSpy.mockClear();
    const wrapper = mount(<Router><Apply/></Router>);
    await act(async () => {
      wrapper.find('input').at(1).simulate('change', {target: {name: "startDate", value: "2022-01-01"}});
      wrapper.find('input').at(2).simulate('change', {target: {name: "endDate", value: "2022-02-02"}});
      wrapper.find('button').last().simulate('click');
    });
    expect(alertSpy).toHaveBeenCalledTimes(1);
  });
  it('Invalid period interval should result in view error', async() => {
    alertSpy.mockClear();
    const wrapper = mount(<Router><Apply/></Router>);
    await act(async () => {
      wrapper.find('input').at(1).simulate('change', {target: {name: "startDate", value: "2022-01-01"}});
      wrapper.find('input').at(2).simulate('change', {target: {name: "endDate", value: "2021-02-02"}});
      wrapper.find('button').last().simulate('click');
    });
    expect(wrapper.html()).toContain("Error: Application periods have to be valid");
    expect(alertSpy).toHaveBeenCalledTimes(0);
  });
  it('Clicking "add period" button without filled periods should give error to view', async() => {
    alertSpy.mockClear();
    const wrapper = mount(<Router><Apply/></Router>);
    await act(async () => {
      wrapper.find('button').last().simulate('click');
    });
    expect(wrapper.html()).toContain("Error: Availabilityperiods cannot be empty")
    expect(alertSpy).toHaveBeenCalledTimes(0);
  });
  it('Clicking "add period" button with valid periods should add another period field to view', async() => {
    const wrapper = mount(<Router><Apply/></Router>);
    await act(async () => {
      expect(wrapper.html().split("Available from").length - 1).toBe(1);
      wrapper.find('button').at(1).simulate('submit', {target: {
        startDate: {value: "2022-01-01"},
        endDate: {value: "2022-02-02"},
      }});
    });
    expect(wrapper.html().split("Available from").length - 1).toBe(2);
    expect(wrapper.html()).not.toContain("Error");
  });
  it('Clicking "Add expertise" button without specifying anything should display an error (in code, in reality user is blocked by "required")', async() => {
    const wrapper = mount(<Router><Apply/></Router>);
    await act(async () => {
      wrapper.find('button').at(0).simulate('submit');
    });
    expect(wrapper.html()).toContain("Error: Years of experience needs to be a number")
  });
  it('Clicking "Add expertise" button without specifying years of experience should not update view', async() => {
    const wrapper = mount(<Router><Apply/></Router>);
    const oldHtml = wrapper.html();
    await act(async () => {
      wrapper.find('button').at(0).simulate('submit', {target: {
        selectExpertice: {value: "Job"},
      }});
    });
    expect(wrapper.html()).toContain("Error: Years of experience needs to be a number")
  });
  it('Clicking "Add expertise" button with valid entered fields should add a new expertise field', async() => {
    const wrapper = mount(<Router><Apply/></Router>);
    const oldHtml = wrapper.html();
    expect(wrapper.html().split("Area of expertise").length - 1).toBe(1);
    await act(async () => {
      wrapper.find('button').at(0).simulate('submit', {target: {
        expertise: {value: "Job"},
        experience: {value: 123},
      }});
    });
    expect(wrapper.html()).not.toContain("Error");
    expect(wrapper.html().split("Area of expertise").length - 1).toBe(2);
  });
  it('View should support Swedish', async() => {
    window.localStorage.setItem("language", "se");
    let wrapper;
    await act(async () => {
      wrapper = mount(<Router><Apply/></Router>);
    });
    expect(wrapper.html()).toContain("ANSÖKAN");
  });
  it('Error message should be in Swedish', async() => {
    window.localStorage.setItem("language", "se");
    const wrapper = mount(<Router><Apply/></Router>);
    await act(async () => {
      wrapper.find('button').last().simulate('click');
    });
    expect(wrapper.html()).toContain("Error: Tillgänglighetperioder får ej vara tomma")
  });
})
