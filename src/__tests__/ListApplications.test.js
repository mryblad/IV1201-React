import React from 'react'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {ListApplications} from "./../Components/ListApplications/ListApplications";
import apiService from "./../Services/apiService";
import 'regenerator-runtime/runtime'; //needed for async
import { act } from "react-dom/test-utils"; //needed when renderer uses useState

const perApplication = {
    "availability_id": "2",
    "from_date": "2014-07-10",
    "to_date": "2014-08-10",
    "createdAt": null,
    "application_status": null,
    "version_number": "0",
    "person": {
        "name": "Per",
        "surname": "Strand",
        "competence_profiles": [
            {
                "years_of_experience": "3.50",
                "competence": {
                    "competence_id": "1",
                    "competence_translations": [
                        {
                            "language": "en",
                            "translation": "Hot-dog-stand"
                        },
                        {
                            "language": "se",
                            "translation": "Korvgrillning"
                        }
                    ]
                }
            }
        ]
    }
};

const hansApplication = {
    "availability_id": "8",
    "from_date": "2021-03-11",
    "to_date": "2021-03-25",
    "createdAt": "2021-03-03T09:39:48.800Z",
    "application_status": null,
    "version_number": "0",
    "person": {
        "name": "hans",
        "surname": "hans",
        "competence_profiles": [
            {
                "years_of_experience": "2.00",
                "competence": {
                    "competence_id": "2",
                    "competence_translations": [
                        {
                            "language": "en",
                            "translation": "Merry-go-round"
                        },
                        {
                            "language": "se",
                            "translation": "Karuselldrift"
                        }
                    ]
                }
            },
            {
                "years_of_experience": "1.00",
                "competence": {
                    "competence_id": "1",
                    "competence_translations": [
                        {
                            "language": "en",
                            "translation": "Hot-dog-stand"
                        },
                        {
                            "language": "se",
                            "translation": "Korvgrillning"
                        }
                    ]
                }
            }
        ]
    }
};

const getApplications = {
  "success": [
    perApplication,
    hansApplication
  ]
};

const form = {
  name: {value: ""},
  surname: {value: ""},
  start: {value: ""},
  end: {value: ""},
  applicationstart: {value: ""},
  applicationend: {value: ""},
  competence: {value: "Any"},
};


// Test to see if Jest is working
Enzyme.configure({ adapter: new Adapter() });

const getCompetencesSpy = jest.spyOn(apiService, 'getCompetences');
getCompetencesSpy.mockReturnValue(null);

const getApplicationsSpy = jest.spyOn(apiService, 'getApplications');
getApplicationsSpy.mockReturnValue(Promise.resolve(getApplications));

describe('ListApplications', () => {
  it('Empty search should result in two found applications', async() => {
    const wrapper = mount(<ListApplications/>);
    await act(async () => {
      wrapper.find('button').first().simulate('submit', {target: form});
    });
    expect(wrapper.find('tbody').text()).toContain("Per Strand");
    expect(wrapper.find('tbody').text()).toContain("hans hans");
  })
  it('Filter applications by name should result in one found', async() => {
    const wrapper = mount(<ListApplications/>);
    await act(async () => {
      form.name.value = "Per";
      wrapper.find('button').first().simulate('submit', {target: form});
      form.name.value = "";
    });
    expect(wrapper.find('tbody').text()).toContain("Per Strand");
    expect(wrapper.find('tbody').text()).not.toContain("hans hans");
  });
  it('Filter applications by surname should result in one found', async() => {
    const wrapper = mount(<ListApplications/>);
    await act(async () => {
      form.surname.value = "hans";
      wrapper.find('button').first().simulate('submit', {target: form});
      form.surname.value = "";
    });
    expect(wrapper.find('tbody').text()).not.toContain("Per Strand");
    expect(wrapper.find('tbody').text()).toContain("hans hans");
  });
  it('Filter applications by competence should result in one found', async() => {
    const wrapper = mount(<ListApplications/>);
    await act(async () => {
      form.competence.value = "Merry-go-round";
      wrapper.find('button').first().simulate('submit', {target: form});
      form.competence.value = "Any";
    });
    expect(wrapper.find('tbody').text()).not.toContain("Per Strand");
    expect(wrapper.find('tbody').text()).toContain("hans hans");
  });
  it('Filter with unknown name should cause no applications', async() => {
    const wrapper = mount(<ListApplications/>);
    await act(async () => {
      form.name.value = "unknown";
      wrapper.find('button').first().simulate('submit', {target: form});
      form.name.value = "";
    });
    expect(wrapper.find('tbody').text()).not.toContain("Per Strand");
    expect(wrapper.find('tbody').text()).not.toContain("hans hans");
  });
  it('Filter with available start date should only show one application', async() => {
    const wrapper = mount(<ListApplications/>);
    await act(async () => {
      form.start.value = "2021-01-01";
      wrapper.find('button').first().simulate('submit', {target: form});
      form.start.value = "";
    });
    expect(wrapper.find('tbody').text()).not.toContain("Per Strand");
    expect(wrapper.find('tbody').text()).toContain("hans hans");
  });
  it('Filter with available end date should only show one application', async() => {
    const wrapper = mount(<ListApplications/>);
    await act(async () => {
      form.end.value = "2021-01-01";
      wrapper.find('button').first().simulate('submit', {target: form});
      form.end.value = "";
    });
    expect(wrapper.find('tbody').text()).toContain("Per Strand");
    expect(wrapper.find('tbody').text()).not.toContain("hans hans");
  });
  it('Filter with application start date should only show one application', async() => {
    const wrapper = mount(<ListApplications/>);
    await act(async () => {
      form.applicationstart.value = "2021-01-01";
      wrapper.find('button').first().simulate('submit', {target: form});
      form.applicationstart.value = "";
    });
    expect(wrapper.find('tbody').text()).not.toContain("Per Strand");
    expect(wrapper.find('tbody').text()).toContain("hans hans");
  });
  it('Filter with application end date should only show one application', async() => {
    const wrapper = mount(<ListApplications/>);
    await act(async () => {
      form.applicationend.value = "2021-05-01";
      wrapper.find('button').first().simulate('submit', {target: form});
      form.applicationend.value = "";
    });
    expect(wrapper.find('tbody').text()).not.toContain("Per Strand");
    expect(wrapper.find('tbody').text()).toContain("hans hans");
  });
  it('Error response from REST should result in an error showing', async() => {
    const wrapper = mount(<ListApplications/>);
    await act(async () => {
      form.name.value = "errorme";
      getApplicationsSpy.mockReturnValue(Promise.resolve({error: new Error("test error")}));
      wrapper.find('button').first().simulate('submit', {target: form});
    });
    expect(wrapper.html()).toContain("Error: Could not get applications")
  });
})
