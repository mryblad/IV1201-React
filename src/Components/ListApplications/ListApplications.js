import {createElement,useState,useEffect,Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import {ListApplicationsResultsView} from './ListApplicationsResultsView';
import {ListApplicationsSearchView} from './ListApplicationsSearchView';
import {Translations} from './../../util/Translations'
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
    const [translationPromise,setTranslationPromise]=useState(apiService.getCompetences());
    const [competences,setCompetences]=useState(null);
    const [language,setLanguage]=useState(localStorage.getItem("language") || "en");
    const [translations,setTranslations]=useState(Translations[language].listApplications);
    const history=useHistory();

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
            filtered=competence!==translations.any?[...filtered].filter(application=>{
                return application.person.competence_profiles.map(competenceProfile=>{
                    return competenceProfile.competence.competence_translations.find(t=>t.language===language).translation
                })
                .includes(competence);
            }):filtered;
            setApplications(filtered);
        }).catch(er=>setError(er));
    },[promise,filter,translations]);

    useEffect(()=>{
        translationPromise&&translationPromise.then(data=>{
            let jsx = []
            if(data.success){
              data.success.map((e, i) =>
                e.competence_translations.map(l =>
                  l.language == language ? jsx.push(<option value={l.translation} key={i}>{l.translation}</option>) : null
                )
              )
            }
            setCompetences(jsx)
          }).catch(console.error);
    },[translationPromise,language])

    return createElement(Fragment,{},
        createElement(ListApplicationsSearchView,{
            competences,
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
            translations: Translations[localStorage.getItem("language") || "en"].listApplications,
        }),
        createElement(ListApplicationsResultsView,{
            applications,
            error,
            handleRowClick:application=>{
                history.push({
                    pathname:'applicationdetails',
                    application,
                });
            },
            translations,
        })
    );
}

export {ListApplications};
