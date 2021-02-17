import {createElement,useState,useEffect,Fragment} from 'react';
import {ListApplicationsResultsView} from './ListApplicationsResultsView';
import {ListApplicationsSearchView} from './ListApplicationsSearchView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';

/**
 * ListApplications presenter
 */
function ListApplications(){
    const [promise,setPromise]=useState();
    const [applications,setApplications]=useState();
    const [error,setError]=useState();
    const [filter,setFilter]=useState();

    useEffect(()=>{
        promise&&promise.then(dt=>dt.success).then(unfiltered=>{
            const {name,surname,availableStart,availableEnd,applicationStart,applicationEnd,competence}=filter;
            let filtered=unfiltered;
            filtered=name?[...filtered].filter(application=>application.person.name.toLowerCase()===name.toLowerCase()):filtered;
            filtered=surname?[...filtered].filter(application=>application.person.surname.toLowerCase()===surname.toLowerCase()):filtered;
            filtered=availableStart?[...filtered].filter(application=>application.from_date>=availableStart):filtered;
            filtered=availableEnd?[...filtered].filter(application=>application.to_date<=availableEnd):filtered;
            filtered=applicationStart?[...filtered].filter(application=>application.createdAt>=applicationStart):filtered;
            filtered=applicationEnd?[...filtered].filter(application=>application.createdAt<=applicationEnd):filtered;
            filtered=competence!=="Any"?[...filtered].filter(application=>{
                return application.person.competence_profiles.map(competenceProfile=>competenceProfile.competence.name_se).includes(competence);
            }):filtered;
            setApplications(filtered);
        }).catch(er=>setError(er));
    },[promise,filter]);

    return createElement(Fragment,{},
        createElement(ListApplicationsSearchView,{
            getApplications:e=>{
                e.preventDefault();
                setFilter({
                    name:e.target.name.value,
                    surname:e.target.surname.value,
                    availableStart:e.target.start.value,
                    availableEnd:e.target.end.value,
                    applicationStart:e.target.applicationstart.value,
                    applicationEnd:e.target.applicationend.value,
                    competence:e.target.competence.value
                })
                setPromise(apiService.getApplications());
            },
        }),
        createElement(ListApplicationsResultsView,{
            applications,
            error,
        })
    );
}

export {ListApplications};