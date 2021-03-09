import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Menu} from "./../Components/Menu/Menu";
//import apiService from "./../Services/apiService";
import user from "./../Model/User";
import 'regenerator-runtime/runtime'; //needed for async
import { act } from "react-dom/test-utils"; //needed when renderer uses useState


Enzyme.configure({ adapter: new Adapter() });
describe('Menu', () => {
  it('Applicants should see links for apply, updaterperson and not applications', async() => {
    let wrapper;
    await act(async () => {
      user.setType("applicant");
      wrapper = mount(<Router><Menu/></Router>);
    });
    expect(wrapper.html()).toContain("/apply");
    expect(wrapper.html()).toContain("/updateperson");
    expect(wrapper.html()).not.toContain("/applications");
  });
  it('Recruiters should see links for applications and not apply or updaterperson', async() => {
    let wrapper;
    await act(async () => {
      user.setType("recruiter");
      wrapper = mount(<Router><Menu/></Router>);
    });
    expect(wrapper.html()).not.toContain("/apply");
    expect(wrapper.html()).not.toContain("/updateperson");
    expect(wrapper.html()).toContain("/applications");
  });
  it('Applicants should see links for apply, updaterperson and not applications in English', async() => {
    let wrapper;
    await act(async () => {
      user.setType("applicant");
      wrapper = mount(<Router><Menu/></Router>);
    });
    expect(wrapper.html()).toContain("Apply");
    expect(wrapper.html()).toContain("Update Person");
    expect(wrapper.html()).not.toContain("Applications");
  });
  it('Applicants should see links for apply, updaterperson and not applications in Swedish', async() => {
    window.localStorage.setItem("language", "se");
    let wrapper;
    await act(async () => {
      user.setType("applicant");
      wrapper = mount(<Router><Menu/></Router>);
    });
    expect(wrapper.html()).toContain("Ansök");
    expect(wrapper.html()).toContain("Uppdatera Person");
    expect(wrapper.html()).not.toContain("Ansökningar");
  });
})
