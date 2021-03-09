import React from 'react'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Apply} from "./../Components/Apply/Apply";
import 'regenerator-runtime/runtime'; //needed for async
import { act } from "react-dom/test-utils"; //needed when renderer uses useState

// Test to see if Jest is working
Enzyme.configure({ adapter: new Adapter() });
describe('Apply', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({error: new Error("Fake error to disable validity check")}),
    })
  );
  it('Submitting without any data should not cause a change in the view', async() => {
    const wrapper = mount(<Apply/>);
    const oldHtml = wrapper.html();
    await act(async () => {
      wrapper.find('button').last().simulate('submit');
    });
    expect(wrapper.html()).toBe(oldHtml);
  });
})
//describe('Apply', () => {
  // jest.spyOn(window, 'alert').mockImplementation(() => {console.log("alert detected")});
  //
  // global.fetch = jest.fn(() =>
  // Promise.resolve({
  //   json: () => Promise.resolve({
  //     success: {success:
  //       [
  //         {
  //           competence_translations: [
  //             {
  //               language: se, translation: "testSE"
  //             },
  //             {
  //               language: en, translation: "testEN"
  //             },
  //           ]
  //         }
  //       ]
  //     }
  //   }),
  // })
  //   Promise.resolve({
  //     json: () => Promise.resolve({
  //       success: [{competence_translations: [{language: "se", translation:"SE"}]}]
  //     }),
  //   })
  // );

  // it('Successful submission should result with an alert window', async() => {
  //   const wrapper = mount(<Apply/>);
  //   const oldHtml = wrapper.html();
  //   await act(async () => {
  //     wrapper.find('button').last().simulate('submit');
  //   });
  //   expect(wrapper.html()).toBe(oldHtml);
  // });
//})
