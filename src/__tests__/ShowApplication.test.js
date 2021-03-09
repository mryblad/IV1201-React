import React from 'react'
import Enzyme, { mount } from 'enzyme';
import {useHistory} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {ShowApplication} from "./../Components/ShowApplication/ShowApplication";
import apiService from "./../Services/apiService";
import 'regenerator-runtime/runtime'; //needed for async
import { act } from "react-dom/test-utils"; //needed when renderer uses useState

// Test to see if Jest is working
Enzyme.configure({ adapter: new Adapter() });

const mockprops = {
    "pathname": "/applicationdetails",
    "application": {
        "availability_id": "1",
        "from_date": "2014-02-23",
        "to_date": "2014-05-25",
        "createdAt": null,
        "application_status": "accepted",
        "version_number": "0",
        "person": {
            "name": "Per",
            "surname": "Strand",
            "competence_profiles": [{
                "years_of_experience": "2.00",
                "competence": {
                    "competence_id": "2",
                    "competence_translations": [{
                        "language": "en",
                        "translation": "Merry-go-round"
                    }, {
                        "language": "se",
                        "translation": "Karuselldrift"
                    }]
                }
            }, {
                "years_of_experience": "3.50",
                "competence": {
                    "competence_id": "1",
                    "competence_translations": [{
                        "language": "en",
                        "translation": "Hot-dog-stand"
                    }, {
                        "language": "se",
                        "translation": "Korvgrillning"
                    }]
                }
            }]
        }
    }
}

const handleApplicaitonSpy = jest.spyOn(apiService, 'handleApplication');
handleApplicaitonSpy.mockReturnValue(Promise.resolve({
  "success": true
}));
const alertSpy = jest.spyOn(window, 'alert');
alertSpy.mockReturnValue(null);

describe('ShowApplication', () => {
  it('Application information should be showing (in English)', async() => {
    window.localStorage.setItem("language", "en");
    const wrapper = mount(<ShowApplication location={mockprops}/>);
    expect(wrapper.html()).toContain("Per Strand");
    expect(wrapper.html()).toContain("Merry-go-round");
    expect(wrapper.html()).toContain("2.00");
    expect(wrapper.html()).toContain("Hot-dog-stand");
    expect(wrapper.html()).toContain("3.50");
    expect(wrapper.html()).toContain("Can work from:");
    expect(wrapper.html()).toContain("2014-02-23");
    expect(wrapper.html()).toContain("to:");
    expect(wrapper.html()).toContain("2014-05-25");
    expect(wrapper.html()).not.toContain("version_number");
  })
  it('Application information should be showing (in Swedish)', async() => {
    window.localStorage.setItem("language", "se");
    const wrapper = mount(<ShowApplication location={mockprops}/>);
    expect(wrapper.html()).toContain("Per Strand");
    expect(wrapper.html()).toContain("Karuselldrift");
    expect(wrapper.html()).toContain("2.00");
    expect(wrapper.html()).toContain("Korvgrillning");
    expect(wrapper.html()).toContain("3.50");
    expect(wrapper.html()).toContain("Tillgänglig från och med:");
    expect(wrapper.html()).toContain("2014-02-23");
    expect(wrapper.html()).toContain("tills:");
    expect(wrapper.html()).toContain("2014-05-25");
    expect(wrapper.html()).not.toContain("version_number");
  })
  it('Accept button should result in function call and a popup alert', async() => {
    await act(async () => {
      const wrapper = mount(<Router><ShowApplication location={mockprops}/></Router>);
      wrapper.find('button').first().simulate('click');
    });
    expect(handleApplicaitonSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledTimes(1);
  })
  it('Reject button should result in function call and a popup alert', async() => {
    handleApplicaitonSpy.mockClear();
    alertSpy.mockClear();
    await act(async () => {
      const wrapper = mount(<Router><ShowApplication location={mockprops}/></Router>);
      wrapper.find('button').at(1).simulate('click');
    });
    expect(handleApplicaitonSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledTimes(1);
  })
})
