import {createElement,useState} from 'react';
import {useHistory} from 'react-router-dom';
import {ShowApplicationView} from './ShowApplicationView';
import {Translations} from './../../util/Translations'
import apiService from '../../Services/apiService';

/**
 * ShowApplication presenter
 */
function ShowApplication(props){
    const [language,setLanguage]=useState(localStorage.getItem("language") || "en");
    const [translations,setTranslations]=useState(Translations[language].showApplication);
    const history=useHistory();

    return createElement(ShowApplicationView,{
        application:props.location.application,
        handle:application_status=>{
            apiService.handleApplication(props.location.application.availability_id,{
                application_status,
                version_number:props.location.application.version_number
            })
            .then(res=>alert(translations.msg))
            .catch(err=>alert(translations.errMsg));
            history.goBack();
        },
        goBack:()=>history.goBack(),
        language,
        translations
    });
}

export {ShowApplication};
