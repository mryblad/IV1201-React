import {createElement} from 'react';
import {useHistory} from 'react-router-dom';
import {ShowApplicationView} from './ShowApplicationView';
import apiService from '../../Services/apiService';

/**
 * ShowApplication presenter
 */
function ShowApplication(props){

    const history=useHistory();

    return createElement(ShowApplicationView,{
        application:props.location.application,
        handle:application_status=>{
            apiService.handleApplication(props.location.application.availability_id,{
                application_status,
                version_number:props.location.application.version_number
            })
            alert("application "+application_status);
            history.goBack();
        },
        goBack:()=>history.goBack()
    });
}

export {ShowApplication};